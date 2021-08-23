import axios from 'axios';
import actionTypes from './actionTypes';
import {env} from '../../../.env.js';

export function logIn(email, password) {
  return async dispatch => {
    try {
      const {data} = await axios.post(env.LOG_IN_URL, {email, password});
      dispatch({
        type: actionTypes.LOG_IN,
        user: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR,
      });
    }
  };
}

export function signUp({name, email, password, player, playerName}) {
  return async dispatch => {
    try {
      const {data} = await axios.post(env.SIGN_UP_URL, {
        name,
        email,
        password,
        player,
        playerName,
      });
      dispatch({
        type: actionTypes.SIGN_UP,
        user: data.user,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.ERROR,
      });
    }
  };
}

export function getPlayerInfo(token, playerId) {
  return async dispatch => {
    try {
      const {data} = await axios(`${env.GET_PLAYER_URL}/${playerId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: actionTypes.GET_PLAYER,
        player: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.GET_PLAYER_ERROR,
      });
    }
  };
}

export function getAllPlayers(token) {
  return async dispatch => {
    try {
      const {data} = await axios(env.GET_ALL_PLAYERS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: actionTypes.GET_PLAYERS,
        players: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.GET_PLAYERS_ERROR,
      });
    }
  };
}

export function newMatch(token, p1Name, p2Name, playerId) {
  return async dispatch => {
    try {
      const {data} = await axios.post(
        env.CREATE_MATCH_URL,
        {p1Name, p2Name, playerId},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch({
        type: actionTypes.CREATE_MATCH,
        currentMatch: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.CREATE_MATCH_ERROR,
      });
    }
  };
}

export function clearError() {
  console.log('clearError ACTION----');

  return {
    type: actionTypes.CLEAR_ERROR,
  };
}

export function updateGames(playerWhoWon) {
  return {
    type: actionTypes.UPDATE_GAMES,
    playerWhoWon,
  };
}

export function updatePoints(playerWhoWon) {
  return {
    type: actionTypes.UPDATE_POINTS,
    playerWhoWon,
  };
}

export function updateServer(player) {
  return {
    type: actionTypes.UPDATE_SERVER,
    player,
  };
}

export function updateSets(playerWhoWon) {
  return {
    type: actionTypes.UPDATE_SETS,
    playerWhoWon,
  };
}

export function updateMatchGames(games, points) {
  return {
    type: actionTypes.UPDATE_MATCH_GAMES,
    games,
    points,
  };
}

export function updateMatchSets(games, sets) {
  return {
    type: actionTypes.UPDATE_MATCH_SETS,
    games,
    sets,
  };
}

export function updateMatch(token, currentMatch) {
  return async dispatch => {
    try {
      const {data} = await axios.put(
        `${env.UPDATE_MATCH_URL}/${currentMatch._id}`,
        currentMatch,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch({
        type: actionTypes.UPDATE_MATCH,
        currentMatch: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.UPDATE_MATCH_ERROR,
      });
    }
  };
}

export function getStatsInfo(token, matchId) {
  return async dispatch => {
    try {
      const {data} = await axios(`${env.GET_MATCH_STATS}/${matchId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: actionTypes.UPDATE_STATS,
        currentStats: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.UPDATE_STATS_ERROR,
      });
    }
  };
}

export function deleteMatch(token, matchId) {
  return async dispatch => {
    try {
      await axios.delete(`${env.UPDATE_MATCH_URL}/${matchId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: actionTypes.DELETE_MATCH,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.DELETE_MATCH_ERROR,
      });
    }
  };
}
