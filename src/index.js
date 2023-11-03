import '../assets/css/style.css';

// --------------------------------------------------------------
// Functional Programming
// --------------------------------------------------------------

// Pure Functions and Referential Transparency

// PURE FUNCTIONS
// - passing arguments instead referencing it!!!
// - it can be used many times, and it will give the same output
// 1. (rule) REFERENTIAL TRANSPARENCY
// - function ONLY DEPENDS on its INPUT!!! Given the same input, it will return the same output.
// - function cannot depend on any mutable state or any state inside the function or reference, any state outside the function. Keeping things PURE.
// 2. (rule) SIDE-EFFECT FREE
// - side effects include console log, reassigning a variable, mutating an array form outside function, mutating an object, injecting things into the DOM. All this has a side effect.
// - the side effect begin it has a knock-on effect, after that fashion is called something else happens because of that function call.

const items = Object.freeze([
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
]);
console.log(items); // (3)[{…}, {…}, {…}]

// IMPURE FUNCTION
// - involves referencing variables and things elsewhere, and function becomes much more DIFFICULT to REUSE, to TEST!!!
// const getTotalImpure = () => {
//   // this is a side effect, running a console.log
//   // by default this is an impure function, because items.reduce lives inside a console.log
//   // console.log(items.reduce((x, y) => x + y.price, 0)); // 897 -> here we use LAMBDA EXPRESSION fat arrow function
//
//   // no console.log
//   // making things more impure with document.query selectorSelector()
//   document.querySelector('#app').innerHTML = items.reduce(
//       (x, y) => x + y.price, 0);
// }; // we are getting 897 printed in the DOM, the number war injected to the DOM, referencing variable of items. We are not passing it as an argument. Which makes function impure.
// getTotalImpure();

// PURE FUNCTIONS
// console.log(v) || -> new feature in JS for an arrow function to see the passed argument.
const getTotalPure = (v) => console.log(v) || v.reduce((x, y) => x + y.price, 0); // this is 100% pure and it is also a LAMBDA EXPRESSION
// to make DOM manipulation is best to do it outside the function
document.querySelector('#app').innerHTML = `<h1>${getTotalPure(items)}</h1>`; // 897 getting value printed in DOM.
// because we're returning a reduced value here, we can use console.log.
console.log(getTotalPure(items)); // 897


