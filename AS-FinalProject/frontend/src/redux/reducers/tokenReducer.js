import actionTypes from '../actions/actionTypes';

function tokenReducer(tokens = [], action) {
  switch (action.type) {
    case actionTypes.LOG_IN:
      return [action.user.token, action.user.refreshToken];
    default:
      return tokens;
  }
}

export default tokenReducer;
