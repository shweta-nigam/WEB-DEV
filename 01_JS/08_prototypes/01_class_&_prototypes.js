// 30th August 2025

class Person{
constructor(fName,lName){
    this.firstName = fName
    this.lastName = lName

    console.log(this.getFullName());           // this is possible. it will print full name as soon as a new object is created.  
    this.isActive = false
    
}

getFullName(){
    return `${this.firstName} ${this.lastName}`
}
}



const p1 = new Person("John", "Write")
console.log(p1);                           // Person { firstName: 'John', lastName: 'Write' }
console.log(p1.getFullName());             // John Write
console.log(p1.firstName);                 // John 

console.log(p1.isActive);                  // false
