// 17th AUg 25
// To write a polyfill for a functionality , signature of that said functionality needs to be understood.

// forEach() -> Performs the specified action for each element in an array.
            //  -> Takes up to 3 arguments


// Investigation :- 
const arr = [1,2,3,4]
const arr1 = arr.forEach((n, i, arr)=> console.log( n * 2 , i, arr))
console.log(arr1);                                // undefined  -> does not return anything.
console.log(arr);                                // [ 1, 2, 3, 4 ] -> does not mutate the original array.  

// output:-  console.log( n * 2 , i, arr)
// 2 0 [ 1, 2, 3, 4 ]
// 4 1 [ 1, 2, 3, 4 ]
// 6 2 [ 1, 2, 3, 4 ]
// 8 3 [ 1, 2, 3, 4 ]



// ChatGPT
// forEach() is an array method in JavaScript that lets you loop through each element of an array and run a function on it.

// syntax :-
// array.forEach(callbackFn(currentValue, index, array), thisArg)

// Parameters:
// callbackFn → function to run for each element.
// currentValue: element of the array.
// index (optional): index of that element.
// array (optional): the whole array.

// thisArg (optional) → value to use as this inside the callback.

// 👉 Returns:
// Nothing (undefined) — it only executes the callback, doesn’t return a new array





// polyfill of forEach()
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(callback){

        for(let i = 0; i < this.length; i++){
           callback(this[i],i,this)
        }

    }
}

const array = [1,2,3]
array.myForEach((n,i,arr)=>console.log(n*2,i,arr))
//output:-
// 2 0 [ 1, 2, 3 ]
// 4 1 [ 1, 2, 3 ]
// 6 2 [ 1, 2, 3 ]


// Better version 
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(callFun,thisArg){
        for(let i =0; i< this.length; i++ ){
            callFun.call(thisArg,this[i],i,this)
        }
    }
}
const array1 = [2,3,4]
array1.myForEach((n,i,arr)=> console.log(n*n,i,arr), 10)