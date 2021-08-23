import actionTypes from '../actions/actionTypes';
import {counterLogicScoring} from '../../utils/counterLogic';

function currentGamePointsReducer(sets = [{p1: 0, p2: 0}], action) {
  switch (action.type) {
    case actionTypes.UPDATE_SETS:
      const updatedSets = counterLogicScoring(action.playerWhoWon, sets);
      return updatedSets;
    case actionTypes.END_MATCH:
      return [{p1: 0, p2: 0}];
    default:
      return sets;
  }
}

export default currentGamePointsReducer;
