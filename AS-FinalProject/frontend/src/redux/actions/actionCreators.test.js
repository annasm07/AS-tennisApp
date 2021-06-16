import axios from 'axios';
import {
  getPlayerInfo,
  getAllPlayers,
  newMatch,
  updatePoints,
  updateGames,
  updateSets,
  updateMatchGames,
  updateMatchSets,
  updateMatch,
  getStatsInfo,
  updateServer,
} from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('Given getPlayerInfo function, ', () => {
  test('when resolved, then dispatch an object with type: GET_PLAYER', async () => {
    const token = 'abc123';
    const playerId = 'huiolkj23';
    const dispatch = jest.fn();
    const data = {name: 'Anna Sala'};
    axios.mockResolvedValue({data});
    await getPlayerInfo(token, playerId)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.GET_PLAYER,
      player: data,
    });
  });
  test('when resolved, then dispatch an object with type: GET_PLAYER_ERROR', async () => {
    const token = 'abc123';
    const playerId = 'huiolkj23';
    const dispatch = jest.fn();
    axios.mockRejectedValue('error');
    await getPlayerInfo(token, playerId)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.GET_PLAYER_ERROR,
    });
  });
});

describe('Given getAllPlayers function, ', () => {
  test('when resolved, then dispatch an object with type: GET_PLAYERS', async () => {
    const token = 'abc123';
    const dispatch = jest.fn();
    const data = [{name: 'Anna Sala'}];
    axios.mockResolvedValue({data});
    await getAllPlayers(token)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.GET_PLAYERS,
      players: data,
    });
  });
  test('when rejected, then dispatch an object with type: GET_PLAYERS_ERROR', async () => {
    const token = 'abc123';
    const dispatch = jest.fn();
    axios.mockRejectedValue('error');
    await getAllPlayers(token)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.GET_PLAYERS_ERROR,
    });
  });
});

describe('Given newMatch function, ', () => {
  test('when resolved, then dispatch an object with type: CREATE_MATCH', async () => {
    const token = 'abc123';
    const p1Name = 'Anna';
    const p2Name = 'Josep';
    const playerId = 'huiolkj23';
    const dispatch = jest.fn();
    const data = {name: 'Anna Sala'};
    axios.post.mockResolvedValue({data});
    await newMatch(token, p1Name, p2Name, playerId)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.CREATE_MATCH,
      currentMatch: data,
    });
  });
  test('when rejected, then dispatch an object with type: CREATE_MATCH_ERROR', async () => {
    const token = 'abc123';
    const p1Name = 'Anna';
    const p2Name = 'Josep';
    const playerId = 'huiolkj23';
    const dispatch = jest.fn();
    axios.post.mockRejectedValue('error');
    await newMatch(token, p1Name, p2Name, playerId)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.CREATE_MATCH_ERROR,
    });
  });
});

describe('Given updatePoints function, ', () => {
  test('when resolved, then dispatch an object with type: UPDATE_POINTS', () => {
    const playerWhoWon = 'p1';
    expect(updatePoints(playerWhoWon)).toEqual({
      type: actionTypes.UPDATE_POINTS,
      playerWhoWon,
    });
  });
});

describe('Given updateGames function, ', () => {
  test('when resolved, then dispatch an object with type: UPDATE_GAMES', () => {
    const playerWhoWon = 'p1';
    expect(updateGames(playerWhoWon)).toEqual({
      type: actionTypes.UPDATE_GAMES,
      playerWhoWon,
    });
  });
});

describe('Given updateServer function, ', () => {
  test('when resolved, then dispatch an object with type: UPDATE_SERVER', () => {
    const player = true;
    expect(updateServer(player)).toEqual({
      type: actionTypes.UPDATE_SERVER,
      player,
    });
  });
});

describe('Given updateSets function, ', () => {
  test('when resolved, then dispatch an object with type: UPDATE_SETS', () => {
    const playerWhoWon = 'p1';
    expect(updateSets(playerWhoWon)).toEqual({
      type: actionTypes.UPDATE_SETS,
      playerWhoWon,
    });
  });
});

describe('Given updateMatchGames function, ', () => {
  test('when resolved, then dispatch an object with type: UPDATE_MATCH_GAMES', () => {
    const games = {p1: 1, p2: 3};
    const points = {p1: 15, p2: 35};
    expect(updateMatchGames(games, points)).toEqual({
      type: actionTypes.UPDATE_MATCH_GAMES,
      games,
      points,
    });
  });
});

describe('Given updateMatchSets function, ', () => {
  test('when resolved, then dispatch an object with type: UPDATE_MATCH_SETS', () => {
    const games = {p1: 1, p2: 3};
    const sets = {p1: 1, p2: 1};
    expect(updateMatchSets(games, sets)).toEqual({
      type: actionTypes.UPDATE_MATCH_SETS,
      games,
      sets,
    });
  });
});

describe('Given updateMatch function, ', () => {
  test('when resolved, then dispatch an object with type: UPDATE_MATCH', async () => {
    const token = 'abc123';
    const currentMatch = {winner: 'jhfbdjf'};
    const dispatch = jest.fn();
    const data = [{name: 'Anna Sala'}];
    axios.put.mockResolvedValue({data});
    await updateMatch(token, currentMatch)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.UPDATE_MATCH,
      currentMatch: data,
    });
  });
  test('when rejected, then dispatch an object with type: UPDATE_MATCH_ERROR', async () => {
    const token = 'abc123';
    const dispatch = jest.fn();
    axios.put.mockRejectedValue('error');
    await updateMatch(token)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.UPDATE_MATCH_ERROR,
    });
  });
});

describe('Given getStatsInfo function, ', () => {
  test('when resolved, then dispatch an object with type: UPDATE_STATS', async () => {
    const token = 'abc123';
    const matchId = 'jhfbdjf';
    const dispatch = jest.fn();
    const data = [{name: 'Anna Sala'}];
    axios.mockResolvedValue({data});
    await getStatsInfo(token, matchId)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.UPDATE_STATS,
      currentStats: data,
    });
  });
  test('when rejected, then dispatch an object with type: UPDATE_STATS_ERROR', async () => {
    const token = 'abc123';
    const dispatch = jest.fn();
    axios.mockRejectedValue('error');
    await getStatsInfo(token)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.UPDATE_STATS_ERROR,
    });
  });
});
