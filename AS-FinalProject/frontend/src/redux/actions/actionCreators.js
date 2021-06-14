import axios from 'axios';
import actionTypes from './actionTypes';

const LOG_IN_URL = 'http://localhost:1616/api/auth/login';
const SIGN_UP_URL = 'http://localhost:1616/api/auth/signup';
const GET_PLAYER_URL = 'http://localhost:1616/api/home';
const GET_ALL_PLAYERS = 'http://localhost:1616/api/players';
const CREATE_MATCH_URL = 'http://localhost:1616/api/match';
const UPDATE_MATCH_URL = 'http://localhost:1616/api/match';
const GET_MATCH_STATS = 'http://localhost:1616/api/stats';

export function logIn(email, password) {
  return async dispatch => {
    try {
      const {data} = await axios.post(LOG_IN_URL, {email, password});
      dispatch({
        type: actionTypes.LOG_IN,
        user: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.LOG_IN_ERROR,
      });
    }
  };
}

export function signUp({name, email, password, player, playerName}) {
  return async dispatch => {
    try {
      await axios.post(SIGN_UP_URL, {
        name,
        email,
        password,
        player,
        playerName,
      });
      dispatch({
        // type: actionTypes.SIGN_UP,
        // user: data.user,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.SIGN_UP_ERROR,
      });
    }
  };
}

export function getPlayerInfo(token, playerId) {
  return async dispatch => {
    try {
      const {data} = await axios(`${GET_PLAYER_URL}/${playerId}`, {
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
      const {data} = await axios(GET_ALL_PLAYERS, {
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
        CREATE_MATCH_URL,
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

export function updatePoints(playerWhoWon) {
  return {
    type: actionTypes.UPDATE_POINTS,
    playerWhoWon,
  };
}

export function updateGames(playerWhoWon) {
  return {
    type: actionTypes.UPDATE_GAMES,
    playerWhoWon,
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
        `${UPDATE_MATCH_URL}/${currentMatch._id}`,
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
      const {data} = await axios(`${GET_MATCH_STATS}/${matchId}`, {
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
