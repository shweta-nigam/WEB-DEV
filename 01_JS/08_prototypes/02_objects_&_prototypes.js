// 30th August 2025

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


obj2.toString()                             // nothing
console.log(obj2.toString())               // [object Object]
//In Chrome DevTools, when you type obj2 and expand it, the console nicely shows you:
// { fname: "Larry", lname: "Johnson" }
// and at the bottom you see ▶ __proto__ → with methods like toString(), hasOwnProperty(), etc.
// That’s just Chrome being fancy — it shows the prototype chain automatically in a tree view.


// console.log(obj1.getFullName());        // John Write
// console.log(obj2.getFullName());        // TypeError: obj2.getFullName is not a function


// As seen above getFullName method is not available on obj.2 
// But will happen if obj1 is embedded inside the __proto__ of obj2 ?

obj2.__proto__ = obj1
console.log(obj2.getFullName());               // Larry Johnson         // it works now!!


// But will any other method from prototype work for obj2 or all __proto__ has been replaced ?

console.log(obj2.toString())                       //  [object Object]   
// And yes,  __proto__ of obj2 is still visible. 
// how and why?  Because  firstly obj2 would be searched for the method if not found it would then move to obj1 and event their it couldn't find it, it would move to to __proto__ of Object(built in).



