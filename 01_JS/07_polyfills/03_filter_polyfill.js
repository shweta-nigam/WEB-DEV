// 19th August 2025
const arr = [1,2,3,4]

// const filteredArr = arr.filter((n,i) => {(n % 2 === 0); return n * i})   // The (n % 2 === 0) line has no effect at all because you didn’t return it.           
// console.log(filteredArr);   [ 2,3,4]
// Step through each element:
// n = 1, i = 0 → return 1 * 0 = 0 → falsy → not included.
// n = 2, i = 1 → return 2 * 1 = 2 → truthy → included.
// n = 3, i = 2 → return 3 * 2 = 6 → truthy → included.
// n = 4, i = 3 → return 4 * 3 = 12 → truthy → included.


const filteredArr = arr.filter((n,i) => { return (n % 2 === 0);}) 
console.log(filteredArr);        // [2,4]



const filteredArr2 = arr.filter((n,i) => {                  
    if( (n % 2 === 0))  return i                // even if i is returned only the element itself will be pushed in new array
}) 
console.log(filteredArr2); 


//First, how .filter() really works
arr.filter(callback)
// The callback is called with (element, index, array).
// If the callback returns a truthy value, the element itself is kept in the result.
// The return value is not what goes into the array — it’s only used to decide keep or discard.

//Why not [1,3]?
// Because .filter() always returns elements from the original array, never the return value.
// Your return i is only being checked for truthiness (non-zero index = truthy), so filter keeps those elements (2 and 4), not the indexes.




// -----------------    polyfill of filter() ----------------------------------


// signature of filter():-
// returns new array when condition is truthy

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(callback){
        const newArray = []
       for(let i = 0; i < this.length; i++){
        if(callback(this[i],i,this)){
           newArray.push(this[i])
        }
       }
        return newArray
    }
} 
const array = [1,2,3,4]
console.log(array.filter((n) => n > 3));            // [4]
console.log(array.myFilter((n) => n > 3));          // [4]
