import '../assets/css/style.css';

// --------------------------------------------------------------
// Functional Programming
// --------------------------------------------------------------

// Recursion
// - It is far better and faster at calculating different problems, and gives a slightly cleaner solution than using a loop.

// RECURSIVE FUNCTION
// - a function that can CALL ITSELF.
// - is typically USED for ITERATING over an operation using a function that repeatedly calls itself into, until it gives a final result, it's kind of a loop that can be replaced with RECURSIVE FUNCTION.
// - is typically USED when we need to CALL THE SAME FUNCTION REPEATEDLY, and we want to PASS DIFFERENT PARAMETERS into the function each time. This could be iterating down branches or a data structure for SORTING DATA STRUCTURES, or some kind of MATH OPERATIONS.
// - are PURE FUNCTIONS.

// FACTORIAL (silnia !)
// - calculating the FACTORIAL of a number:
// 3 x 2 x 1 = 6 = (3!)

// Imperative programming
// const factorial = (n) => {
//   let result = 1;
//   for(let count = n; count > 1; count--) {
//     result = result * count;
//   }
//   return result;
// }

// Functional programming
// - Nice thing about recursion is that we don't have to maintain any kind og state.
// - We are using a pure function.
// - n - 1 -> just using simple expression
const factorial = (n) => {
  console.log(n);
  if( n > 1 ) {
    return n * factorial(n - 1) // calling function inside itself
  }
  return 1; // covers: let result = 1;
}
console.log(factorial(3)); // 6

// Lambda Expression
const factorial1 = (n) => (n > 1 ? n * factorial1(n - 1) : 1);
console.log(factorial1(5)); // 6