// 4th Aug 2025 // 7th Auh 2025
// 🟠 Hard Level
// 11. Find the first duplicate number in [5, 3, 4, 2, 3, 6].

const arr = [5, 3, 4, 2, 3, 6];

let arr2 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr2.includes(arr[i])) {
    console.log(arr[i]);
    return;
  }
  arr2.push(arr[i]);
}
// or
const arr1 = [5, 3, 4, 2, 3, 6];
let obj = {};
for (const ele of arr1) {
  if (obj[ele]) {
    console.log(ele);
    break;
  }
  obj[ele] = true;
}

// 12. Flatten a nested array (one level deep):
// [1, [2, 3], 4, [5, 6]] → [1, 2, 3, 4, 5, 6]

const arr3 = [1, [2, 3], 4, [5, 6]];
console.log(arr3.flat()); // [ 1, 2, 3, 4, 5, 6 ]

// 13. Count the frequency of each character in the string "hello world" using a loop and object.

const str = "hello world";
const frequency = {};
for (const ele of str) {
  if(ele === " ") continue                                  // skip spaces
  
 if(frequency[ele]){
  frequency[ele] += 1
 } else {
  frequency[ele] = 1
 }
}
console.log(frequency);


// 14. Given arr = [1, 2, 3, 4, 5], rotate it one step to the right using a loop:
// → [5, 1, 2, 3, 4]
const arr4 = [1, 2, 3, 4, 5]
let last =  arr4[arr4.length - 1]
for(let i = arr4.length -1; i >= 0; i--){
  arr4[i] = arr4[i-1]
}
arr4[0] = last
console.log(arr4);

// 15. Find the longest word in an array of strings:
// ["sun", "flower", "moonlight", "sky"]

const arr5 = ["sun", "flower", "moonlight", "sky"]
let longest = arr5[0]                               // store string not just length
for(let i = 0; i < arr5.length; i++ ){
if(arr5[i].length > longest.length){
    longest = arr5[i]
}
}

console.log(`Longest word is "${longest}" with length ${longest.length}`);

// let longest = arr5[0].length                // When tracking the longest string, store the string, not just the length — then compare .length in each iteration.