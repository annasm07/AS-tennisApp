const debug = require('debug')('server:playersController');
const Player = require('../models/player.model');

function playersController() {
  async function getAllPlayers(req, res) {
    const players = await Player.find();
    res.json(players);
  }

  async function loadPlayer(req, res) {
    try {
      const { playerId } = req.params;
      const playerfound = await Player.findById(playerId);
      res.json(playerfound);
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
    }
  }

  async function updatePlayerById(req, res) {
    try {
      const updatedPlayer = await Player.findOneAndUpdate(
        req.params.playerId,
        req.body,
        { new: true },
      );
      res.json(updatedPlayer);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function deletePlayerById(req, res) {
    try {
      await Player.findOneAndDelete(req.params.playerId);
      res.status(204);
      res.json();
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  return {
    getAllPlayers,
    loadPlayer,
    updatePlayerById,
    deletePlayerById,
  };
}

module.exports = playersController;
