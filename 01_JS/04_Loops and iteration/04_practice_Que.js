// 1st September 2025
// Problem:
// Write a program in JavaScript that prints the following spiral matrix pattern using loops.

// 👉 Input: n = 4
// 👉 Output:

// 1   2   3   4
// 12  13  14  5
// 11  16  15  6
// 10   9   8  7

// 👉 Input: n = 5
// 👉 Output:

// 1   2   3   4   5
// 16  17  18  19   6
// 15  24  25  20   7
// 14  23  22  21   8
// 13  12  11  10   9

// 🧠 Why this question?

// You’ll practice nested loops.
// You’ll learn how to control direction (right, down, left, up).
// It improves your logic-building ability because the challenge is not just looping, but deciding when to turn.

// 🔎 Hints (don’t jump to solution yet!)
// Think of the matrix as layers (outer → inner).
// You need 4 directions: → ↓ ← ↑, and you cycle through them.
// Use boundaries (top, bottom, left, right) to decide when to switch direction.

// ⚡ My advice for logic building:

// Don’t rush into coding. First, take paper and draw the steps.
// Try smaller inputs (n=2, n=3) manually.
// Write pseudo-code in words before actual JavaScript.
// Break the problem:
// (a) Fill top row → (b) Fill right column → (c) Fill bottom row → (d) Fill left column → Repeat.

// -------------------------------------------

// step 1:-
//let's try with simple print to right direction equal to n:
// loop starts with 1 and print numbers equal to n

// function one(n) {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(i);
//   }
//   return result;
// }

// console.log(one(4)); // [ 1, 2, 3, 4 ]

//step 2:-
// print the number in down direction from last number of right direction.

// function one(n) {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(i);
//     for (let j = n; j <= n + i; j++) {
//       result.push(j);
//     }
//   }

//   return result;
// }

// console.log(one(4));



// ---- upper steps don't work for matrix array

function spiralMatrix(n){
  let matrix = Array.from({length:n}, ()=> Array(n).fill(0))

  let top = 0; let bottom = n - 1;
  let left = 0; let right = n - 1;
  let num = 1;

  while(top <= bottom && left <= right ){
    //left to right
    for(let i = left; i <= right; i++ ){
      matrix[top][i] = num++
    }
    top++;

    // top to bottom
    for(let i = top; i <= bottom; i++){
    matrix[i][right] = num++
    }

    right--;

    //right to left
    for(let i = right; i >= left; i--){
      matrix[bottom][i] = num++
    }
bottom--;

//bottom to top
for(let i = bottom; i >= top; i--){
  matrix[i][left] = num++
}
left++
  }

  return matrix

}

console.log(spiralMatrix(4))