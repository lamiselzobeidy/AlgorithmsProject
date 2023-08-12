"use strict";

function quicksort(array) {
    if (array.length < 2) {
        return array;
    }
    let pivot = array[0];
    array = array.slice(1);

    let less = array.filter(element => {
        return element <= pivot;
    });

    let greater = array.filter(element => {
        return element > pivot;
    });

    return quicksort(less).concat(pivot, quicksort(greater));
}
console.log(quicksort([10, 5, 2, 3]));
module.exports = quicksort;