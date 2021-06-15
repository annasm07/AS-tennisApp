import actionTypes from '../actions/actionTypes';

function serverReducer(player = true, action) {
  switch (action.type) {
    case actionTypes.UPDATE_SERVER:
      return action.player;
    default:
      return player;
  }
}

export default serverReducer;
