import actionTypes from '../actions/actionTypes';
import {counterLogicPoints} from '../../utils/counterLogic';

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
      const updatedPoints = counterLogicPoints(
        action.playerWhoWon,
        currentGamePoints,
      );
      return updatedPoints;

    case actionTypes.UPDATE_POINTS_ERROR:
      return currentGamePoints;

    case actionTypes.UPDATE_GAMES:
      return {
        points: [{p1: 0, p2: 0}],
        p1CounterPoints: 0,
        p2CounterPoints: 0,
      };

    case actionTypes.UPDATE_SETS:
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
