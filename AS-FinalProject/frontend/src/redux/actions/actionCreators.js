import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://192.168.0.24:1616/api/auth/login';

export function logIn(email, password) {
  console.log('ACTION_CREATOR');
  return async dispatch => {
    try {
      const {data} = await axios.post(url, {email, password});
      console.log('action creator', data);
      dispatch({
        type: actionTypes.LOG_IN,
        player: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionTypes.LOG_IN_ERROR,
      });
    }
  };
}
