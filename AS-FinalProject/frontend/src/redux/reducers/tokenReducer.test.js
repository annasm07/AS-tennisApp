import tokenReducer from './tokenReducer';
import actionTypes from '../actions/actionTypes';

describe('Given tokenReducer function ', () => {
  test('when action.type = LOG_IN, then should return player', () => {
    expect(
      tokenReducer([], {
        type: actionTypes.LOG_IN,
        user: {token: '20', refreshToken: '29'},
      }),
    ).toEqual(['20', '29']);
  });

  test('when action.type = " ", then should return player', () => {
    expect(
      tokenReducer([], {
        type: actionTypes.UPDATE_GAMES,
      }),
    ).toEqual([]);
  });

  test('when resolved with LOG_IN_ERROR, then should return player initial state', () => {
    expect(
      tokenReducer(undefined, {
        type: actionTypes.LOG_IN_ERROR,
      }),
    ).toEqual([]);
  });
});
