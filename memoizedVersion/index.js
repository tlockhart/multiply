const Mult = require('./library/Mult');

const myMult1 = new Mult();
let arg1 = 0;
let arg2 = 1;

// const result = myMult1.memoize(myMult1.slowMultiply);
multiply = myMult1.memoize(myMult1.multiply);

// NOTE: Pass in the arguments to the slowMult method, via anonymous function in memoize method.
// console.log('multiply(0 , 1) = ', result(arg1, arg2));
console.log('multiply(0 , 1) = ', multiply(arg1, arg2));