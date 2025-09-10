// 10th September 2025
// Triangle shapes

// 👉 Write a JavaScript program that takes a number (say 5) and prints a triangle pattern like this:

// *
// **
// ***
// ****
// *****

function printTriangle(n) {
  let row = "";
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

printTriangle(4);
// console.log(printTriangle(4));
