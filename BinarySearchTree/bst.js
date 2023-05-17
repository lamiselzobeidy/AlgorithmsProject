function binarySearchRecursive (arr, x, low = 0, high = arr.length - 1) {
  const mid = Math.floor(low + (high - low) / 2)

  if (high >= low) {
    if (arr[mid] === x) {
      // item found => return its index
      return mid
    }

    if (x < arr[mid]) {
      // arr[mid] is an upper bound for x, so if x is in arr => low <= x < mid
      return binarySearchRecursive(arr, x, low, mid - 1)
    } else {
      // arr[mid] is a lower bound for x, so if x is in arr => mid < x <= high
      return binarySearchRecursive(arr, x, mid + 1, high)
    }
  } else {
    // if low > high => we have searched the whole array without finding the item
    return -1
  }
}
function binarySearchIterative (arr, x, low = 0, high = arr.length - 1) {
  while (high >= low) {
    const mid = Math.floor(low + (high - low) / 2)

    if (arr[mid] === x) {
      // item found => return its index
      return mid
    }

    if (x < arr[mid]) {
      // arr[mid] is an upper bound for x, so if x is in arr => low <= x < mid
      high = mid - 1
    } else {
      // arr[mid] is a lower bound for x, so if x is in arr => mid < x <= high
      low = mid + 1
    }
  }
  // if low > high => we have searched the whole array without finding the item
  return -1
}

// module.exports = binarySearchRecursive;
 module.exports = {binarySearchIterative, binarySearchRecursive}
// export const binarySearchIterative = binarySearchIterative;
// export const binarySearchRecursive = binarySearchRecursive;
