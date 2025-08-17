// 17th AUG 2025
const obj = {
    name: "John",
    age: 34,
    address:{
        city:"New York",
        Country:"USA"
    }
}

// to check if obj has name property
//1. in obj 
console.log("name" in obj);                        // true
console.log("hobby" in obj);                        // false

//2. if...else
// if(obj.name) return console.log("True");
// if(obj.hobby) return console.log("False");              // why False is not printing ?  ------------>

//Because return keyword is in top-level code , it basically halts execution of the script.So the second if never runs.

// correct code of if..else
if(obj.name)  console.log("True");
if(obj.hobby) console.log("False");            // nothing here because obj.hobby is undefined, which is falsy


//3. hasOwnProperty
console.log(obj.hasOwnProperty("name"))                            // true

//4. hasOwn (Since ES2022, there’s a shorter static method:)
console.log(Object.hasOwn(obj,"name"))                            // true
    

