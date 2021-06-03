const playersController = require('./playersController');
const Player = require('../models/player.model');

jest.mock('../models/player.model');

const {
  getAllPlayers,
  loadPlayer,
  updatePlayerById,
  deletePlayerById,
} = playersController();

describe('given a getAllPlayers controller', () => {
  test('shoud get all players', async () => {
    const res = {
      json: jest.fn(),
    };
    Player.find.mockResolvedValue([{ id: 'abc', name: 'Anna' }, { id: 'def', name: 'Sala' }]);

    await getAllPlayers(null, res);

    expect(res.json).toHaveBeenCalledWith([{ id: 'abc', name: 'Anna' }, { id: 'def', name: 'Sala' }]);
  });
});

describe('given a loadPlayer controller', () => {
  test('should get one player', async () => {
    const res = {
      json: jest.fn(),
    };
    const req = {
      params: { playerId: 'abc567' },
    };
    Player.findById.mockReturnValueOnce({ id: 'abc567' });
    await loadPlayer(req, res);

    expect(res.json).toHaveBeenCalledWith({ id: 'abc567' });
  });

  test('should return error', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { playerId: 'abc234' },
    };
    Player.findById.mockRejectedValueOnce('error');
    await loadPlayer(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('given a updatePlayerById controller', () => {
  test('shoud update selected player', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { playerId: 7 },
      body: { id: 7, name: 'Anna' },
    };
    Player.findOneAndUpdate.mockReturnValueOnce(req.body);
    await updatePlayerById(req, res);

    expect(res.json).toHaveBeenCalledWith({ id: 7, name: 'Anna' });
  });
  test('shoud reject selected player', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { playerId: 7 },
      body: { id: 7, name: 'Anna' },
    };
    Player.findOneAndUpdate.mockRejectedValueOnce('error');
    await updatePlayerById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('given a deletePlayerById controller', () => {
  test('shoud delete selected player', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { playerId: null },
    };
    await deletePlayerById(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
  });
  test('shoud delete selected hero', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { playerId: 22 },
    };
    Player.findOneAndDelete.mockRejectedValueOnce('error');
    await deletePlayerById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});
