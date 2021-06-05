import actionTypes from '../actions/actionTypes';

function userReducer(user = {}, action) {
  switch (action.type) {
    case actionTypes.LOG_IN:
      return action.user;
    case actionTypes.LOG_IN_ERROR:
      return user;
    default:
      return user;
  }
}

export default userReducer;
