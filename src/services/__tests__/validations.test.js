// TODO: Create tests suite for validation function
const { isValid } = require('../validations');


describe('Gamer Tag Validation', () => {
    test('returns false if the gamer tag lacks a number', () => {
        expect(isValid('Gamertag!')).toBe(false);
    });
});

