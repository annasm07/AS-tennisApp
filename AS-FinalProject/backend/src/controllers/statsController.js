const debug = require('debug')('server:statsController');
const Stats = require('../models/stats.model');

function statsController() {
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
      const statsById = await Stats.findById(
        req.params.statsId,
      );
      res.json(statsById);
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

module.exports = statsController;
