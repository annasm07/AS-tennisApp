const statsController = require('./statsController');
const Stats = require('../models/stats.model');

jest.mock('../models/stats.model');

const {
  createStats,
  getMatchStats,
} = statsController();

describe('given a createMatch controller', () => {
  class MockStats {
    constructor(number) {
      this.number = number;
    }

    // eslint-disable-next-line class-methods-use-this
    save() {}
  }
  test('should create one Stats Object', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      body: null,
    };
    const newStatsObj = new MockStats(21);

    Stats.mockReturnValueOnce(newStatsObj);

    await createStats(req, res);

    expect(res.json).toHaveBeenCalledWith({ number: 21 });
  });
  test('should return error', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      body: null,
    };
    Stats.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });

    await createStats(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('given a getMatchStats controller', () => {
  test('should get one statsObj', async () => {
    const res = {
      json: jest.fn(),
    };
    const req = {
      params: { statsId: 'def567' },
    };
    Stats.findById.mockReturnValueOnce({ id: 'def567' });
    await getMatchStats(req, res);

    expect(res.json).toHaveBeenCalledWith({ id: 'def567' });
  });

  test('should return error', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
    const req = {
      params: { statsId: 'def567' },
    };
    Stats.findById.mockRejectedValueOnce('error');
    await getMatchStats(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });
});
