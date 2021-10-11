/* eslint-disable no-underscore-dangle */
const debug = require('debug')('server:matchesController');
const { v4: uuidv4 } = require('uuid');
const {
  getQuery, updateDynamoDB, updateArray, deleteDynamoDB,
} = require('../utils/logicDynamoDB');
const {
  createNewMatch,
} = require('../utils/createMatch');

function matchesController() {
  async function createMatch(req, res) {
    const tablePlayer = process.env.TABLEPLAYER;
    const tableMatch = process.env.TABLEMATCH;
    const tablePlayedMatches = process.env.TABLEPLAYEDMATCHES;

    const newMatch = await createNewMatch(req.body);

    try {
      const playerById = await getQuery(tablePlayer, '_id', req.body.playerId);

      // if (typeof playerById[0].playedMatches === 'object') {
      //   playerById[0].playedMatches.shift();
      // }

      const createID = uuidv4();

      const update = await updateDynamoDB(tableMatch, tablePlayedMatches,
        newMatch, [], createID);
      const updatePlayer = await updateDynamoDB(tablePlayer, tablePlayedMatches,
        createID, playerById);
      playerById[0].playedMatches.push(createID);
      const updatePlayedMatches = await updateArray(tablePlayer, playerById);

      res.send({
        new_match: update,
        player_with_matches: updatePlayer,
        update_played_matches: updatePlayedMatches,
      });
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
    }
  }

  async function getMatchById(req, res) {
    try {
      const { matchId } = req.params;
      const matchById = await getQuery('match', '_id', matchId);
      res.json(matchById);
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
    }
  }

  async function updateMatchById(req, res) {
    try {
      const updatedMatch = await updateDynamoDB('match', 'playedMatches',
        {
          flow: req.body.flow,
          result: req.body.result,
        }, req.params.matchId);
      res.json(updatedMatch);
    } catch (error) {
      res.send(error);
      debug(error);
    }
  }

  async function deleteMatchFromPlayerById(playerId, matchId) {
    const tablePlayer = process.env.TABLEPLAYER;
    const playerById = await getQuery(tablePlayer, '_id', playerId);
    const matchesArray = playerById[0].playedMatches
      .filter((playerMatchId) => playerMatchId !== matchId);

    return matchesArray;
  }

  async function deleteMatchById(req, res) {
    try {
      const tablePlayer = process.env.TABLEPLAYER;
      const { matchId } = req.params;
      const deleted = await deleteDynamoDB('match', matchId);
      const playerId = deleted.Attributes.playedMatches[0].player[0];
      const deletedMatchFromPlayer = await deleteMatchFromPlayerById(playerId, matchId);
      const playerWhitoutMatchInArrayMatches = await
      updateArray(tablePlayer, playerId, deletedMatchFromPlayer);

      res.json(deleted.Attributes, playerWhitoutMatchInArrayMatches);
      res.status(204);
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
