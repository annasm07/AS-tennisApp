import playerReducer from './playerReducer';
import actionTypes from '../actions/actionTypes';

describe('Given playerReducer function ', () => {
  test('when action.type = GET_PLAYER, then should return player', () => {
    expect(
      playerReducer(
        {},
        {
          type: actionTypes.GET_PLAYER,
          player: {name: 'Anna Sala'},
        },
      ),
    ).toEqual({name: 'Anna Sala'});
  });

  test('when action.type = " ", then should return player', () => {
    expect(
      playerReducer(
        {},
        {
          type: actionTypes.UPDATE_GAMES,
        },
      ),
    ).toEqual({});
  });

  test('when resolved with GET_PLAYER_ERROR, then should return player initial state', () => {
    expect(
      playerReducer(undefined, {
        type: actionTypes.GET_PLAYER_ERROR,
      }),
    ).toEqual({});
  });
});
