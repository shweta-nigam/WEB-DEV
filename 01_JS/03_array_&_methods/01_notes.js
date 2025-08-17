//--------------                     Array                              ------------
/* Intro : -
Array is nothing but a variable used to hold multiple values in a single variable.
Arrays are ordered , zero-indexed collection.
To access the items in an array -> items[0] - first element
*/
//  How to create an Array:-
// 1. using square bracket(common)
const arr1 = [1,23,4]
console.log(arr1);                    // [ 1, 23, 4 ]
//2. using array constructor
const arr2 = new Array(1,23,4)
console.log(arr2);                    // [ 1, 23, 4 ]


//Common Array Method :-    (other methods on different files)
//1. Add/removes element:- 
// | Method      | Description                               |
// | ----------- | ----------------------------------------- |
// | `push()`    | Adds to **end**                           |
// | `pop()`     | Removes from **end**                      |
// | `unshift()` | Adds to **start**                         |
// | `shift()`   | Removes from **start**                    |
// | `splice()`  | Add/remove elements **at specific index** |
// | `slice()`   | Returns a **copy** of part of the array   |


const arr3 = [1,2,3, "a", "b", "c"]

// push() -> Appends new elements to the end of an array, and returns the new length of the array.
console.log(arr3.push())      // 6     
console.log(arr3.push("d"));  // 7
console.log(arr3)             // [  1,   2,   3,   'a',  'b', 'c', 'd'] 

//pop() -> Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr3.pop());   // d
console.log(arr3);         // [ 1, 2, 3, 'a', 'b', 'c' ]

// unshift() -> Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arr3.unshift());           //  6
console.log(arr3.unshift("e"));       // 7
console.log(arr3);                   // 'e', 1,   2,   3,  'a', 'b', 'c']

//shift() -> Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr3.shift());  // e
console.log(arr3);          // [ 1, 2, 3, 'a', 'b', 'c' ]

// splice() ->  Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(arr3.splice());                // []
console.log(arr3.splice(3,3,"xy","yz"));   // ['a', 'b', 'c']
console.log(arr3);                         //    [1,2,3,"xy","yz"]


// slice() -> Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
console.log(arr3.slice());         //   [ 1, 2, 3, 'xy', 'yz' ]     - returns whole array if no indexes provided
console.log(arr3.slice(3,10));      //   [ 'xy', 'yz' ]             - returns including first element until the end if last index is big
console.log(arr3);                 //   [ 1, 2, 3, 'xy', 'yz' ]
console.log(arr3.slice(-3));       //   [3 , 'xy' , 'yz]
console.log(arr3.slice(-3,-2));       //   [3]
console.log(arr3.slice(-3, 2));       //   []


const array = []
console.log(array.pop());    // undefined
console.log(array.shift());    // undefined



// Note:-
//1
//.splice() with no args === .splice(0)
// It means: start at 0, remove everything
// In older JS, it used to remove everything. In modern behavior:
// arr.splice() = arr.splice(0) = remove nothing.

//2
 console.log(arr3.slice());
// // No args = full shallow copy
// ✅ Output: [1, 2, 3, 'xy', 'yz'] → not modifying original array














