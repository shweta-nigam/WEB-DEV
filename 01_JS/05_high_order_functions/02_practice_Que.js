// 16th August 2025
// Practice Set — Higher-Order Array Functions in JavaScript

// Level 1 — Easy

// 1. Double the Numbers
// Given:
let numbers = [1, 2, 3, 4];
// Expected Output: [2, 4, 6, 8]
// Use .map() to double each number.

const double = numbers.map((n)=> n * 2)
console.log(double);                                             // [ 2, 4, 6, 8 ]


// 2. Filter Even Numbers
// Given:
let nums = [5, 10, 15, 20];
// Expected Output: [10, 20]
// Use .filter() to get only even numbers.

const evenNumbs = nums.filter((n) => n % 2 === 0)                        // [ 10, 20 ]
console.log(evenNumbs);


// 3. Check for Teenagers
// Given:
let ages = [12, 16, 21, 30];
// Expected Output: true  // because 16 is a teenager
// Use .some() to check if there’s any age between 13 and 19.
const ageBw13_19 = ages.some((age)=> age > 13 && age < 19)                 // true  
console.log(ageBw13_19);


// Level 2 — Medium

// 4. First Long Word
// Given:
let words = ["hi", "hello", "extraordinary", "yes"];
// Expected Output: "extraordinary"
// Use .find() to get the first word with more than 5 letters.

const moreThan5Letters = words.find((str) => str.length > 5)
console.log(moreThan5Letters);                                          // extraordinary

// 5. Sum of Squares
// Given:
let numbers2 = [2, 3, 4];
// Expected Output: 29
// Use .reduce() to get the sum of squares of the numbers.
const squaresReduce = numbers2.reduce((acc, cur) => (cur * cur) + acc ,0)
console.log(squaresReduce);                                                       // 29 
// 4 + 9 + 16  => 29

// 6. Sorting by Age
// Given:
let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 20 },
    { name: "Charlie", age: 30 }
];
// Expected Output: Sorted by age ascending
// Use .sort() with a compare function.

const sortedByAge = people.sort((a,b)=> a.age - b.age) 
console.log(sortedByAge);                               
console.log(people);                                          // // mutates the original array
// output:-   same for both logs
// [
//   { name: 'Bob', age: 20 },
//   { name: 'Alice', age: 25 },
//   { name: 'Charlie', age: 30 }
// ]

