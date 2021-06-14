import actionTypes from '../actions/actionTypes';

function currentStatsReducer(selectedStats = [], action) {
  switch (action.type) {
    case actionTypes.UPDATE_STATS:
      return action.currentStats;
    default:
      return selectedStats;
  }
}

export default currentStatsReducer;
