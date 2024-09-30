// Challenge 1 Solution
const arr = [1, 2, 3, 4, 5];

arr.reverse();

arr.unshift(6);

arr.push(0);

console.log("Result:");
console.log(arr); // [6, 5, 4, 3, 2, 1, 0]

// Challenge 2 Solution
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

let arr3 = arr1.concat(arr2);

arr3.splice(arr3.indexOf(5), 1);

console.log(" Result:");
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]