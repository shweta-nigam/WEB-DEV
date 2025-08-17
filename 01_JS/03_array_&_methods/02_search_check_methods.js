// 2.  🔎 Search / Check
// | Method          | Description                                  |
// | --------------- | -------------------------------------------- |
// | `includes()`    | Checks if value exists                       |
// | `indexOf()`     | Returns first index of value                 |
// | `lastIndexOf()` | Returns last index of value                  |
// | `find()`        | Returns **first element** matching condition |
// | `findIndex()`   | Returns index of first matching element      |

const arr = [10,20,30, "p" ,"r"]

// includes() -> Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(arr.includes());       // false
console.log(arr.includes("p"));    //true
console.log(arr.includes("p",3));   //true          // 3 here is the position to start finding "p". so 0,1,2,3 index will return true and forth 4 will return false

// indexOf() -> Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(arr.indexOf(30));     // 2
console.log(arr.indexOf(50));     // -1
console.log(arr.indexOf());     // -1

let userName = "Andrew wright"

console.log(userName.indexOf("w"));   //5
console.log(userName.lastIndexOf("w"));   //7

// lastIndexOf()-> Returns the last occurrence of a substring in the string. and -1 for finding nothing
console.log(arr.lastIndexOf());   // -1

// find() -> The find() method returns the first element in an array that satisfies the given condition (i.e., where the callback returns true).
const num = [11,22,33,44,55]
console.log(num.find(n => n < 22));   // 11
console.log(num.find(n => n > 22));   // 33  // returns first number greater than 22

//findIndex() -> findIndex() returns the index of the first element in the array where the callback returns a truthy value. If no match is found, it returns -1.
console.log(num.findIndex(n => n > 33));   // 3
console.log(num.findIndex(n => n < 11));   // -1   // couldn't find therefore -1


console.log(num.findIndex(n <= 5));       
// ❗ This will throw a syntax error.  Why?
// You're passing n <= 5 directly instead of a function. findIndex() expects a callback function.

console.log(num.findIndex(n => 5));         // 0 // why? 
// Explanation of 0 output:-
// Here the passed function always returns 5 regardless of the value of n.
// and in js
Boolean(5) === true
// so tha callback is treated as:
n => true
// Which means: it will return true for the first element, which is 11.
// Hence, .findIndex() returns the index of 11, which is 0.





