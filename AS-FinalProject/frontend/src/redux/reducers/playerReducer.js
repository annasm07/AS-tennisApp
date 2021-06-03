import actionTypes from '../actions/actionTypes';

function playerReducer(player = {}, action) {
  switch (action.type) {
    case actionTypes.LOG_IN:
      return action.player;
    case actionTypes.LOG_IN_ERROR:
      return player;
    default:
      return player;
  }
}

export default playerReducer;
