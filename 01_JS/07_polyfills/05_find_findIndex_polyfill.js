// 
const arr = [20,30,40,50]

const findResult = arr.find((n) => n > 35)
console.log(findResult);        // 40

// find() -> Returns the value of the first element in the array where predicate is true, and undefined otherwise.

// ------------           polyfill of find             ---------------------

if(!Array.prototype.myFind){
    Array.prototype.myFind = function(callback){
        for(let i = 0; i < this.length; i++){
            if(callback(this[i],i,this)){
                 return  this[i]
            }

        }
       return undefined
    }
}
const findResult2 = arr.myFind((n) => n > 35)
console.log(findResult2);  




// findIndex

const array = [2,3,4,5]
const findIndexResult = array.findIndex((n) => n > 3)
console.log(findIndexResult); // 2
const findIndexResult3 = array.findIndex((n) => n > 10)
console.log(findIndexResult3); // -1

if(!Array.prototype.MyFindIndex){
    Array.prototype.MyFindIndex =  function(callback){
        for (let i = 0; i < this.length; i++) {
            if(callback(this[i],i,this)){
               return i 
            } 
        }
        return -1 
    }
}
const findIndexResult2 = array.findIndex((n) => n > 3)
console.log(findIndexResult2); // 2
const findIndexResult4 = array.findIndex((n) => n > 10)
console.log(findIndexResult4); // -1