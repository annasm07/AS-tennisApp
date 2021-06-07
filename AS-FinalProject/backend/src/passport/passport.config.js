/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const JWTstrategy = require('passport-jwt');
const { Strategy } = require('passport-local');
const md5 = require('md5');
const UserModel = require('../models/user.model');
const PlayerModel = require('../models/player.model');

passport.use(
  'signup',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const user = await UserModel.findOne({ email });
        if (!user) {
          const newPlayer = await PlayerModel.create({
            name: req.body.playerName.toLowerCase(),
          });
          const newUser = await UserModel.create({
            email: email.toLowerCase(),
            password: md5(password),
            name: req.body.name.toLowerCase(),
            player: req.body.player,
            playerName: req.body.playerName.toLowerCase(),
            playerId: newPlayer._id,
          });

          return done(null, newUser, newPlayer);
        }
        return done(null, false, { message: 'Email already taken' });
      } catch (error) {
        return done(error);
      }
    },
  ),
);

passport.use(
  'login',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        const validate = await user.isValidPassword(password);

        if (!validate) {
          return done(null, false, { message: 'Wrong Password' });
        }

        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    },
  ),
);

passport.use(
  new JWTstrategy.Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: JWTstrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        return done(error);
      }
    },
  ),
);
