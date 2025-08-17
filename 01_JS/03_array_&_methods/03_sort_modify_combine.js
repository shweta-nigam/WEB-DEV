//  31st July 2025
// 3. 🔄 Sort / Modify / Combine
// | Method      | Description                   |
// | ----------- | ----------------------------- |
// | `sort()`    | Sorts the array               |
// | `reverse()` | Reverses the order            |
// | `join()`    | Converts array to string      |
// | `concat()`  | Combines arrays               |
// | `flat()`    | Flattens nested arrays        |
// | `fill()`    | Fills array with static value |

const arr = [1, 34, 21, 46, 98, 221 , 567]

// sort() -> Sorts an array in place. This method mutates the array and returns a reference to the same array.
console.log(arr.sort());      // [1,21, 221, 34, 46, 567, 98]

const abc = [45,567, 2, "Z" , "c" , "a", "A"] 
console.log(abc.sort());                   // [2,45,567,"A",  "Z", "a", "c"]
console.log(abc);

//reverse() -> Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
console.log(arr.reverse());               //[   98, 567, 46, 34,  221,  21,  1]
console.log(arr);

// join() -> Adds all the elements of an array into a string, separated by the specified separator string.
console.log(arr.join());                  // 98,567,46,34,221,21,1
console.log(arr);                         //[   98, 567, 46, 34,  221,  21,  1]
console.log(arr.join("-"));               // 98-567-46-34-221-21-1

// concat() -> Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const combinedArr = arr.concat(abc)
console.log(combinedArr);                         //[  98,  567, 46,  34,  221,  21,  1,   2,   45,  567,  'A','Z', 'a', 'c']

// flat() ->Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const a = [1,2,[11,22], [345,[5678,8906,[90897]]], 3]
console.log(a.flat());                             //[ 1, 2, 11, 22, 345, [ 5678, 8906, [ 90897 ] ] ]
console.log(a);                                    //[ 1, 2, [ 11, 22 ], [ 345, [ 5678, 8906, [Array] ] ], 3 ]
// explanation fro [Array] here:-
/*
When you run this in Node.js terminal, the console.log() output uses Node’s internal formatter from the util.inspect module. For deeply nested objects or arrays, it abbreviates nested structures beyond a certain depth (by default 2), and represents them like:

[Array] → means there's another nested array there
[Object] → means there's a nested object
etc.

So it's not the actual value, but a preview or abbreviation.
*/
console.dir(a, { depth: null });   // You will get the full array expanded,This is because console.dir() allows customizing how deeply to inspect.

// Use console.dir(a, { depth: null }) to print the full contents.
// Or even:
console.log(JSON.stringify(a)); // as a string
console.log(JSON.stringify(a, null, 2)); // pretty printed



console.log(a.flat(33));                        // [     1,     2,   11,    22,   345, 5678,  8906, 90897,    3]
//Depth is 33 — more than sufficient to fully flatten all nested levels:
console.log(a.flat(2));                          // [ 1, 2, 11, 22, 345, 5678, 8906, [ 90897 ], 3 ]


// file() ->  Changes all array elements from start to end index to a static value and returns the modified array
const b = [ 1,23,4,5]
console.log(b.fill())                            // [ undefined, undefined, undefined, undefined ]
console.log(b.fill(9));                         //  [ 9, 9, 9, 9 ]
console.log(b.fill("a"));                      // [ 'a', 'a', 'a', 'a' ]

const c =  [ 1,23,4,5]
console.log(c.fill(9,2,3));                     // [1,23,9,5] 












