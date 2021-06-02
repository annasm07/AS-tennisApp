const { Router } = require('express');
const matchesController = require('../controllers/matchesController')();
const playersController = require('../controllers/playersController')();
const statsController = require('../controllers/statsController')();

const profileRoutes = Router();

profileRoutes
  .route('/home/:playerId')
  .get(playersController.loadPlayer);

profileRoutes
  .route('/stats')
  .post(statsController.createStats);

profileRoutes
  .route('/match')
  .get(matchesController.getMatchById)
  .post(matchesController.createMatch);

profileRoutes
  .route('/match/:matchId')
  .get(statsController.getMatchStats);

module.exports = profileRoutes;
