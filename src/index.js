import '../assets/css/style.css';

// --------------------------------------------------------------
// Functional Programming
// --------------------------------------------------------------

// Immutable Data Structures

const items = [
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
];
console.log(items); // (3)[{…}, {…}, {…}]

// [] - adding element
const newItem = { id: '🌭', name: 'Posh Dog', price: 299 };

// MUTABLE
// items.push(newItem); // mutation is created on the data structure, by adding a new element to the array.
// console.log(items); // [{…}, {…}, {…}, {…}] -> an original array is mutated

// In Functional Programming, we want to keep everything immutable.
// Instead using push(), we will construct a new array.
// IMMUTABLE
const newItems = [...items, newItem]; // creating a new array, by coping ...items and adding a newItem
console.log(newItems); // (4)[{…}, {…}, {…}, {…}] - with a new element 🌭
console.log(items); // (3)[{…}, {…}, {…}] - an original array is untouched

// [] - removing element
// MUTABLE
// const removed = items.splice(0, 1);
// console.log(removed); // {id: '🍔', name: 'Super Burger', price: 399}
// console.log(items); // (2)[{…}, {…}] -> an original array is mutated

// IMMUTABLE
const updatedItems = items.filter((item) => item.id !== '🍔') // filter() returns a new array, so it is immutable way
console.log(updatedItems); // (2)[{…}, {…}] - a new array without 🍔 element
console.log(items); // (3)[{…}, {…}, {…}] - an original array is untouched

// {} - adding element
const item = { id: '🌭', name: 'Posh Dog' };

// MUTABLE
// item.price = 299; // mutating an object
// console.log(item); // {id: '🌭', name: 'Posh Dog', price: 299} -> an original array is mutated

// IMMUTABLE
const  newObjectItem = { ...item, price: 299 }; // creating a new object
console.log(newObjectItem); // {id: '🌭', name: 'Posh Dog', price: 299}
console.log(item); // {id: '🌭', name: 'Posh Dog'} -> an original array is untouched

// {} - removing element
// MUTABLE
const itemToRemove = { id: '🌭', name: 'Posh Dog', price: 299 };
// console.log(itemToRemove); // {id: '🌭', name: 'Posh Dog', price: 299}
// delete itemToRemove.price;
// console.log(itemToRemove); // {id: '🌭', name: 'Posh Dog'}

// IMMUTABLE
// destructuring method
// const {price} = itemToRemove;
// console.log(price); // 299
const {price, ...leftOvers} = itemToRemove;
console.log(price, leftOvers); // 299 {id: '🌭', name: 'Posh Dog'}

// IDENTITY - means that no objects in JS are the same
console.log(itemToRemove === itemToRemove); // true -> here we know nothing has changed, so the object is immutable
console.log(itemToRemove === leftOvers); // false -> here we se we got a new array, and they are different. The original array didn't change.
console.log({} === {}); // false
console.log([] === []); // false

// ... spread operator gives SHALLOW COPY!!!, which mean that any nested object will still be referenced.