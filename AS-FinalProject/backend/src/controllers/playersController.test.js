const playersController = require('./playersController');
const Player = require('../models/player.model');

jest.mock('../models/player.model');

const {
  createOne,
  loadPlayer,
} = playersController();

describe('given a createMatch controller', () => {
  class MockPlayer {
    constructor(name) {
      this.name = name;
    }

    // eslint-disable-next-line class-methods-use-this
    save() {}
  }
  test('should create one Player', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      body: null,
    };
    const newPlayer = new MockPlayer('Anna');

    Player.mockReturnValueOnce(newPlayer);

    await createOne(req, res);

    expect(res.json).toHaveBeenCalledWith({ name: 'Anna' });
  });
  test('should return error', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      body: null,
    };
    Player.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });

    await createOne(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
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
