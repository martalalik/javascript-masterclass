import '../assets/css/style.css';

// --------------------------------------------------------------
// Functional Programming
// --------------------------------------------------------------

// Immutable vs Mutable Concepts

// IMMUTABLE
// - Means that, something CANNOT be modified after it is created.
// - This promotes predictable state changes, and it makes those irritating hard to find bugs go away.
// - Re-assigning is not immutability.

// let - CAN RE-ASSIGNING
let a  = 'Super Burger';
console.log(a); // Super Burger
a = 'Big Slurp'; // this is RE-ASSIGNING a value of a string to a new string.
console.log(a); // Big Slurp

// const -> CANNOT RE-ASSIGNING something. When something is an object, we CAN RE-ASSIGNING; this also applies for nested objects.
const b = a.slice(0, 1); // when we call slice() method on 'a', JS is spinning up a new string.
console.log(a, b); // Big Slurp B

const x = { id: '🍟', name: 'Jumbo Fries', price: 199 }; // by using const here to hold a value of the object, it means we cannot re-assign it.
console.log(x); // {id: '🍟', name: 'Jumbo Fries', price: 199}
// - using const doesn't guarantee that things will be immutable.
x.id = '😎';
console.log(x); // {id: '😎', name: 'Jumbo Fries', price: 199} -> here we mutated the constant.

// To make an object immutable, JS introduced Object.freeze
// - Object.freeze -> 100% a read only object. Works only on top lever, won't work for nested objects.
const y = Object.freeze({ id: '🍟', name: 'Jumbo Fries', price: 199 });
console.log(y); // {id: '🍟', name: 'Jumbo Fries', price: 199}
// y.id = '😎';
// console.log(y); // error -> Cannot assign to read only property 'id' of object '#<Object>'
