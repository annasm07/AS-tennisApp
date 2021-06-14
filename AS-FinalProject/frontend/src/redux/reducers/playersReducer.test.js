import playersReducer from './playersReducer';
import actionTypes from '../actions/actionTypes';

describe('Given playersReducer function ', () => {
  test('when action.type = GET_PLAYERS, then should return player', () => {
    expect(
      playersReducer(
        {},
        {
          type: actionTypes.GET_PLAYERS,
          players: [{name: 'Anna Sala'}],
        },
      ),
    ).toEqual([{name: 'Anna Sala'}]);
  });

  test('when action.type = " ", then should return player', () => {
    expect(
      playersReducer([], {
        type: actionTypes.UPDATE_GAMES,
      }),
    ).toEqual([]);
  });

  test('when resolved with GET_PLAYERS_ERROR, then should return player initial state', () => {
    expect(
      playersReducer(undefined, {
        type: actionTypes.GET_PLAYERS_ERROR,
      }),
    ).toEqual([]);
  });
});
