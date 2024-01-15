// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid();
        expect(result).toBeDefined();
        test('should be at least 8 characters long', () => {
            expect(validGamerTagLength('Game1234')).toBe(true);
            expect(validGamerTagLength('1234567')).toBe(false);
         });
         
    });
});



