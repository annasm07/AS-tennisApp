const { Router } = require('express');
const passport = require('passport');
const authController = require('../controllers/authController')();

const authRoutes = Router();

authRoutes.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  authController.signUp,
);

authRoutes
  .route('/login')
  .post(authController.logIn);

authRoutes
  .route('/token')
  .post(authController.updateToken);

authRoutes
  .route('/logout')
  .post(authController.logOut);

module.exports = authRoutes;
