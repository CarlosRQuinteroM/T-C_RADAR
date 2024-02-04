const capitalizeFirstLetter = require('../utils/utils.js');

test('capitalizeFirstLetter should capitalize the first letter of a string', () => {
    const result = capitalizeFirstLetter('hello');
    expect(result).toBe('Hello');
});
