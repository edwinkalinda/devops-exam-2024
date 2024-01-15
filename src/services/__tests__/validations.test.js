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
    test('should be at least 8 characters long', () => {
      expect(validateGamerTag('Game123!')).toBe(true);
      expect(validateGamerTag('Gm1!')).toBe(false);
    });
});





