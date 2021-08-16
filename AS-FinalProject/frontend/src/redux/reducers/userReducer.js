import actionTypes from '../actions/actionTypes';

function userReducer(user = {}, action) {
  let updatedUser = user;
  switch (action.type) {
    case actionTypes.LOG_IN:
      updatedUser = action.user;
      console.log('updatedUser', updatedUser);
      break;
    case actionTypes.LOG_IN_ERROR:
      updatedUser.error = true;
      console.log('updatedUser', updatedUser);
      break;
    default:
      return user;
  }
  console.log('updatedUser-----2', updatedUser);
  return updatedUser;
}

export default userReducer;
