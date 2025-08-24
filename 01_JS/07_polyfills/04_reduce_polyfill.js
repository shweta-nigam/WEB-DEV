// 24th August 2025

const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((n) => n + n);
// 1.)1 + 1 = 2, 2.)2 + 2 = 4, 3.)4 + 4 = 8, 4.)8 + 8 = 16
const result2 = arr.reduce((n) => n + n, 10);
console.log(result, result2);
//1.)10+10 = 20, 2.)20 +20 = 40 , 3.)40 + 40 = 80, 4.)80 + 80 =160, 5.)160 +160 = 320

const result3 = arr.reduce((pre,curr) => pre + curr)
console.log(result3);
//pre = arr[0] = 1 , curr = arr[1] = 2 // 1 + 2 = 3, 3 + 3 = 6, 6 + 4 = 10, 10 + 5 = 15 
const result4 = arr.reduce((pre,curr) => pre + curr,0)
console.log(result4);
// initial value = 0 , so pre = 0 // 0 + 1 = 1, 1 + 2 = 3, 3 + 3 = 6 , 6 + 4 = 10, 10 + 5 = 15
const result5 = arr.reduce((pre,curr) => (pre,curr),0)
console.log(result5);
// The comma operator evaluates both expressions (pre and curr), but only returns the last one.
// So (pre, curr) → always returns curr.
// pre=0, curr=1 → (0, 1) → returns 1
// pre=1, curr=2 → (1, 2) → returns 2
// pre=2, curr=3 → (2, 3) → returns 3
// pre=3, curr=4 → (3, 4) → returns 4
// pre=4, curr=5 → (4, 5) → returns 5
// ✅ Final accumulator = 5

const result6= arr.reduce((pre,curr) => (pre-curr),0)
console.log(result6);
// pre = 0, --->  0 - 1 = -1, -1 - 2 = -3 , -3 - 3 = -6, -6 - 4 = -10, -10 - 5 = -15

const result7= arr.reduce((pre,curr) => (pre-curr))
console.log(result7);
// pre = arr[0] = 1  --->  1 - 2 = -1, -1 - 3 = -4, -4 - 4 = -8 , -8 - 5 = -13


// syntax :-
// arr.reduce((accumulator, currentValue, index, array) => { ... }, initialValue)
// 

// reduce() -> Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.



// --------        reduce polyfill                     ----------

if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(callback,initialValue){

     let hasInitial = initialValue !== undefined  // check for boolean , if initial value provided - true , if not given - false

     let prev =  hasInitial?  initialValue : this[0];

     let startIndex = hasInitial ? 0 : 1

     for(let i = startIndex; i < this.length; i++){
        prev = callback(prev,this[i],i,this)
     }

     return prev 
    }
}

const array = [1,2,3,4,5]
console.log(array.myReduce((prev,curr) => prev + curr));
