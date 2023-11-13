import '../assets/css/style.css';

// --------------------------------------------------------------
// Functional Programming
// --------------------------------------------------------------

// Function Pipes and Currying

// COMPOSE FUNCTION
// - compose from RIGHT to LEFT

// PIPE FUNCTION
// - compose from LEFT to RIGHT
// - this technic is chosen over composing

// PIPE function
const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

// CURRY function
const curry = (fn) => {
  return (...args) => {
    if(args.length >= fn.length) {
      return fn.apply(null, args);
    }
    return fn.bind(null, ...args);
  }
};

//
const split = curry((separator, string) => string.split(separator));
const join = curry((separator, string) => string.join(separator));
const map = curry((fn, array) => array.map(fn));

const toLowerCase = (x) => x.toLowerCase();

// RXJS -> it is REACTIVE FUNCTIONAL PROGRAMMING -> reactive extension for JS. There is a build in pipe function in RXJS, which behaves in pretty much the exact same way; we can import pure functions form RXJS and perform the same logical operations on them.

// SLUG function
const slugify = pipe(split(' '), map(toLowerCase), join('-'));

console.log(slugify('Ultimate Courses')); // ultimate-courses
