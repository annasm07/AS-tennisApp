import actionTypes from '../actions/actionTypes';

function userReducer(error = false, action) {
  let currentError = error;
  switch (action.type) {
    case actionTypes.ERROR:
      currentError = true;
      break;
    case actionTypes.CLEAR_ERROR:
      currentError = false;
      break;
    default:
      currentError = false;
      break;
  }
  return currentError;
}

export default userReducer;
