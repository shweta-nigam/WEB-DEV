// 🟢 Easy Level
//1. Age Check
// Ask the user for their age and print "Adult" if they are 18 or older, otherwise print "Minor".

const { use } = require("react");

let age = 4;
console.log(`${age >= 18 ? "Adult" : "Minor"}`);

// lesson:
/**
I tried this
console.log(`${ (age => 18 ) ? "Adult" : "Minor" }`);  // returns "Adult" even if age = 4
why? 
This looks similar, but it's not a comparison.
Instead, I am declaring an arrow function:
age => 18
This is a valid function that ignores the input and always returns 18.
(age => 18) is a truthy value (because functions are always truthy in JS)
So the ternary always picks "Adult"
That’s why it logs "Adult" even though it looks like you’re comparing.
*/

//2. Empty Input
// Check if a user's name input is empty. If so, print "Please enter your name", else greet the user.

let userName = "Nanny";
console.log(userName ? "Hello! " + userName : "Please enter your name");

//3. Even or Odd
// Check if a given number is even or odd and print the result.

let num = 85;
console.log(
  num % 2 === 0 ? num + " is even number" : num + " is an odd number"
);

//4. Simple Login
// Check if the username is "admin" and password is "1234". If both match, print "Login successful", else print "Invalid credentials".

const username = "admin";
const password = "1234";
console.log(
  username === "admin" && password === "1234"
    ? "Login successfully"
    : "Invalid credentials"
);

//5. Temperature Message
// Based on a temperature value, print "Cold" if it's less than 15, "Moderate" if 15–25, and "Hot" if more than 25.

const temperature = 8;
console.log(
  temperature <= 15 ? "Cold" : temperature <= 25 ? "Moderate" : "Hot"
);



// 🟡 Medium Level
//6. Discount Calculator
// If a customer has a coupon, give a 20% discount. If not, check if their cart value is above ₹1000 and give 10% discount. Else, no discount.
const hasCoupon =  false
const cartValue = 400
if(hasCoupon){
 console.log("Eligible for 20% discount!")
}else if (cartValue > 1000){
   console.log("Eligible for 10% discount!")
}else{
  console.log("No discount")
}


//7. Traffic Light Logic
// Print what a driver should do based on the signal color: "red", "yellow", or "green".
let trafficLightColor = "red"
switch (trafficLightColor) {
  case "red":
    console.log("Stop")
    break;
  case "yellow":
    console.log("Slow Down")
    break;
  default:
    console.log("Go")
    break;
}


//8. Movie Ticket Pricing
// Based on age, print ticket prices: Under 13 = ₹100, 13–60 = ₹200, Above 60 = ₹150.
let ageForMovieTickets = 9
if(ageForMovieTickets < 13){
  console.log("Ticket price ₹100")
} else if (ageForMovieTickets < 60){
  console.log("Ticket price ₹200")
} else{
  console.log("Ticket price ₹150")
}

//9. Check User Role
// Print a message based on user role: "admin", "editor", "subscriber", or "guest".
let user = "admin"
switch (user) {
  case "admin":
    console.log("Welcome admin")
    break;
  case "editor":
    console.log("Welcome editor")
    break;
  case "subscriber":
    console.log("Welcome subscriber")
    break;

  default:
    console.log("Welcome guest ")
    break;
}

//10. Truthy/Falsy Login
// Use a conditional to check if the variable username exists and is non-empty. Print "Welcome" or "Missing username".
const usernameExist = " "
if(usernameExist.trim().length === 0){
  console.log("Missing username")
}else{
  console.log("welcome")
}
//lesson:
console.log("".length)   // 0  // falsy
console.log(" ".length)   // 1  //truthy


// 🔴 Hard Level
//11. Nested Authentication
// If a user is logged in, check if they’re an admin. If admin, show "Dashboard". If not, show "User homepage". If not logged in, show "Please log in".

let isUserLoggedIn = true
let isLoggedUser = null
if(isUserLoggedIn){
  if((isLoggedUser || "").trim().toLowerCase() === "admin"){
    console.log("Welcome to Dashboard")
  }else{
     console.log("Welcome to homepage")
  }
}else{
   console.log("Please log in")
}

//12. Smart Grade System
// Convert a score (0–100) into grades:
// 90+ = A, 80–89 = B, 70–79 = C, 60–69 = D, below 60 = F
const score = 500
let grade;
if(score >= 90){
  grade = "A"
} else if (score >= 80){
  grade = "B"
} else if (score >= 70){
  grade = "C"
} else if (score >= 60){
  grade = "D"
} else {
  grade = "F"
}
console.log(grade)

//13. Cart Total and Discount
// If cart total > ₹5000, apply 25% discount. If > ₹2000, apply 15%.
// If the user is a premium member, add 5% more discount on top of that.

const cartTotal = 1000
const isUserPremiumUser = true 
if(cartTotal > 5000 ){
  if(isUserPremiumUser){
  console.log(`Total amount after discount of 25% and 5% on top of that: ${cartTotal - ((cartTotal*25/100) + (cartTotal*25/100)*5/100)} `)
  } else{
    console.log(`Total amount after discount of 25%: ${cartTotal - (cartTotal*25/100)} `)
  }
} else if (cartTotal > 2000){
  if(isUserPremiumUser){
  console.log(`Total amount after discount of 15% and 5% on top of that: ${cartTotal - ((cartTotal*15 / 100) +
    (cartTotal*15 / 100)*5/100)} `)
  } else{
    console.log(`Total amount after discount of 25%: ${cartTotal - (cartTotal*15/100)} `)
  }
} else {
  console.log(`Your Total amount is ${cartTotal}`)
}

//14. Loan Eligibility
// Check if someone qualifies for a loan: age ≥ 21, salary ≥ ₹30,000, and no existing debt.

const ageForLoan = 34
const isInDebt = false
const salary = 60000
if( ageForLoan >= 21 && salary >= 30000 && !isInDebt){
  console.log("Qualified for loan")
 } else {
  console.log(" Not qualified for loan")
}


//15. Password Strength Checker
// Based on a password string:

// If it’s less than 6 characters, say "Too short"
// If it has no numbers, say "Needs a number"
// If it has no special character, say "Add a special character"
// If it passes all, say "Strong password"

const userPassword = "happy90@"
if(userPassword.trim().length < 6){
  console.log("Too short")
}else if(!/\d/.test(userPassword)){
  console.log("Needs a number")
}else if(!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(userPassword)){
  console.log("Add a special character")
}else{
  console.log("Strong password")
}


