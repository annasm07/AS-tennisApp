/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const jwt = require('jsonwebtoken');
const textFile = require('../utils/textFile.json');

let refreshTokens = [];

function authController() {
  async function signUp(req, res) {
    const authInfo = Object.keys(req.authInfo).length > 0 ? req.authInfo : `${textFile.signUp.signUpOk}`;
    const userEmail = JSON.parse(JSON.stringify(req.body.email.toLowerCase()));
    if (Object.keys(res.req.user).length > 0) {
      res.status(401).send(`${textFile.signUp.emailExists} or ${textFile.signUp.playerExists}`);
    } else {
      res.json({
        message: authInfo,
        userEmail,
      });
    }
  }

  async function logIn(req, res, next) {
    passport.authenticate(
      'login',
      async (err, user) => {
        try {
          if (err || !user) {
            return res.status(401).send(`${textFile.login.wrongLogin}`);
          }

          return req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              const data = { _id: user._id, email: user.email };
              const token = jwt.sign(
                { user: data },
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRES },
              );
              const refreshToken = jwt.sign(
                { user: data },
                process.env.JWT_SECRET,
              );

              refreshTokens.push(refreshToken);

              return res.json({
                token,
                refreshToken,
                user,
              });
            },
          );
        } catch (error) {
          return next(error);
        }
      },
    )(req, res, next);
  }

  function updateToken(req, res) {
    const { token } = req.body;

    if (!token) {
      return res.sendStatus(401);
    }

    if (!refreshTokens.includes(token)) {
      return res.sendStatus(403);
    }

    return jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      const data = { _id: user._id, email: user.email };

      const accessToken = jwt.sign(
        { user: data },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES },
      );

      return res.json({
        accessToken,
      });
    });
  }

  function logOut(req, res) {
    const { token } = req.body;
    refreshTokens = refreshTokens.filter((current) => current !== token);

    res.send(`${textFile.logOut.logOutOk}`);
  }
  return {
    signUp,
    logIn,
    updateToken,
    logOut,
  };
}

module.exports = authController;
