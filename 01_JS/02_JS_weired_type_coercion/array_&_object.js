// ✅ These are clear and expected:

if ({}) console.log("Empty object is truthy");
if ([]) console.log("Empty array is truthy");
// ✅ Why?
// Because empty object {} and empty array [] are truthy values in JavaScript.

// Now let's dive into the strange part...

// 🤔 What's up with comparisons?

// 🔍 Case 1:
console.log([] == true); // ❗ false

// 🔍 Case 2:
console.log([] == false); // ❗ true

// 🔍 Case 3:
console.log({} == false); // ❗ false

// Let's explore why each gives what it does.


// 🔍 JavaScript Coercion Rules
// When using == (loose equality), JS tries to convert types to match. Let's explore how:

/*
✅ [] == false → true (😵 Why?)
Here’s how JavaScript evaluates this step-by-step:

[] == false
false is a boolean, and [] is an object.

When comparing object and boolean, JS converts both to numbers:

[] → "" (empty string via toString)
"" → 0
false → 0
Final comparison: 0 == 0 → ✅ true
So [] == false returns true.
*/


/*
✅ [] == true → false

[] == true
[] → "" → 0

true → 1

So: 0 == 1 → ❌ false
*/

/*
❌ {} == false → false

{} == false
This one is tricky because:

{} is an object.

It doesn’t convert nicely into a primitive like [] does.

Objects can't be directly coerced to primitive numbers like [] can.

{}.toString() → "[object Object]" → Not a number.

So: "[object Object]" == false → ❌ false
*/


/*
🔒 === comparisons (strict equality)

[] === false         // false
{} === false         // false

This is straightforward:
No type conversion.

Array or object is not the same type or value as boolean false.
*/

//Summary------------------------------------------------------------------------------------------

// | Expression     | Result   | Why                                   |
// | -------------- | -------  | ------------------------------------- |
// | `[] == false`  | ✅ true  | `[] → "" → 0`, `false → 0` → `0 == 0` |
// | `[] == true`   | ❌ false | `[] → "" → 0`, `true → 1` → `0 == 1`  |
// | `{}` == false  | ❌ false | Object doesn't coerce to 0            |
// | `[] === false` | ❌ false | Strict type check – array ≠ boolean   |
// | `{}` === false | ❌ false | Same – object ≠ boolean               |
