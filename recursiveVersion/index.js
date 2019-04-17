const Mult = require('./library/mult');

const myMult1 = new Mult();
console.log('multiply(0, 1) = ', myMult1.multiply(0, 1));

const myMult2 = new Mult();
console.log('multiply(0, 4) = ', myMult2.multiply(0, 4));

const myMult3 = new Mult();
console.log('multiply(2, 4) = ', myMult3.multiply(2, 4));

const myMult4 = new Mult();
console.log('multiply(-2, -4) = ', myMult4.multiply(-2, -4));

const myMult5 = new Mult();
console.log('multiply(3, -4) = ', myMult5.multiply(3, -4));

const myMult6 = new Mult();
console.log('multiply(1, 3) = ', myMult6.multiply(1, 3));

const myMult7 = new Mult();
console.log('multiply(-4, 0) = ', myMult7.multiply(-4, 0));

// const myMult8 = new Mult();
// console.log('multiply(5.9, 3.34) = ', myMult8.multiply(5.9, 3.34));