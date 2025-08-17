// First-Class Functions vs Higher-Order Functions


/*🎓 1. First-Class Functions
Definition: This is a property of the language itself.

Meaning: Functions are treated like any other value — they can be stored, passed around, returned, etc.

Analogy:
Functions are like normal citizens in a country — they can drive, vote, pay taxes, open bank accounts. */

//example:-
const greet =  function(){
  console.log("Hello!");
}

const func = [greet]   // stored in array
func[0]()                        // output: - Hello!

// Explanation:- 👉 Here, the function is first-class because we treat it like data.
// But it’s not higher-order, since it doesn’t take or return another function.

// ✅ First-class is about the rights functions have.



/* 🧑‍🍳 2. Higher-Order Functions

Definition: A function that either:
Takes another function as an argument, OR
Returns another function.

Analogy:
Think of a chef 👨‍🍳 (the higher-order function) who accepts a recipe (function) as input or hands you a new recipe (function) as output.

Example:-   */

function multiplier(x){
   return function (y){
    return x * y
   }
}
const double = multiplier(5)
console.log(double(2));               //10

// 👉 This is higher-order, because it uses other functions.
// It’s possible only because functions are first-class in JS.

//✅ Higher-order is about how we use functions inside other functions.



/*🎯 The Key Difference
First-class functions → The status: functions are values, just like numbers or strings.

Higher-order functions → The behavior: functions that use other functions (because functions are first-class).

🕹️ Simple Relationship
👉 Without first-class functions, you can’t have higher-order functions.
But having first-class functions doesn’t automatically mean you wrote a higher-order one.

💡 Think of it like this:

First-class function = “Functions are citizens.”

Higher-order function = “Some citizens (functions) are bosses — they hire, fire, and promote other citizens (functions).”
*/

//  So in conclusion :- All higher-order-function are first-class function but not all first-class-functions are  higher-order function

// It’s like:

// Everyone is a citizen (first-class) 👩‍🦱
// But not every citizen is a manager/boss (higher-order) 👩‍💼








