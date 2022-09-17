const {shuffleArray} = require('./utils')

describe('shuffleArray', () => {
    test('shuffles the array', () => {
        expect(typeof shuffleArray).toBe('array')
    })
    test('should be equal to "./utils"', () => {
        expect(shuffleArray).toEqual('./utils')
    })
});
