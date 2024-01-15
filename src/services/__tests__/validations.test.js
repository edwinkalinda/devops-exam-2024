// TODO: Create tests suite for validation function
const { isValid } = require('../validations');
const { validateGamerTag } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid();
        expect(result).toBeDefined();
    });
});
describe('validateGamerTag', () => {
  
    test('should contain at least one special character', () => {
      expect(validateGamerTag('Game1234')).toBe(false);
      expect(validateGamerTag('Game123!')).toBe(true);
    });
});
