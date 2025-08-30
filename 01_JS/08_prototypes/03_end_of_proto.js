// 30th August 2025

// What is the end of proto?
// until __proto__ is null

const obj1 = {
    fname: "John",
    lname: "Write",

    getFullName (){
    return `${this.fname} ${this.lname}`
    }
    
}
const obj2 = {
    fname: "Larry",
    lname: "Johnson",
}



obj2.__proto__ = obj1

// console.log(obj2.__proto__);                 // { fname: 'John', lname: 'Write', getFullName: [Function: getFullName] }

// console.log(obj2.__proto__.__proto__);                            // [Object: null prototype] {}

// console.log(obj2.__proto__.__proto__.__proto__)                  // null

// console.log(obj2.__proto__.__proto__.__proto__.__proto__)       // TypeError: Cannot read properties of null (reading '__proto__')

// So the conclusion is that any __proto__ ends at being null !



// playing with __proto__ -----------------------------------------------------------------------


// what happens here? 
obj2.__proto__  = null
// console.log(obj2.__proto__);                    // undefined
// console.log(obj2.__proto__.__proto__);          // TypeError: Cannot read properties of undefined (reading '__proto__')



// what happens with obj1 as it is a just simple object?

console.log(obj1.__proto__);                            // [Object: null prototype] {}

console.log(obj1.__proto__.__proto__);                  // null

obj1.__proto__ = null

console.log(obj1.__proto__);                            // undefined

console.log(obj1.__proto__.__proto__);                  // TypeError: Cannot read properties of undefined (reading '__proto__')





// __proto__ and prototype  -------------------------------------------------------------------

console.log(obj1.Prototype);                 // undefined

// But

console.log(obj1.__proto__);                            // [Object: null prototype] {}

//This is because:-
// .prototype → only lives on constructor functions or classes.
// .__proto__ → lives on instances and points to their prototype object.

// Analogy 🎭

// Think of it like this:

// prototype = the recipe (on the chef/constructor function).
// __proto__ = the secret sauce your dish inherits from the recipe (on the actual object instance).
// If you’re holding a dish 🍲 (obj1), asking for .prototype makes no sense — that belongs to the chef. But asking for .__proto__ will show you what recipe (prototype) the dish came from.


//obj1.prototype → undefined, because obj1 is a plain object, not a function.
// obj1.__proto__ → works, because every object has a hidden link to its prototype (usually Object.prototype).