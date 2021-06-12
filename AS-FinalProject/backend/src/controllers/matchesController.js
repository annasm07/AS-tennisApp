/* eslint-disable no-underscore-dangle */
const debug = require('debug')('server:matchesController');
const Match = require('../models/match.model');
const Player = require('../models/player.model');

function matchesController() {
  async function createMatch(req, res) {
    const newMatch = new Match(
      {
        result:
            [{
              player: [req.body.playerId],
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
    const playerById = await Player.findById(
      req.body.playerId,
    );
    playerById.playedMatches.push(newMatch._id);

    await Player.findOneAndUpdate(
      newMatch.result[0].player, {
        playedMatches: playerById.playedMatches,
      },
    );
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
          result: req.body.result,
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
