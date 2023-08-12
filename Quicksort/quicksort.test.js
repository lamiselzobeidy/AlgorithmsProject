const quicksort = require('./quicksort');

describe('quicksort function', () => {
    test('quicksort function returns the array sorted correctly', () => {
        expect(quicksort([10, 5, 2, 3])).toEqual([2, 3, 5, 10]);
        expect(quicksort([3, 7, 2, 5, 1, 4, 6, 8])).toEqual([1,2,3,4,5,6,7,8]);
        expect(quicksort([])).toEqual([]);
        expect(quicksort([6])).toEqual([6]);
        expect(quicksort([8,2])).toEqual([2,8]);
    });
});