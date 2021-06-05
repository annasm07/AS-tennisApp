import actionTypes from '../actions/actionTypes';

function playerReducer(player = {}, action) {
  switch (action.type) {
    case actionTypes.GET_PLAYER:
      return action.player;
    case actionTypes.GET_PLAYER_ERROR:
      return player;
    default:
      return player;
  }
}

export default playerReducer;
