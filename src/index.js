import '../assets/css/style.css';

// --------------------------------------------------------------
// Functional Programming
// --------------------------------------------------------------

// Currying and Partial Application

const items = Object.freeze([
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
]);
console.log(items); // (3)[{…}, {…}, {…}]

// CURRING
// const curry = () => {};
// - Wrapping f() in curry() function.
// curry(f(a, b, c));
// - curry() is a HOF(higher order function) which allows to transform f() so that there is no need to call it as 'a,b,c'. This argument can be called one by one:
// f(a)(b)(c)
// - Is an advanced technic.
// - It doesn't call a function, it TRANSFORMS it when we carry something.
// - It would allow to call f() and pass the first argument 'a'.
// - f() would then returns as a new function; that we could apply the next argument too. That is why we learn about closure.
// - As a typical function we call it at once, and we pass in a few arguments; where in functional programming is CURRING a function, like so f(a)(b)(c), and it would transform it into the ability to be able to call it sequentially one after the other. This is CARRYING!!!
// - Even though we're transforming from f(a, b, c) to f(a)(b)(c), we can still call it the original way, so currying allows taking an existing function, we can curry it, and then we can call it in the normal way.

// - curry() function, something similar will be found in lib like RAMDA or LODASH
const curry = (fn) => {
  return (...args) => {
    // adjusting for getNameFromId('🍟', items); to be able to call function normal way
    if(args.length >= fn.length) {
      console.log(args.length, fn.length); // 2 2 -> this will show only on getNameFromId('🍟', items), because we have two arguments passed in as one.
      // instead of returning fn.bind(); because we're calling the function normally, is to execute it.
      return fn.apply(null, args); // with apply() expects an array apply(context, [a, b,c])
    }
    return fn.bind(null, ...args); // it is important that fn.bind() expects: bind(context -> which is specified as 'null', list of arguments -> this means that, we have to comma(,) separate all of our function arguments like so: a,b,c)(context, a, b, c), which is why we are taking args array and then spreading it into comma(,) to separate them.
  }
};
// - the main difference between apply() & bind()
// - bind() -> will return a new function, which will have the context and the args BOUND to it.
// - apply() -> will execute the function like so: fn(args). But by using apply(), we are EXPLICIT SETTING value of the function to 'null'.

// 1. Transform from (id) => (items) to (id, items)
// 2. Wrap it in curry()
const getNameFromId = curry(
    (id, items) => items.find((item) => item.id === id).name
); // now we have CURRIED FUNCTION. This allows us to compose and write function in "normal function style", so now we have just an id and items; things are more readable.
// - Using curry() transforms the function for us.

// - After transforming normal function to a currying function, we can call for id and items separately like so...
// const getFries = getNameFromId('🍟');
// const getBurger = getNameFromId('🍔');

// - ...or together
// 1. First adjusting curry()
// - calling 'items' here we are EXECUTING getNameFromId() IMMEDIATELY!!!
const getFries = getNameFromId('🍟', items);
const getBurger = getNameFromId('🍔')(items); // so the first function call is going to return a new function, which when we then call it is set up to receive the ...args from the first function, so it then passes them into (id, items) and calls them both at the same time. getNameFromId() function isn't executing this (id, items) => items.find((item) => item.id === id).name piece of code entirely. It's executing curry() function, which is almost catching function in the closure. And then, when the closure returns, and we call it again, it's then taking that initial function (fn) =>, and it's binding it for us with argument items.
// - FUNCTION EXECUTION
// - There is a massive difference in how they execute (a,b) or (a)(b)
// - Both achieve exactly the same thing.
// - getNameFromId('🍟', items) -> this is called in the normal style.
// - getNameFromId('🍔')(items) -> the second function call has been curried, and we are then sequentially passing in those function arguments, and it might be that we have more arguments like so: getNameFromId('🍔')(items)()()(), and our curry() will continue as is. Of course, for each argument we would need another argument to be accepted in getNameFromId() function as well.

// - The idea of curring allows us to call the function in the normal way, so we need to adjust curry() for getFries.
// - So, we know that by calling the function normally it's going to execute the first block with if, because the args.length is in fact >= to the fn.length.
console.log(getFries); // shows getNameFromId body -> calling the RESULTS of a function when we don't use ().
// after refactoring curry() console will print 'Jumbo Fries'.
console.log(getBurger); // Super Burger -> calling the RESULTS of a function when we don't use ().

// PARTIAL APPLICATION
// - first we had 'items' called on getFries(items) function, so we were using getNameFromId(), which is acting as HOF -> const getFries = getNameFromId('🍟'); // like so. This we call PARTIALLY APPLYING parts of curry(). We do not call this immediately.
const getSlurp = getNameFromId('🥤'); // partially applying
console.log(getSlurp(items)); // Big Slurp -> calling for items later


