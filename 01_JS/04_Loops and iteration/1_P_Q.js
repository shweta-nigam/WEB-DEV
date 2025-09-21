// 19th sep 2025

// print triangle

function printTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let star = "";
    // console.log("when i =", i);
    for (let j = 1; j <= i; j++) {
      star += "*"; // to attach something at the end of the string we use +=
    }
    console.log(star);
  }
}

printTriangle(3);

//practice again


function printTriangle2(n) {
  for (let i = 1; i <= n; i++) {
    let star = "";
    console.log("round", i);
    for (let j = 1; j <= i; j++) {
      star += "*";
      console.log("j = ", j, "i = ", i); 
    }
    console.log(star);
  }
}

printTriangle2(3)


//notes
// 🔹 How to remember the difference:
// ✅ += → “pluses it up” (add to itself).
// ❌ =+ → looks weird → “equals positive” (just assign as positive number).
// Another trick:
// If the + is before the =, it’s an operation.
// If the + is after the =, it’s just a sign.