import actionTypes from '../actions/actionTypes';
import {counterLogicScoring} from '../../utils/counterLogic';

function currentGamePointsReducer(sets = [{p1: 0, p2: 0}], action) {
  switch (action.type) {
    case actionTypes.END_SET:
      const updatedSets = counterLogicScoring(action.player, sets);
      console.log('updatedSets --->', updatedSets);
      return updatedSets;
    case actionTypes.END_MATCH:
      return [{p1: 0, p2: 0}];
    default:
      return sets;
  }
}

export default currentGamePointsReducer;
