const Mult = require('./library/Mult');
test('Mult class exists', () => {
    expect(Mult).toBeDefined();
  });

test('multiply method handles two positive integers as inputs', () => {
  let product;

  let myMult1 = new Mult();
  product = myMult1.memoize(myMult1.slowMultiply);
  expect(product(5, 3)).toEqual(15);

  let myMult2 = new Mult();
  product = myMult2.memoize(myMult2.slowMultiply);
  expect(product(6, 10)).toEqual(60);

  let myMult3 = new Mult();
  product = myMult3.memoize(myMult3.slowMultiply);
  expect(product(5, 3)).toEqual(15);
  
  let myMult4 = new Mult();
  product = myMult4.memoize(myMult4.slowMultiply);
  expect(product(150, 10)).toEqual(1500);
});

test('multiply method handles two negative integers as inputs', () => {
  let product;
  
  let myMult1 = new Mult();
  product = myMult1.memoize(myMult1.slowMultiply);
  expect(product(-5, -3)).toEqual(15);

  let myMult2 = new Mult();
  product = myMult2.memoize(myMult2.slowMultiply);
  expect(product(-6, -10)).toEqual(60);

  let myMult3 = new Mult();
  product = myMult3.memoize(myMult3.slowMultiply);
  expect(product(-150, -10)).toEqual(1500);
});

test('multiply method handles one negative and one positive integer as inputs', () => {
  let product;

  let myMult1 = new Mult();
  product = myMult1.memoize(myMult1.slowMultiply);
  expect(product(3, -4)).toEqual(-12);

  let myMult2 = new Mult();
  product = myMult2.memoize(myMult2.slowMultiply);
  expect(product(-3, 4)).toEqual(-12);

  let myMult3 = new Mult();
  product = myMult3.memoize(myMult3.slowMultiply);
  expect(product(150, -10)).toEqual(-1500);

  let myMult4 = new Mult();
  product = myMult4.memoize(myMult4.slowMultiply);
  expect(product(-150, 10)).toEqual(-1500);
});

test('multiply method handles one or more 1 integer values as input/s', () => {
  let product = 0;

  let myMult1 = new Mult();
  product = myMult1.memoize(myMult1.slowMultiply);
  expect(product(1, -4)).toEqual(-4);

  let myMult2 = new Mult();
  product = myMult2.memoize(myMult2.slowMultiply);
  expect(product(-4, 1)).toEqual(-4);

  let myMult3 = new Mult();
  product = myMult3.memoize(myMult3.slowMultiply);
  expect(product(1, 4)).toEqual(4);

  let myMult4 = new Mult();
  product = myMult4.memoize(myMult4.slowMultiply);
  expect(product(4, 1)).toEqual(4);

  let myMult5 = new Mult();
  product = myMult5.memoize(myMult5.slowMultiply);
  expect(product(1, 0)).toEqual(0);

  let myMult6 = new Mult();
  product = myMult6.memoize(myMult6.slowMultiply);
  expect(product(0, 1)).toEqual(0);
});

test('multiply method handles one or more 0 integer values as an input/s', () => {
  let product;

  let myMult1 = new Mult();
  product = myMult1.memoize(myMult1.slowMultiply);
  expect(product(0, 4)).toEqual(0);

  let myMult2 = new Mult();
  product = myMult2.memoize(myMult2.slowMultiply);
  expect(product(4, 0)).toEqual(0);

  let myMult3 = new Mult();
  product = myMult3.memoize(myMult3.slowMultiply);
  expect(product(-4, 0)).toEqual(0);

  let myMult4 = new Mult();
  product = myMult4.memoize(myMult4.slowMultiply);
  expect(product(0, -4)).toEqual(0);

  let myMult5 = new Mult();
  product = myMult5.memoize(myMult5.slowMultiply);
  expect(product(0, 0)).toEqual(0);
});