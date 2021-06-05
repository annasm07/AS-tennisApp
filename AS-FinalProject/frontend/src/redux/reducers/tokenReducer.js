import actionTypes from '../actions/actionTypes';

function tokenReducer(tokens = [], action) {
  switch (action.type) {
    case actionTypes.LOG_IN:
      return [action.user.token, action.user.refreshToken];
    case actionTypes.LOG_IN_ERROR:
      return tokens;
    default:
      return tokens;
  }
}

export default tokenReducer;
