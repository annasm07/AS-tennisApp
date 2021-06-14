import currentStatsReducer from './selectedStats';
import actionTypes from '../actions/actionTypes';

describe('Given currentStatsReducer function ', () => {
  test('when action.type = UPDATE_STATS, then should return player', () => {
    expect(
      currentStatsReducer([], {
        type: actionTypes.UPDATE_STATS,
        currentStats: [{serves: 20}],
      }),
    ).toEqual([{serves: 20}]);
  });

  test('when action.type = " ", then should return player', () => {
    expect(
      currentStatsReducer([], {
        type: actionTypes.UPDATE_GAMES,
      }),
    ).toEqual([]);
  });

  test('when resolved with UPDATE_STATS, then should return player initial state', () => {
    expect(currentStatsReducer(undefined, {})).toEqual([]);
  });
});
