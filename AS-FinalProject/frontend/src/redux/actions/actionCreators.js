import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:1616/api/auth/login';

export function logIn() {
  return async dispatch => {
    try {
      const {data} = await axios.post(url);
      dispatch({
        type: actionTypes.LOG_IN,
        player: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOG_IN_ERROR,
      });
    }
  };
}
