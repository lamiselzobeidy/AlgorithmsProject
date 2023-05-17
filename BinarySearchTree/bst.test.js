//  import {binarySearchIterative, binarySearchRecursive} from "./bst";
// const binarybinaryFuncss = require('./bst');
const path = require('path');
const { binarySearchIterative, binarySearchRecursive} = require(path.join(
  __dirname,
  "bst.js"
));


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const stringArr = [
  'Alpha',
  'Bravo',
  'Charlie',
  'Delta',
  'Echo',
  'Foxtrot',
  'Golf',
  'Hotel',
  'India',
  'Juliet',
  'Kilo',
  'Lima',
  'Mike',
  'November',
  'Oscar',
  'Papa',
  'Quebec',
  'Romeo',
  'Sierra',
  'Tango',
  'Uniform',
  'Victor',
  'Whiskey',
  'X-Ray',
  'Yankee',
  'Zulu'
]

describe('Binary Search', () => {
   const binaryFuncss = [binarySearchIterative, binarySearchRecursive]
    test('expect to return the index of the item in the array', () => {
      expect(binarySearchIterative(arr, 3)).toBe(2)
    })
    test('expect to return -1 if not in array', () => {
      expect(binarySearchIterative(arr, 11)).toBe(-1)
    })
    test('expect to return the index of the item in the array', () => {
      expect(binarySearchIterative(stringArr, 'Charlie')).toBe(2)
    })
    test('expect to return -1 if not in array', () => {
      expect(binarySearchIterative(stringArr, 'Zoft')).toBe(-1)
    })

})