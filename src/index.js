import '../assets/css/style.css';

// --------------------------------------------------------------
// Functional Programming
// --------------------------------------------------------------

// Imperative vs Declarative Programming

// - Technically things are imperative from the get go. Previously in JS we would only write imperative style code.

const items = Object.freeze([
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
]);
console.log(items); // (3)[{…}, {…}, {…}]

// IMPERATIVE - it is a LIST of INSTRUCTIONS how to achieve it. The end result doesn't matter. It's the STYLE of the CODE that we write. Describing WHAT.
const itemNamesImperative = [];
for (let i = 0; i< items.length; i++) { // iterating indexes
  const item = items[i]; // calculating how to access each item
  itemNamesImperative.push(item.name);
}
console.log(itemNamesImperative); // ['Super Burger', 'Jumbo Fries', 'Big Slurp']

// DECLARATIVE - programing with declaration via sentences. Describing HOW.
// with map() - described what is happening it doesn't mutate any state.
// CHAINING technique - is when prototype methods are changing.
// Here we're getting a new array.
const itemTotalDeclarative = items
    .map((item) => item.price)
    .reduce((price, nextPrice) => price + nextPrice); // chaining
console.log(itemTotalDeclarative); // 897

console.log(items); // (3)[{…}, {…}, {…}]
