import {hasNameError, hasEmailError, hasPasswordError} from './validation';

describe('Given hasNameError function, ', () => {
  describe('with incoming values of name = "a"', () => {
    const name = 'a';

    test('should return true', () => {
      expect(hasNameError(name)).toEqual(true);
    });
  });
  describe('with incoming values of name = "anna"', () => {
    const name = 'anna';

    test('should return false', () => {
      expect(hasNameError(name)).toEqual(false);
    });
  });
});

describe('Given hasEmailError function, ', () => {
  describe('with incoming values of email = "anna"', () => {
    const email = 'anna';

    test('should return true', () => {
      expect(hasEmailError(email)).toEqual(true);
    });
  });
  describe('with incoming values of email = "anna@mail.com"', () => {
    const email = 'anna@mail.com';

    test('should return false', () => {
      expect(hasEmailError(email)).toEqual(false);
    });
  });
});

describe('Given hasPasswordError function, ', () => {
  describe('with incoming values of password = "anna"', () => {
    const password = 'anna';

    test('should return true', () => {
      expect(hasPasswordError(password)).toEqual(true);
    });
  });
  describe('with incoming values of password = "anna123"', () => {
    const password = 'anna123';

    test('should return false', () => {
      expect(hasPasswordError(password)).toEqual(false);
    });
  });
});
