const { Router } = require('express');
const authController = require('../controllers/authController')();

const authRoutes = Router();

authRoutes
  .route('/signup')
  .post(authController.signUp);

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
