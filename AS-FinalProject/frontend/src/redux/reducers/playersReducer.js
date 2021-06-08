import actionTypes from '../actions/actionTypes';

function playerReducer(players = [], action) {
  switch (action.type) {
    case actionTypes.GET_PLAYERS:
      return action.players;
    case actionTypes.GET_PLAYERS_ERROR:
      return players;
    default:
      return players;
  }
}

export default playerReducer;
