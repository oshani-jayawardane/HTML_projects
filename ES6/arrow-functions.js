var numbers = [3, 56, 2, 48, 5];

/*************************************************************/

// 01 - Map -Create a new array by doing something with each item in an array.

// function square(x) {
//   return x * x;
// }

// const newNumbers = numbers.map(square);

// const newNumbers = numbers.map((x) => {
//   return x * x;
// });

const newNumbers = numbers.map((x) => x * x);

console.log(newNumbers);

/*************************************************************/

// 02 - Filter - Create a new array by keeping the items that return true.

// const newNumbers2 = numbers.filter(function (num) {
//   return num < 10;
// });

const newNumbers2 = numbers.filter((num) => num < 10);

console.log(newNumbers2);

/*************************************************************/

// 03 - Reduce - Accumulate a value by doing something to each item in an array.

// const newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator + currentNumber;
// });

const newNumber = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);

console.log(newNumber);

/*************************************************************/

// 04 - Find - find the first item that matches from an array.

// const newNumber2 = numbers.find(function (num) {
//   return num > 10;
// });

const newNumber2 = numbers.find((num) => num > 10);

console.log(newNumber2);

/*************************************************************/

// 05 - FindIndex - find the index of the first item that matches.

// const newNumber3 = numbers.findIndex(function (num) {
//   return num > 10;
// });

const newNumber3 = numbers.findIndex((num) => num > 10);

console.log(newNumber3);
