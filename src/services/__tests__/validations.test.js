// TODO: Create tests suite for validation function
const { isValid } = require('../validations');


describe('Gamer Tag Validation', () => {
    test('returns true for a valid gamer tag', () => {
        expect(isValid('Gamer123!')).toBe(true);
    });

    test('returns false if the gamer tag is too short', () => {
        expect(isValid('Gm1!')).toBe(false);
    });
});

