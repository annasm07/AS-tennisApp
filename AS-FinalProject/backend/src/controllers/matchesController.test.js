const matchesController = require('./matchesController');
const Match = require('../models/match.model');

jest.mock('../models/match.model');

const {
  createMatch,
  getMatchById,
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
    // arrange
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

    // act
    await createMatch(req, res);
    // assert
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

  test('should get one match', async () => {
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
