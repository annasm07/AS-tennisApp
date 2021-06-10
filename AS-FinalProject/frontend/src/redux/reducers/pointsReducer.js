import actionTypes from '../actions/actionTypes';

function currentGamePointsReducer(
  currentGamePoints = {
    points: [{p1: 0, p2: 0}],
    p1CounterPoints: 0,
    p2CounterPoints: 0,
  },
  action,
) {
  switch (action.type) {
    case actionTypes.UPDATE_POINTS:
      return action.currentGame;
    case actionTypes.UPDATE_POINTS_ERROR:
      return currentGamePoints;
    case actionTypes.END_GAME:
      return {
        points: [{p1: 0, p2: 0}],
        p1CounterPoints: 0,
        p2CounterPoints: 0,
      };
    default:
      return currentGamePoints;
  }
}

export default currentGamePointsReducer;
