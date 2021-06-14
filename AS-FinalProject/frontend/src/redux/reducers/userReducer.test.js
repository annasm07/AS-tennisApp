import userReducer from './userReducer';
import actionTypes from '../actions/actionTypes';

describe('Given userReducer function ', () => {
  test('when action.type = LOG_IN, then should return user', () => {
    expect(
      userReducer(
        {},
        {
          type: actionTypes.LOG_IN,
          user: {name: 'Anna Sala'},
        },
      ),
    ).toEqual({name: 'Anna Sala'});
  });

  test('when action.type = " ", then should return initial state', () => {
    expect(
      userReducer(
        {},
        {
          type: actionTypes.UPDATE_GAMES,
        },
      ),
    ).toEqual({});
  });

  test('when resolved with LOG_IN_ERROR, then should return player initial state', () => {
    expect(
      userReducer(undefined, {
        type: actionTypes.LOG_IN_ERROR,
      }),
    ).toEqual({});
  });
});
