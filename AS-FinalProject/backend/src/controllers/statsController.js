const debug = require('debug')('server:statsController');
const Stats = require('../models/stats.model');

function playersController() {
  async function createStats(req, res) {
    const newPlayerStats = new Stats(req.body);
    debug(newPlayerStats);
    try {
      await newPlayerStats.save();
      res.json(newPlayerStats);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }
  async function getMatchStats(req, res) {
    try {
      const playerById = await Stats.findById(
        req.params.playerId,
      );
      res.json(playerById);
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
    }
  }
  return {
    createStats,
    getMatchStats,
  };
}

module.exports = playersController;
