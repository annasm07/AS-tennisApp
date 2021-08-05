/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const JWTstrategy = require('passport-jwt');
const { Strategy } = require('passport-local');
const md5 = require('md5');
const { v4: uuidv4 } = require('uuid');
const {
  getAws, putDataAws, getPlayerQuery, isValidPassword,
} = require('../utils/awsLogic');
const textFile = require('../utils/textFile.json');

const tableUser = process.env.TABLEUSER;
const tablePlayer = process.env.TABLEPLAYER;

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
        const user = await getAws(tableUser, email);
        const playerExists = await getPlayerQuery(tablePlayer, req.body.playerName);
        if (!user && !playerExists) {
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
        if (playerExists) {
          return done(null, playerExists, { message: `${textFile.signUp.playerExists}` });
        }
        return done(null, user, { message: `${textFile.signUp.emailExists}` });
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
        const user = await getAws(tableUser, email);
        if (!user) {
          return done(null, false, { message: `${textFile.login.userNotFound}` });
        }

        const validate = await isValidPassword(password, user.password);

        if (!validate) {
          return done(null, false, { message: `${textFile.login.wrongPassword}` });
        }
        return done(null, user, { message: `${textFile.signUp.loginOk}` });
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
