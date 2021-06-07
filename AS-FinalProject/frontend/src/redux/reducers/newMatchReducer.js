import actionTypes from '../actions/actionTypes';

function newMatchReducer(newMatch = {}, action) {
  switch (action.type) {
    case actionTypes.GET_PLAYER:
      return action.player;
    case actionTypes.GET_PLAYER_ERROR:
      return newMatch;
    default:
      return newMatch;
  }
}

export default newMatchReducer;
