import axios from 'axios';
import actionTypes from './actionTypes';

const LOG_IN_URL = 'http://localhost:1616/api/auth/login';
const SIGN_UP_URL = 'http://localhost:1616/api/auth/signup';
const GET_PLAYER_URL = 'http://localhost:1616/api/home';

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
      const {data} = await axios.post(SIGN_UP_URL, {
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
