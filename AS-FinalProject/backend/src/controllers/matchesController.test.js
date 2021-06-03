const matchesController = require('./matchesController');
const Match = require('../models/match.model');

jest.mock('../models/match.model');

const {
  createMatch,
  getMatchById,
  updateMatchById,
  deleteMatchById,
} = matchesController();

describe('given a createMatch controller', () => {
  class MockMatch {
    constructor(winner) {
      this.winner = winner;
    }

    // eslint-disable-next-line class-methods-use-this
    save() {}
  }
  test('should create one Match', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      body: null,
    };
    const newMatch = new MockMatch(true);

    Match.mockReturnValueOnce(newMatch);

    await createMatch(req, res);

    expect(res.json).toHaveBeenCalledWith({ winner: true });
  });
  test('shoud return error', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      body: null,
    };
    Match.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });

    await createMatch(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('given a getMatchById controller', () => {
  test('should get one match', async () => {
    const res = {
      json: jest.fn(),
    };
    const req = {
      params: { matchId: 'abc234' },
    };
    Match.findById.mockReturnValueOnce({ id: 'abc234' });
    await getMatchById(req, res);

    expect(res.json).toHaveBeenCalledWith({ id: 'abc234' });
  });

  test('should return error', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { matchId: 'abc234' },
    };
    Match.findById.mockRejectedValueOnce('error');
    await getMatchById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('given a updateMatchById controller', () => {
  test('shoud update selected match', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { matchId: 20 },
      body: { id: 20, winner: 'Anna' },
    };
    Match.findOneAndUpdate.mockReturnValueOnce(req.body);

    await updateMatchById(req, res);

    expect(res.json).toHaveBeenCalledWith({ id: 20, winner: 'Anna' });
  });

  test('shoud reject selected hero', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { matchId: 20 },
      body: { id: 20, winner: 'Anna' },
    };
    Match.findOneAndUpdate.mockRejectedValueOnce('error');
    await updateMatchById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('given a deleteMatchById controller', () => {
  test('shoud delete selected match', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { matchId: null },
    };
    await deleteMatchById(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
  });
  test('shoud delete selected hero', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { matchId: 2222 },
    };
    Match.findOneAndDelete.mockRejectedValueOnce('error');
    await deleteMatchById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});
