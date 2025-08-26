// 26th August 2025

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
