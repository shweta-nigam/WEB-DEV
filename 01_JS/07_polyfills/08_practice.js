// 28th August 2025

// polyfill of filter --------------------------------------------------------

const nums = [1,2,3].filter(n => n > 2)
console.log(nums);      // [3]

const nums2 = [1,2,3].filter(n => n = 2)    // filter expects your callback to return a boolean (true = keep the element, false = discard it).
console.log(nums2);      // [ 1, 2, 3 ]



const nums3 = [1,2,3].filter(function(n){
    return `${this.des} : ${n > 1}`
}, {des: "Number greater than 1 is "})
console.log(nums3);       // [1,2,3]       
// .filter() expects the callback to return a boolean (true = keep, false = drop).
// But you’re returning a string:
// For n=1: "Number greater than 1 is : false"
// For n=2: "Number greater than 1 is : true"
// For n=3: "Number greater than 1 is : true"
// In JavaScript:
// Any non-empty string is truthy (even "false").
// So every iteration returns a truthy value.
// .filter() thinks that means "keep everything".
// ✅ That’s why the output is the original array [1,2,3].


const nums4 = [1,2,3].filter(function(n){
    console.log(`${this.des} ${n > 1}`)
    return n > 1
}, {des: "Number greater than 1 is "})

console.log(nums4) // [2, 3]
// output:
// Number greater than 1 is  false
// Number greater than 1 is  true
// Number greater than 1 is  true
// [ 2, 3 ]



if(!Array.prototype.myFilter){
    Array.prototype.myFilter =  function(callback,thisArg){
        let result = []
        for (let i = 0; i < this.length; i++) {
         if(callback.call(thisArg,this[i], i, this)){
            result.push(this[i])
         }
            
        }
        return result
    }
}

const nums5 = [1,2,3].myFilter(function(n){
    console.log(`${this.des} ${n > 1}`)
    return n > 1
}, {des: "Number greater than 1 is "})
console.log(nums5)

// Number greater than 1 is  false
// Number greater than 1 is  true
// Number greater than 1 is  true
// [ 2, 3 ]