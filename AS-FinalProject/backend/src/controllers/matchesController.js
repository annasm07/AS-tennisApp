/* eslint-disable max-len */
const debug = require('debug')('server:matchesController');
const Match = require('../models/match.model');

function matchesController() {
  async function createMatch(req, res) {
    const newMatch = new Match(
      {
        result:
            [{
              player: '60b72fc8241a200be178038a',
              name: req.body.p1Name,
              games: [0, 0, 0],
            },
            {
              name: req.body.p2Name,
              games: [0, 0, 0],
            }],
        date: Date.now(),
      },
    );
    debug(newMatch);
    try {
      await newMatch.save();
      res.json(newMatch);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }
  async function getMatchById(req, res) {
    try {
      const { matchId } = req.params;
      const matchById = await Match.findById(
        matchId,
      );
      res.json(matchById);
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
    }
  }

  async function updateMatchById(req, res) {
    try {
      const updatedMatch = await Match.findOneAndUpdate(
        req.params.matchId, {
          flow: req.body.flow,
          results: req.body.results,
        },
      );
      res.json(updatedMatch);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }
  async function deleteMatchById(req, res) {
    try {
      await Match.findOneAndDelete(req.params.matchId);
      res.status(204);
      res.json();
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  return {
    createMatch,
    getMatchById,
    updateMatchById,
    deleteMatchById,
  };
}

module.exports = matchesController;
