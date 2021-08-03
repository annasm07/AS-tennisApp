/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const JWTstrategy = require('passport-jwt');
const { Strategy } = require('passport-local');
const md5 = require('md5');
const { v4: uuidv4 } = require('uuid');
const UserModel = require('../models/user.model');
const { getAws, putDataAws } = require('../utils/counterLogic');

passport.use(
  'signup',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const tableUser = 'user';
      const tablePlayer = 'player';
      try {
        const user = await getAws(tableUser, email);
        if (!user) {
          const idPlayer = uuidv4();
          const paramsPlayer = {
            _id: idPlayer,
            name: req.body.playerName,
          };
          const newPlayer = await putDataAws(tablePlayer, paramsPlayer);
          const newUser = await putDataAws(tableUser, {
            _id: uuidv4(),
            email: email.toLowerCase(),
            password: md5(password),
            name: req.body.name,
            player: req.body.player,
            playerName: req.body.playerName,
            playerId: idPlayer,
          });
          return done(null, newUser, newPlayer);
        }
        return done(null, user, { message: 'Email already taken' });
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
