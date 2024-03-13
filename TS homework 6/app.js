"use strict";
function getLargestElement(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && typeof largest === 'number') {
            largest = Math.max(largest, arr[i]);
        }
        else if (typeof arr[i] === 'string' && typeof largest === 'string') {
            largest = arr[i].length > largest.length ? arr[i] : largest;
        }
    }
    return largest;
}
const numArr = [1, 2, 3, 4, 5];
const strArr = ['one', 'two', 'three', 'four', 'five'];
console.log('Largest number in array ->', getLargestElement(numArr));
console.log('Longest word in array ->', getLargestElement(strArr));
