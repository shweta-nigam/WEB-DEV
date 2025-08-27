// 26th August 2025   // 27th August 2025

// polyfill of foreach ------------------------------------------------------------------

// signature: returns undefined , perform task on each element, takes 3 

const arr = [2,4,6,8]
const result = arr.forEach((n)=> n * 2)
console.log(result);                      // undefined
const result1 = arr.forEach((n)=>  console.log(n * 2))         // 4,8,12,16
console.log(result1);             // undefined


if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(callback){
       for(let i = 0; i < this.length ; i++){
          callback(this[i],i,this)
       }
    }
}
const arr2 = [2,4,6,8]
const result2 = arr2.myForEach((n)=>  console.log(n * 2))

//return in outer function → breaks the loop entirely (because it exits the whole myForEach).
// return in callback → only skips that single callback execution, not the loop.


// when you do want to break the loop and return current element  in "your" forEach
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(callback){
       for(let i = 0; i < this.length ; i++){
          if( callback(this[i],i,this)){
            return this[i]
          }
       }
    }
}


// polyfill of map ----------------------------------------------------------------------

// signature: call a function for each element , returns new array 
const arr3 = [1,2,3]
const result3 = arr3.map(n => n + 2)
console.log(result3);   // [3,4,5]

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callback){
        let result = []
        for(let i = 0; i < this.length; i++){
            result.push(callback(this[i],i,this))
        }
        return result
    }
}
const result4 = arr3.myMap(n => n + 2)
console.log(result4);                   // [3,4,5]


// polyfill of some ----------------------------------------------------------------------

// signature: Determines whether the specified callback function returns true for any element of an array. 
// takes a callback which takes upto 3 arguments, return true 
// same as find but it returns boolean value instead of current element

const array = [10,20,30]
const res = array.some((n) => n > 10) 
console.log(res);    // true 

const res1 = array.some((n) => n > 40) 
console.log(res1);    // false 


// for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//         return true
//     } else {
//         return false   // ❌ this exits on the very first element
//     }
// }


if(!Array.prototype.mySome){
    Array.prototype.mySome = function(callback){
        for (let i = 0; i < this.length; i++) {
            if(callback(this[i],i,this)){
                return true
            }   
        } 
        return false
    }
}

const res2 = array.mySome((n) => n > 40) 
console.log(res2); 

const res3 = array.mySome((n) => n > 10) 
console.log(res3); 



// polyfill of every ----------------------------------------------------------------------

// signature: false immediately if any element fails the test.
// true if all elements pass the test.


const nums = [1,2,3,4,5]
const check = nums.every(n => n > 0)
console.log(check);                        //true

const check2 = nums.every(n => n > 2)
console.log(check2);                       // false

if(!Array.prototype.myEvery){
    Array.prototype.myEvery = function(callback){

        for (let i = 0; i < this.length; i++) {
           if(!callback(this[i],i,this)){
               return false
           }
        }
        return true
    }
}

const check3 = nums.myEvery(n => n > 0)
console.log(check3);                        //true

const check4 = nums.myEvery(n => n > 2)
console.log(check4);                       // false