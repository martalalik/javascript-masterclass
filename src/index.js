import '../assets/css/style.css';

// --------------------------------------------------------------
// Functional Programming
// --------------------------------------------------------------

// Function Closures

// - A closure is created with each new function that is declared.
// - Closure gives access to the outer function scope even after outer function has return.

const items = Object.freeze([
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
]);
console.log(items); // (3)[{…}, {…}, {…}]

// closure 1
// even we have returned, lifecycle of getNameFromId function is still alive in the program, which mean we have access to id in further functions calls
const getNameFromId = (id) => {
  // console.log(id); // 🍟
  // when: return () => {} -> getNameFromId function is going to return, but we are not doing anything, so the return value of the function call here -> getNameFromId('🍟'); gives a new function!!!
  // closure 2
  return (items) => { // returning a new function
    // in closure2, we have access to all variables from closure1.
    // console.log(id, items); //  🍟 (3)[{…}, {…}, {…}]
    return items.find((item) => item.id === id).name; // .name we want to print only name
  } // this function here is exactly what we have available to us, with getFries.
}

// getNameFromId('🍟');
// now create a new const
const getFries = getNameFromId('🍟'); // call getNameFromId function
// console.log(getFries); // ƒ () {}
// because is a function, we can call ia and pass in items.
// console.log(getFries(items)); // when: return () => {} -> undefined - there is no response form getFries, because we are not returning anything -> return () => {} -> empty return // calling return () => {} function here
// console.log(getFries(items)); // when: return (items) => {return items.find((item) => item.id === id) -> {id: '🍟', name: 'Jumbo Fries', price: 199}
console.log(getFries(items)); // when: return (items) => {return items.find((item) => item.id === id).name -> Jumbo Fries

// HIGHER ORDER FUNCTION
// - getNameFromId is acting as higher order function because it returns a new function.
// - we could now reuse getFries function and passing different arrays. This is how pure functions and closure work.

// just to show how it looks without description and refactored to lambda expression.
const getNameFromIdCopy = (id) => (items) => items.find((item) => item.id === id).name; // getting oneliner and proper lambda expression. We call it lambda expression because it doesn't have a name, which means things are created anonymously, and we have an expression within a function closure.
// reusability of getNameFromIdCopy function
const getBurger = getNameFromIdCopy('🍔');
const getSlurp = getNameFromIdCopy('🥤');
console.log(getBurger(items)); // Super Burger
console.log(getSlurp(items)); // Big Slurp
