import '../assets/css/style.css';

// --------------------------------------------------------------
// Functional Programming
// --------------------------------------------------------------

// Lambda Expressions vs Anonymous Functions

// - In JS functions can be used as data, because they are also first-class citizens, which means that they can also DECLARED as a VALUE!!! Such as being ASSIGNED to a VARIABLE!!!
// - EXPRESSION -> is assigned to a variable.

const items = Object.freeze([
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
]);
console.log(items); // (3)[{…}, {…}, {…}]

// NORMAL FUNCTION / FUNCTION DECLARATION
function getItemName(item) {
  return item.name
}
console.log(items.map(getItemName)); // ['Super Burger', 'Jumbo Fries', 'Big Slurp'] -> passing getItemName function in as a value!!!

// LAMBDA EXPRESSIONS
// - get bound to a variable
// - we are passing the value of the function to be used as data elsewhere in the app. We are not calling getItemNameExp function directly, we are simply passing it as an argument into another function.
// - Typically we will use lambda functions/expressions to compose more complex functions in functional programing paradigm.
const getItemNameExp = (item) => item.name;
console.log(items.map(getItemNameExp)); // ['Super Burger', 'Jumbo Fries', 'Big Slurp'] -> getItemNameExp function passed as an argument.

// FUNCTION EXPRESSION -> by assigning getItemName function as a value.
// const getItemNameExpression = function getItemName(item) {
//   return item.name
// }

// FUNCTION CALLBACK -> directly called function
// + ANONYMOUS FUNCTION ->
// - function doesn't have a name,
// cannot be accessed after it is created, we cannot reference this function variable anywhere.
// console.log(items.map(function (item) {
//   return item.name
// }));



