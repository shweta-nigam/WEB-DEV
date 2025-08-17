// Some fun facts of conditionals in JS

//1. null == undefined is true but null === undefined is false.
if (null == undefined) {
  console.log("Loose equality:true");
}
if (null === undefined) {
  console.log("Strict equality:false"); // won't run
}
// Lesson learned :- Always use strict equal(===) unless you know what you're doing.

//2. You can use if with assignment – on purpose or by mistake
let x = 10;
if ((x = 0)) {
  console.log("will this execute?!"); // assignment will make it 0 (a falsy: Code won't run)
}

//Lesson :- Be careful: = is assignment, == is equality, === is strict equality.
// This is a classic bug beginners accidentally write.

//3.  Conditions don’t need true or false – anything can be a condition
if ("hello") {
  console.log("This is truthy");
}
if ([]) {
  console.log("Empty array is truthy value");
}
if ({}) {
  console.log("Empty object is truthy value");
}
// In Js :
//   [] , {} , " " etc. are truthy value
//    0, "", NaN, null, undefined and false are falsy value

// 4. NaN is never equal to itself
if (NaN === NaN) {
  console.log("This will never run");
}
// Why? Because NaN is literally not equal to anything, even itself.
// To check for NaN we use:-
const value = "45xyz";
const converted = Number(value);
console.log("Converted to NaN:", converted);
if (Number.isNaN(converted)) {
  console.log("This is NaN!");
}

//5. Double negation (!!value) converts anything to a true or false
console.log(!!"hello"); // true
console.log(!!false); //false
console.log(!false); // true
console.log(!!0); //false
console.log(![]); //false
console.log(!![]); // true

//6.  Empty array and object are truthy — but weird things happen in comparisons
// Because of JavaScript's weird type coercion.
if ({}) {
  console.log("Empty object is truthy");
}
if ([]) {
  console.log("Empty array is truthy");
}
console.log([] == true); // false
console.log([] === false); //false
console.log([] == false); //true   // why true here

console.log({} == true); //false
console.log({} === false); //false
console.log({} == false); //false     // why true not here

//7. Ternary chaining is possible — but not recommended for readability
const number = 87;
let grade = number >= 90 ? "A" : number >= 70 ? "B" : number >= 50 ? "C" : "F";
console.log(grade)  //B
// It works, but nested ternaries can be hard to read.

//8.  You can use conditionals inside template strings
let isLoggedIn = true
console.log(`User is ${isLoggedIn ? "online" : "offline"}`);

