import pointsReducer from './pointsReducer';
import actionTypes from '../actions/actionTypes';

describe('Given pointsReducer function ', () => {
  test('when action.type = UPDATE_POINTS, then should return players', () => {
    const initialState = {
      points: [{p1: 0, p2: 0}],
      p1CounterPoints: 0,
      p2CounterPoints: 0,
    };
    expect(
      pointsReducer(initialState, {
        type: actionTypes.UPDATE_POINTS,
        playerWhoWon: 'p1',
      }),
    ).toEqual({
      points: [
        {p1: 0, p2: 0},
        {p1: 15, p2: 0},
      ],
      p1CounterPoints: 1,
      p2CounterPoints: 0,
    });
  });

  test('when action.type = " ", then should return players', () => {
    const initialState = {
      points: [{p1: 0, p2: 0}],
      p1CounterPoints: 0,
      p2CounterPoints: 0,
    };
    expect(
      pointsReducer(
        {},
        {
          type: actionTypes.UPDATE_GAMES,
        },
      ),
    ).toEqual(initialState);
  });

  test('when resolved with UPDATE_POINTS_ERROR, then should return points initial state', () => {
    const initialState = {
      points: [{p1: 0, p2: 0}],
      p1CounterPoints: 0,
      p2CounterPoints: 0,
    };
    expect(
      pointsReducer(undefined, {
        type: actionTypes.UPDATE_POINTS_ERROR,
      }),
    ).toEqual(initialState);
  });

  test('when resolved with UPDATE_SETS, then should return points initial state', () => {
    const initialState = {
      points: [{p1: 0, p2: 0}],
      p1CounterPoints: 0,
      p2CounterPoints: 0,
    };
    expect(
      pointsReducer(undefined, {
        type: actionTypes.UPDATE_SETS,
      }),
    ).toEqual(initialState);
  });
  test('when resolved with LOG_IN, then should return points initial state', () => {
    expect(
      pointsReducer(
        {},
        {
          type: actionTypes.LOG_IN,
        },
      ),
    ).toEqual({});
  });
});
