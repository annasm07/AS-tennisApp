import actionTypes from '../actions/actionTypes';

function userReducer(error = false, action) {
  let currentError = error;
  switch (action.type) {
    case actionTypes.ERROR:
      currentError = true;
      break;
    default:
      return currentError;
  }
  console.log('updatedUser-----2', currentError);
  return currentError;
}

export default userReducer;
