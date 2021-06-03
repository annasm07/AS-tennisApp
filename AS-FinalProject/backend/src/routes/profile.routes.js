const { Router } = require('express');
const matchesController = require('../controllers/matchesController')();
const playersController = require('../controllers/playersController')();
const statsController = require('../controllers/statsController')();

const profileRoutes = Router();

profileRoutes
  .route('/home/:playerId')
  .get(playersController.loadPlayer)
  .put(playersController.updatePlayerById)
  .delete(playersController.deletePlayerById);

profileRoutes
  .route('/players')
  .get(playersController.getAllPlayers);

profileRoutes
  .route('/stats')
  .post(statsController.createStats);

profileRoutes
  .route('/stats/:matchId')
  .get(statsController.getMatchStats);

profileRoutes
  .route('/match/:matchId')
  .put(matchesController.updateMatchById)
  .delete(matchesController.deleteMatchById)
  .get(matchesController.getMatchById);

profileRoutes
  .route('/match')
  .post(matchesController.createMatch);

module.exports = profileRoutes;
