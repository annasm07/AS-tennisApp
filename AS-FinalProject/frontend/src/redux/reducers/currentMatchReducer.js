import actionTypes from '../actions/actionTypes';

function currentMatchReducer(currentMatch = {}, action) {
  console.log('reducer');
  console.log(action.currentMatch);
  switch (action.type) {
    case actionTypes.CREATE_MATCH:
      return action.currentMatch;
    case actionTypes.CREATE_MATCH_ERROR:
      return currentMatch;
    default:
      return currentMatch;
  }
}

export default currentMatchReducer;
