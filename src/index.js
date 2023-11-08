import '../assets/css/style.css';

// --------------------------------------------------------------
// Functional Programming
// --------------------------------------------------------------

// Function Composition and Currying
// compose from RIGHT to LEFT

const curry = (fn) => {
  return (...args) => {
    if(args.length >= fn.length) {
      return fn.apply(null, args);
    }
    return fn.bind(null, ...args);
  }
};

//  FUNCTION COMPOSITION
// - We use function composition to BUILD a CHAIN of EVENTS. Performing each operation in stages. map() or join() aren't going to call until split() has finished, 1split(), 2map(), 3join(), functions will execute in this order.

// - we want to turn slugify to SLUG -> 'ultimate-courses'. Typically, we would slugify some text to turn into, perhaps a URL.
// - join( separator?: string ): string -> joining each element in an array, with whatever we pass in.
// const slugify = 'Ultimate Courses'
//     .split(' ')
//     .map((x) => x.toLowerCase())
//     .join('-'); // this is a more functional programming approach here. However, these are just things that are built into JS. They don't allow us to expand and use lots of different functions to accomplish different tasks.
// console.log(slugify); // ultimate-courses

// - Instead of using the build inn split(), map() and join(), it's typically that we use functional programming libs such as RAMDA, or LODASH.
// - Creating my own function, for this we need curry(), because we gonna curry each function, so that we can partly apply it in a series of events.
// - Creating a split function with a 'separator', which is then going to return a new function, which gives a 'string', which that 'string' can be called with the split() and then we pass 'separator'.
// - We're not doing a true partial application because we haven't curried the function.
// const split = (separator) => (string) => string.split(separator); // LAMBDA EXPRESSION -> nice arrow function, oneliner. It's also using a CLOSURE, because we have to call it twice.
// console.log(split(' ')('Ultimate Courses')); // ['Ultimate', 'Courses']

// - Creating utility functions to demonstrate composition and currying
// - Curring will allow us to add partial application behavior.
// - Now we have a fully curried function, that is nice and easy to read
const split = curry((separator, string) => string.split(separator));
const join = curry((separator, string) => string.join(separator));
const map = curry((fn, array) => array.map(fn)); // apply a transformation to every single element inside the array.

// This would be typically behavior while developing applications; creating variables, and then we can pass them into other functions.
// - But this is not the best approach, because we need to understand what those all functions do.
const splitText = split(' ')('Ultimate Courses');
const mappedText = map((x) =>  x.toLowerCase())(splitText);
const joinedText = join('-')(mappedText);
console.log(joinedText); // ultimate-courses

// Makes things as a pure JS
const joinedText2 = join('-')(
    map((x) => x.toLowerCase())(
        split(' ')('Ultimate Courses')));
console.log(joinedText2); // ultimate-courses

// Making toLowercase function
const toLowerCase = (x) => x.toLowerCase();
const joinedText3 = join('-')(map(toLowerCase)(split(' ')('Ultimate Courses'))); // this is not very readable. We are limited here because we hardcoded a string 'Ultimate Courses'.
console.log(joinedText3); // ultimate-courses

// Better reusability
// - We moved the data outside the function.
// - slugify is a small program made up of few functions that we composed together, is now passing each result into the next function. And this is how can think about our functional programming.
const slugify2 = (str) => join('-')(map(toLowerCase)(split(' ')(str)));
console.log(slugify2('Ultimate Courses')); // ultimate-courses

// - Composing simpler slugify.
// - We will pass all functions, step by step, for the path to follow.
// - But we have to do it BACKWARDS
// - What happens here: we have created compose() function.
// - This is a better way to compose functions.
// - compose functions run from RIGHT to LEFT!!!
// - creating compose function:
const compose = (...fns) => (x) => console.log(x) || fns.reduceRight((value, fn) => fn(value), x);
// - console.log(x) -> Ultimate JavaScript
// - 'x' -> INITIAL VALUE
// - initial value is important because it will be passed to 'value'
// - fn(value) -> this will run everytime there is a new function in slugify -> join, map, split
// - and because we're PARTIALLY applying these upfront, they all get called SEQUENTIALLY IN ORDER at the right times, using our function closures.
const slugify3 = compose(
    join('-'),
    map(toLowerCase),
    split(' ') //partial applying!!! Nothing happens here before slugify won't be called. Returning composer, a function
);
console.log(slugify3('Ultimate JavaScript')); // ultimate-javascript -> by calling slugify3 we kick off all functions inside composer

// We can do also like this, to return only a result, without calling a function and passing argument. But this won't be reusable!
const slugify4 = compose(
    join('-'),
    map(toLowerCase),
    split(' ')
)('Ultimate JavaScript');
console.log(slugify4); // ultimate-javascript