const Mult = require('./library/Mult');
test('Mult class exists', () => {
    expect(Mult).toBeDefined();
  });

test('multiply method handles two positive integers as inputs', () => {
  

  let myMult1 = new Mult();
  multiply = myMult1.memoize(myMult1.multiply);
  expect(multiply(5, 3)).toEqual(15);

  let myMult2 = new Mult();
  multiply = myMult2.memoize(myMult2.multiply);
  expect(multiply(6, 10)).toEqual(60);

  let myMult3 = new Mult();
  multiply = myMult3.memoize(myMult3.multiply);
  expect(multiply(5, 3)).toEqual(15);
  
  let myMult4 = new Mult();
  multiply = myMult4.memoize(myMult4.multiply);
  expect(multiply(150, 10)).toEqual(1500);
});

test('multiply method handles two negative integers as inputs', () => {
  
  
  let myMult1 = new Mult();
  multiply = myMult1.memoize(myMult1.multiply);
  expect(multiply(-5, -3)).toEqual(15);

  let myMult2 = new Mult();
  multiply = myMult2.memoize(myMult2.multiply);
  expect(multiply(-6, -10)).toEqual(60);

  let myMult3 = new Mult();
  multiply = myMult3.memoize(myMult3.multiply);
  expect(multiply(-150, -10)).toEqual(1500);
});

test('multiply method handles one negative and one positive integer as inputs', () => {
  

  let myMult1 = new Mult();
  multiply = myMult1.memoize(myMult1.multiply);
  expect(multiply(3, -4)).toEqual(-12);

  let myMult2 = new Mult();
  multiply = myMult2.memoize(myMult2.multiply);
  expect(multiply(-3, 4)).toEqual(-12);

  let myMult3 = new Mult();
  multiply = myMult3.memoize(myMult3.multiply);
  expect(multiply(150, -10)).toEqual(-1500);

  let myMult4 = new Mult();
  multiply = myMult4.memoize(myMult4.multiply);
  expect(multiply(-150, 10)).toEqual(-1500);
});

test('multiply method handles one or more 1 integer values as input/s', () => {
  let multiply = 0;

  let myMult1 = new Mult();
  multiply = myMult1.memoize(myMult1.multiply);
  expect(multiply(1, -4)).toEqual(-4);

  let myMult2 = new Mult();
  multiply = myMult2.memoize(myMult2.multiply);
  expect(multiply(-4, 1)).toEqual(-4);

  let myMult3 = new Mult();
  multiply = myMult3.memoize(myMult3.multiply);
  expect(multiply(1, 4)).toEqual(4);

  let myMult4 = new Mult();
  multiply = myMult4.memoize(myMult4.multiply);
  expect(multiply(4, 1)).toEqual(4);

  let myMult5 = new Mult();
  multiply = myMult5.memoize(myMult5.multiply);
  expect(multiply(1, 0)).toEqual(0);

  let myMult6 = new Mult();
  multiply = myMult6.memoize(myMult6.multiply);
  expect(multiply(0, 1)).toEqual(0);
});

test('multiply method handles one or more 0 integer values as an input/s', () => {
  

  let myMult1 = new Mult();
  multiply = myMult1.memoize(myMult1.multiply);
  expect(multiply(0, 4)).toEqual(0);

  let myMult2 = new Mult();
  multiply = myMult2.memoize(myMult2.multiply);
  expect(multiply(4, 0)).toEqual(0);

  let myMult3 = new Mult();
  multiply = myMult3.memoize(myMult3.multiply);
  expect(multiply(-4, 0)).toEqual(0);

  let myMult4 = new Mult();
  multiply = myMult4.memoize(myMult4.multiply);
  expect(multiply(0, -4)).toEqual(0);

  let myMult5 = new Mult();
  multiply = myMult5.memoize(myMult5.multiply);
  expect(multiply(0, 0)).toEqual(0);
});