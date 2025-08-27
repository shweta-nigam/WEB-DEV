// 27th August 2025

// forEach() polyfill with thisArg-------------------


// without thisArg --------------------------------------------------
if(!Array.prototype.myForEach){
  Array.prototype.myForEach = function(callback){
    for(let i = 0; i <this.length; i++){
        callback(this[i],i,this)
    }
    return undefined
  }
}

const arr = [1,2,3]
arr.forEach(n => console.log(n) )
arr.myForEach(n => console.log(n) )

arr.forEach((n => console.log(n) ),this)       // 1 2 3


[2,4,6].forEach(function(n){
    console.log(n,this)                       // 2,4,6  and  global object inside node in non-strict mode 
})


// in strict mode this is undefined 

"use strict";            // be careful with syntax
[2,4,6].forEach(function(n){
    console.log(n,this)                      
})

// 2 undefined
// 4 undefined
// 6 undefined





// with thisArg ---------------------------------------------------------------------------------------

[2,4,6].forEach(function(n){
    console.log(this.prefix,n);
},{prefix : "Number"})

// Number 2
// Number 4
// Number 6


[1,2,3].forEach(function(num){
    console.log(this.description, num);  
},{description: "This number is:"})

// This number is: 1
// This number is: 2
// This number is: 3


[10,20,38].forEach(function(n){ 
    console.log(n,this.description);   
},{description: " is total number"})

// 10  is total number
// 20  is total number
// 38  is total number




if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(callback,thisArg){
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg,this[i],i,this)
        }
    }
}

[2,4,6].myForEach(function(n){
    console.log(this.prefix,n);
},{prefix : "Number"})

// Number 2
// Number 4
// Number 6

// Notes:- How .forEach really works with thisArg
// When you pass thisArg, it should become the value of this inside the callback.
// In JavaScript, the way to call a function with a custom this is using callback.call(thisArg, ...).



// 
if(!Array.prototype.myMap){
 Array.prototype.myMap =  function(callback,thisArg){
  let newArr = []
  for(let i = 0; i < this.length; i++){
   callback.call(thisArg,this[i],i,this)
     newArr.push(callback(this[i]))
  }
  return newArr
 }
}

const c = [2,4,6].myMap(function(n){
    return { prefix : this.prefix ,  value : n}
},{prefix: "Number"})
console.log(c);
// [
//   { prefix: undefined, value: 2 },
//   { prefix: undefined, value: 4 },
//   { prefix: undefined, value: 6 }
// ]


const b = [2,4,6].map(function(n){
    return { prefix : this.prefix ,  value : n}
},{prefix: "Number"})
console.log(b);
// [
//   { prefix: 'Number', value: 2 },
//   { prefix: 'Number', value: 4 },
//   { prefix: 'Number', value: 6 }
// ]




const a = [1,2,3].map(n=> n + 1 )
console.log(a);


const res = [1,2,3].map(function(n){
//    return `${this.des} :${ n}`             // ["Number : 1", "Number : 2", "Number : 3"]
//   return (this.des,n)                      // The comma operator evaluates both expressions, but returns only the last one.  [1, 2, 3]
// return (n,this.des)                        // [ 'Number', 'Number', 'Number' ]
//   return (this.des)                        //  ["Number", "Number", "Number"]
},{des: "Number"})
console.log(res);

