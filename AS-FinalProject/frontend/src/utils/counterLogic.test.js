import {counterLogicPoints, counterLogicScoring} from './counterLogic';

describe('Given counterLogicPoints function, ', () => {
  describe('with incoming values of points = [{p1:0, p2:15}]', () => {
    const playerWhoWon = 'p1';
    const points = [{p1: 0, p2: 15}];
    const p1CounterPoints = 0;
    const p2CounterPoints = 1;
    test('should return points = [{p1:30, p2:15}]', () => {
      expect(
        counterLogicPoints(playerWhoWon, {
          points,
          p1CounterPoints,
          p2CounterPoints,
        }),
      ).toEqual({
        points: [
          {p1: 0, p2: 15},
          {p1: 15, p2: 15},
        ],
        p1CounterPoints: 1,
        p2CounterPoints: 1,
      });
    });
  });

  describe('with incoming values of points = [{p1:30, p2:15}]', () => {
    const playerWhoWon = 'p2';
    const points = [{p1: 30, p2: 15}];
    const p1CounterPoints = 2;
    const p2CounterPoints = 1;
    test('should return points = [{p1:30, p2:15}]', () => {
      expect(
        counterLogicPoints(playerWhoWon, {
          points,
          p1CounterPoints,
          p2CounterPoints,
        }),
      ).toEqual({
        points: [
          {p1: 30, p2: 15},
          {p1: 30, p2: 30},
        ],
        p1CounterPoints: 2,
        p2CounterPoints: 2,
      });
    });
  });

  describe('with incoming values of points = [{p1:40, p2:15}]', () => {
    const playerWhoWon = 'p1';
    const points = [{p1: 40, p2: 15}];
    const p1CounterPoints = 3;
    const p2CounterPoints = 1;
    test('should return points = [{p1:30, p2:15}]', () => {
      expect(
        counterLogicPoints(playerWhoWon, {
          points,
          p1CounterPoints,
          p2CounterPoints,
        }),
      ).toEqual({
        points: [
          {p1: 40, p2: 15},
          {p1: 41, p2: 15},
        ],
        p1CounterPoints: 4,
        p2CounterPoints: 1,
      });
    });
  });
});

describe('Given counterLogicScoring function, ', () => {
  describe('with incoming values of score = [{p1:2, p2:3}]', () => {
    const playerWhoWon = 'p1';
    const score = [{p1: 2, p2: 3}];

    test('should return points = [{p1:2, p2:3}, {p1:3, p2:3}]', () => {
      expect(counterLogicScoring(playerWhoWon, score)).toEqual([
        {p1: 2, p2: 3},
        {p1: 3, p2: 3},
      ]);
    });
  });

  describe('with incoming values of score = [{p1:0, p2:0}]', () => {
    const playerWhoWon = 'p2';
    const score = [{p1: 0, p2: 0}];

    test('should return points = [{p1:0, p2:0}, {p1:0, p2:1}]', () => {
      expect(counterLogicScoring(playerWhoWon, score)).toEqual([
        {p1: 0, p2: 0},
        {p1: 0, p2: 1},
      ]);
    });
  });
});
