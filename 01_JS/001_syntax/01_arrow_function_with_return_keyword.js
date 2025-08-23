//
// 1. Arrow function syntax refresher
// Arrow functions can be written in two main ways:
// ✅ Concise body (no curly braces)
const fun = (a, b) => a + b;
console.log(fun(1,1));

// No {}.
// The expression after => is automatically returned.
// Equivalent to:
const fun2 = (a,b) => {return a + b}  
console.log(fun2(1,1));

// With {}, you must explicitly use return to send a value back.
// If you omit return, the function will return undefined.               ---------------------------- imp.





// some Cases
const arr = [ 1,2,3,4]

// Case A:
const filteredArr = arr.filter((n) => n % 2 === 0 )
console.log(filteredArr);                                // [2,4]      ✅


// case B: 
const filteredArr2 = arr.filter((n) => {return  n % 2 === 0 })
console.log(filteredArr2);                               // [2,4]      ✅
//✔ Correct.
// Uses block body {}.
// return is required.
// This keeps only even numbers → [2, 4].



// case c:
const filteredArr3 = arr.filter((n) => {n % 2 === 0 })                     // ❌
console.log(filteredArr3);                                  

// ❌ Wrong / misleading.
// You used {}, so now it’s a block body.
// (n % 2 === 0); is just a statement that evaluates then does nothing.
// No return, so the function returns undefined every time.
// filter sees undefined (falsy), so result is always [].


// case D:
const filteredArr4 = arr.filter((n,i) =>  return (n % 2 === 0); )         // ❌
console.log(filteredArr4); 

//❌ Syntax Error.

// You can’t write return directly in a concise body (without {}).
// Because return is only valid inside a block body {}.
// JavaScript parser will throw:
// SyntaxError: Unexpected token 'return'.
