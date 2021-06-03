const debug = require('debug')('server:playersController');
const Player = require('../models/player.model');

function playersController() {
  async function createOne(req, res) {
    const newPlayer = new Player(req.body);
    debug(newPlayer);
    try {
      await newPlayer.save();
      res.json(newPlayer);
    } catch (error) {
      debug(error);
      res.send(error);
    }
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

  return {
    createOne,
    loadPlayer,
  };
}

module.exports = playersController;
