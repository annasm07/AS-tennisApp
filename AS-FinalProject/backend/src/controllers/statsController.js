const debug = require('debug')('server:statsController');
const Stats = require('../models/stats.model');
const Match = require('../models/match.model');

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
      const { matchId } = req.params;
      const statsIdsFound = await Match.findById(matchId);
      const statsIds = [statsIdsFound.result[0].stats, statsIdsFound.result[1].stats];
      const statsOfMatch1 = await Stats.findById(statsIds[0]);
      const statsOfMatch2 = await Stats.findById(statsIds[1]);
      const allStats = [statsOfMatch1, statsOfMatch2];
      res.json(allStats);
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
