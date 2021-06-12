import actionTypes from '../actions/actionTypes';

function currentGamePointsReducer(games = [{p1: 0, p2: 0}], action) {
  switch (action.type) {
    case actionTypes.END_SET || actionTypes.UPDATE_GAMES:
      return [{p1: 0, p2: 0}];
    default:
      return games;
  }
}

export default currentGamePointsReducer;
