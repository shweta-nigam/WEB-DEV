// 7th Aug 2025 , 11th Aug
// 🔴 Very Hard Level
// 16. Write a function that returns true if two arrays have the same elements regardless of order (no .sort() or Set allowed).
const arr = [1, 2, 3, 4, 5];
const arr1 = [5, 3, 2, 1, 0];
function similarArray(array1, array2) {
  if (array1.length !== array2.length) {
    console.log("Arrays do no have same elements.");
    return false;
  }
  let freq = {};
  for (const num of array1) {
    freq[num] = (freq || 0) + 1;                             // appear + 1, nothing remain same
  }

  for (const num of array2) {
    if (!freq[num]) {
      console.log("False");
      return false;
    }
    freq[num]--;
  }
  console.log("True");
  return true;
}

similarArray(arr, arr1);

// 17. Implement a deep flatten for nested arrays (e.g. flat(∞)):
// [1, [2, [3, [4]]]] → [1, 2, 3, 4]
const nestedArr = [1, [2, [3, [4]]]];
console.log(nestedArr.flat(Infinity))

function deepFlatten(array){
    const arr = []
   for (const element of array) {
     if(Array.isArray(element)){
        arr.push(...deepFlatten(element))
     } else {
        arr.push(element)
     }
   }
//    console.log(arr);
   return arr;
   
}

deepFlatten(nestedArr)

// 18. Simulate .map() using a for loop — create your own myMap(arr, callback).

function myMap(arr,callback){
  const result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(callback(arr[i],i,arr))
  }
  return result
}

const num = [1,2,3,4,5]
console.log(myMap(num,(n,i)=> n*2));
console.log(num);                          // original array does not change


// 19. Find the intersection of two arrays without using .filter() or .includes().

// intersection -> It’s like the “common part” in a Venn diagram.

function intersection(arr1,arr2){
    const map = {}
    const result = []

    // store element of arr1
    for (const num1 of arr1) {
       map[num1] = true 
    }

    // check elements of arr2
    for (const num2 of arr2) {
        if(map[num2]){
            result.push(num2)
            map[num2] = false    // avoid pushing duplicates
        }
    }

    return result
}

console.log(intersection([1,2,35,8,6], [86,53,3,2,1,0,6]));


// 20. Loop through a string and find the first non-repeating character:
// "swiss" → "w"

const string = "swiss"

function firstNonRepeatingChar(str) {
    let freq = {};

    // count chars
for (const char of str) {
    if(char === "-") continue;       // skip "-"
    freq[char] = (freq[char] || 0) + 1
}

// first non-repeating
for (const char of str) {
    if(freq[char] === 1){
        return char
    }
}

return null

}
console.log(firstNonRepeatingChar(string));
console.log(firstNonRepeatingChar("coco-cola"));
