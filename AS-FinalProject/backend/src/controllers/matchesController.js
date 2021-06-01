const debug = require('debug')('server:matchesController');
const Match = require('../models/match.model');

function matchesController() {
  async function createMatch(req, res) {
    const newMatch = new Match(req.body);
    debug(newMatch);
    try {
      await newMatch.save();
      res.json(newMatch);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  return {
    createMatch,
  };
}

module.exports = matchesController;
