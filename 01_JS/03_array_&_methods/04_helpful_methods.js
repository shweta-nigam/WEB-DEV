// 1st August 2025
//4. 🔧 Other Helpful Methods
// | Method       | Description                        |
// | ------------ | ---------------------------------- |
// | `isArray()`  | Checks if value is an array        |
// | `toString()` | Converts array to string           |
// | `length`     | Property to get number of elements |


const arr = [1,2,3, "a", "S"]

// isArray() -> The Array.isArray() static method determines whether the passed value is an Array.
console.log(Array.isArray(arr));                          // true
console.log(Array.isArray([]));                           // true
console.log(Array.isArray(null));                         // false
console.log(Array.isArray(undefined));                    // false
console.log(Array.isArray([undefined]));                  // true
console.log(Array.isArray([null]));                       // true
console.log(Array.isArray("[]"));                         // false
console.log(Array.isArray(new Array(2,3,4)));              // true
console.log(Array.isArray(new Int16Array([1,2,3])));         // false 

// Explanation:-
/*
❓ Why does isArray() need Array. before it?
Because isArray() is a static method on the Array constructor.

✅ That means:
It is not available on individual array instances (like [].isArray() – this will throw an error).

It must be called like this:
Array.isArray(something);

This is how it's defined internally in JavaScript:
Array.isArray = function (value) {
  // internal logic that checks the [[Class]] tag
}
*/

// So what is Int16Array?
// It’s a typed array, used to handle binary data in a fixed-length format.
const t = new Int16Array([10,20,30])
console.log(t);                                    // Int16Array(3) [ 10, 20, 30 ]
console.log(Array.isArray(t))                       // false 
/*
Because Int16Array is not a real Array, even though it’s array-like:
It has a length property
It’s iterable
It supports index access (like t[0])
But it doesn't inherit from Array.prototype, therefore it is not an array.
*/



// toString() -> Returns a string representation of an array
const a = [1,2,3,4,5]
const b = ["a", "p", "p" , "l", "e"]

console.log(toString(a));              // [object Undefined]
console.log(a.toString());             // 1,2,3,4,5
console.log(b.toString());             // a,p,p,l,e

// length() -> Gets or sets the length of the array. This is a number one higher than the highest index in the array.

const c =[1,35,67,"yu", "u"]
console.log(c.length);               // 5


console.log((new Array(-890)).length);    //  error -> RangeError: Invalid array length // -ve values not allowed

console.log((new Array(6)).length);    //6
console.log((new Array(6,3,4,5)).length);    // 4
//Explanation:-
/*
What's going on?
📌 JavaScript has two different behaviors for the Array constructor:
1. When passed a single numeric argument:
new Array(6)
✅ It creates an array with a length of 6, but with empty (uninitialized) slots.
It does not insert the number 6 as a value.
It's like saying: “Make an array of size 6, but don't fill it yet.”

2. When passed multiple arguments (even if all are numbers):
new Array(6, 3, 4, 5)
✅ It creates an array with those values as elements.
So this becomes:
[6, 3, 4, 5]
.length → 4
JavaScript sees multiple arguments ⇒ it assumes you're passing items, not a length.
*/

console.log(new Array("6"));    
console.log((new Array("6")).length);     // 1  -> 	One string → treated as element, not a length

 //tip:-
console.log(new Array(6)); // [ <6 empty items> ]
console.log([...new Array(6)]); // [undefined, undefined, undefined, undefined, undefined, undefined]

// Using the spread operator actually fills them with undefined.

// so 
console.log(([...new Array(4)]).length === 4);            //true
console.log(([...new Array(4)]) === ([undefined, undefined, undefined,undefined]));         //why false?

// Important :-
console.log(([1,2,3]) === ([1,2,3]));       // false
console.log(new Array(2,4,6) === new Array(2,4,6));       // false
//Both are new arrays, with the same values — but they live in different memory locations.

// Explanation
/*
At first glance, both look identical, so why is the output: false

Even if two arrays have the same contents, they are different objects in memory.
Arrays (and objects) are reference types, so equality (===) checks whether they are the same object, not whether their contents are equal.
*/


 







