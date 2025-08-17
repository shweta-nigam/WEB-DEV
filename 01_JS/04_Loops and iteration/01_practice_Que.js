// 🟢 Easy Level
// 1. Print numbers 1 to 5 using a loop.

for(let i = 1; i <= 5; i++){
    console.log(i);                 // 1,2,3,4,5
}

// 2. Print all even numbers from 1 to 10.

for(let i = 1; i <= 10; i++){
    if(i % 2 === 0  ){
        console.log(i)          // 2,4,6,8,10   
    };              
}

// or 
//syntax error  -> for(let i = 2; i<=10; i+2 )  here i + 2 is just simple math and more
for(let i = 2; i<=10; i+=2 ){
    console.log(i)
}

// 3. Calculate the sum of numbers from 1 to 100 using a loop.

let sum = 0
for(let i = 1; i<=100; i++ ){
    sum += i
}
console.log(sum);            //5050
// mistake  -> let sum; this is undefined so all numbers will be added to undefined and return NaN
/*
🔁 Memory Tip:
Always initialize accumulators (like sum, product, count) with:

0 for sum/count
1 for product
[] or {} for arrays/objects
*/

//4. Given an array [3, 7, 1, 9, 4], print each element using a for...of loop.

'use strict'
const arr = [3, 7, 1, 9, 4]
for(val of arr){                // wrong syntax work in non-strict environment. -> not good practice.
 console.log(val);
}

for (const i of arr) {
    // console.log(arr[i]);      // wrong syntax as for...of gives you the values of the array directly.  
    console.log(i);   
}

//5. Count how many elements are greater than 5 in [4, 10, 2, 8, 6].

const arr2 = [4, 10, 2, 8, 6]
let count = 0
// for(let i = 1; i < arr2.length; i++ ){          // mistake:- index starts from 0 not 1!
for(let i = 0; i < arr2.length; i++ ){
   if(arr2[i] > 5){
      count+=1
    //   count = count + 1
   }
}
console.log(count);


// 🟡 Medium Level
// 6. Reverse the array [1, 2, 3, 4, 5] without using .reverse().

const arr3 =  [1, 2, 3, 4, 5]
let reversedArr = []
for(let i = 0; i < arr3.length; i++ ){
  reversedArr.unshift(arr3[i])
}
console.log(reversedArr);

// or
let reversedArr2 = []
for(let i = arr3.length - 1 ; i >= 0 ; i-- ){
  reversedArr2.push(arr3[i])
}
console.log(reversedArr2);


// 7. Write a loop to find the maximum number in [12, 3, 45, 7, 22, 100].

const arr4 = [12,1000, 3, 45, 7, 22, 100, 34, 89]
let maxNum = arr4[0]
for(let i = 0; i < arr4.length; i++){
    if(arr4[i] > maxNum){                      
        maxNum = arr4[i]
        console.log(maxNum = arr4[i])
    }
    
    // if(arr4[i + 1] > arr4[i]){                     // wrong logic 
    //     maxNum = arr4[i + 1]
    // }
}
console.log(maxNum);
// Loop continues until the end, and maxNum holds the largest number.
// maxNum keeps getting replaced only if a bigger number is found.
// Once it becomes 1000, the rest of the numbers are not bigger, so the condition arr4[i] > maxNum is false — and maxNum doesn't change.
// The largest number survives till the end.



// 8. Remove all null and undefined values from an array:
const arr5 = [1, null, 2, undefined, 3, null, 4];

let pureArr = []

for(let i = 0; i < arr5.length; i++){
    if(arr5[i] !== null && arr5[i] !== undefined){
     pureArr.push(arr5[i])
    }
}
console.log(pureArr);

const arr6 = [1, null, 2, undefined, 3, null, 4];
const filtered = [];
for(let el of arr6){
    if( el != null ) filtered.push(el)    // != null is a common JavaScript trick to exclude both null and undefined. != null means: "not null or undefined"
}
console.log(filtered);


// 9. Create a new array of squares from [2, 4, 6, 8] using a loop.

const arr7 = [2, 4, 6, 8]
const square = arr7.forEach((n) => n*n)  // It returns undefined, not the transformed data.
console.log(square); 


let square2 = []
for(let i = 0; i < arr7.length; i++){
    square2.push(arr7[i]*arr7[i])
}
console.log(square2);

// 10. Print the Fibonacci sequence up to n = 10 terms.

let a = 0;
let b = 1;

console.log(a);
console.log(b);

for(let i = 0; i <= 20; i++ ){
 let next = a + b
 console.log(next);
    a = b
    b = next 
}
