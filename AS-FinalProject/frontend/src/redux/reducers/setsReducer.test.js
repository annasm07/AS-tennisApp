import setsReducer from './setsReducer';
import actionTypes from '../actions/actionTypes';

describe('Given setsReducer function ', () => {
  test('when action.type = UPDATE_SETS, then should return updated sets', () => {
    expect(
      setsReducer([{p1: 0, p2: 0}], {
        type: actionTypes.UPDATE_SETS,
        player: 'p1',
      }),
    ).toEqual([
      {p1: 0, p2: 0},
      {p1: 1, p2: 0},
    ]);
  });

  test('when action.type = " ", then should return initial state', () => {
    expect(
      setsReducer([], {
        type: actionTypes.UPDATE_GAMES,
      }),
    ).toEqual([]);
  });
  test('when action.type = END_MATCH, then should return p1:0, p2:0', () => {
    expect(
      setsReducer([], {
        type: actionTypes.END_MATCH,
      }),
    ).toEqual([{p1: 0, p2: 0}]);
  });

  test('when resolved with UPDATE_SETS_ERROR, then should return player initial state', () => {
    expect(
      setsReducer(undefined, {
        type: actionTypes.UPDATE_SETS_ERROR,
      }),
    ).toEqual([{p1: 0, p2: 0}]);
  });
});
