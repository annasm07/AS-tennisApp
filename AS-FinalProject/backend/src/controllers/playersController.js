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
  async function loadDashboard(req, res) {
    const player = await Player.find();
    res.json(player);
  }

  async function getOnePlayer(req, res) {
    try {
      const playerById = await Player.findById(
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
    createOne,
    getOnePlayer,
    loadDashboard,
  };
}

module.exports = playersController;
