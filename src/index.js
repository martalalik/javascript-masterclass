import '../assets/css/style.css';

// --------------------------------------------------------------
// Functional Programming
// --------------------------------------------------------------

// Higher-Order Functions HOF

// - HOF has 2 characteristics
// - 1. RETURNS new FUNCTION -> (items) => items.find((item) => item.id === id).name;
// - 2. Is a function that can take other functions as an arguments -> find()

// - Functions in JS are FIRST-CLASS CITIZENS -> it's a VALUE, which means it can be assigned to a variable, or it can be passed as a value.
// - PASSING as a value -> (item) => item.id === id
// - ASSIGNING as a value -> (id) => (items) => items.find((item) => item.id === id).name to a variable -> const getNameFromId

// BENEFITS of using HOF
// - allows writing more simple and readable code.
// - it is a nice abstraction that can be used through composition -> when we want to compose more complex software.

const items = Object.freeze([
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
]);
console.log(items); // (3)[{…}, {…}, {…}]

// This is often called: CALLBACK FUNCTION, is because it is called back by the HOF. So the find() is in charge of invoking this; we are just supply it.
const getNameFromId = (id) => (items) => items.find((item) => item.id === id).name;

const getFries = getNameFromId('🍟');
const getBurger = getNameFromId('🍔');

console.log(getFries(items)); // Jumbo Fries
console.log(getBurger(items)); // Super Burger

