import {checkEndSet, checkEndMatch} from './checkEndSet';

describe('Given checkEndSet function, ', () => {
  describe('with incoming values of games = [{p1:2, p2:4}]', () => {
    const playerWhoWon = 'p1';
    const games = [{p1: 2, p2: 4}];

    test('should return false', () => {
      expect(checkEndSet(playerWhoWon, games)).toEqual(false);
    });
  });
  describe('with incoming values of games = [{p1:3, p2:6}]', () => {
    const playerWhoWon = 'p2';
    const games = [{p1: 3, p2: 6}];

    test('should return true', () => {
      expect(checkEndSet(playerWhoWon, games)).toEqual(true);
    });
  });
  describe('with incoming values of games = [{p1:5, p2:6}]', () => {
    const playerWhoWon = 'p2';
    const games = [{p1: 5, p2: 6}];

    test('should return false', () => {
      expect(checkEndSet(playerWhoWon, games)).toEqual(false);
    });
  });

  describe('with incoming values of games = [{p1:6, p2:7}]', () => {
    const playerWhoWon = 'p2';
    const games = [{p1: 6, p2: 7}];

    test('should return true', () => {
      expect(checkEndSet(playerWhoWon, games)).toEqual(true);
    });
  });
});

describe('Given checkEndMatch function, ', () => {
  describe('with incoming values of sets = [{p1:2, p2:1}]', () => {
    const playerWhoWon = 'p1';
    const sets = [{p1: 2, p2: 1}];

    test('should return true', () => {
      expect(checkEndMatch(playerWhoWon, sets)).toEqual(true);
    });
  });

  describe('with incoming values of sets = [{p1:1, p2:1}]', () => {
    const playerWhoWon = 'p2';
    const sets = [{p1: 1, p2: 1}];

    test('should return false', () => {
      expect(checkEndMatch(playerWhoWon, sets)).toEqual(false);
    });
  });
});
