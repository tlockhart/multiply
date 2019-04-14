const Mult = require('./library/mult');
test('Mult class exists', () => {
    expect(Mult).toBeDefined();
  });

test('multiply method handles two positive integers as inputs', () => {
    let product;
    product = new Mult(5, 3)
    expect(product.multiply()).toEqual(15);

    product = new Mult(6, 10);
    expect(product.multiply()).toEqual(60);
});

test('multiply method handles two negative integers as inputs', () => {
  let product 
  product = new Mult(-5, -3)
  expect(product.multiply()).toEqual(15);

  product = new Mult(-6, -10);
  expect(product.multiply()).toEqual(60);
});

test('multiply method handles one negative and one positive integer as inputs', () => {
  let product; 
  product = new Mult(3, -4)
  expect(product.multiply()).toEqual(-12);

  product = new Mult(-3, 4);
  expect(product.multiply()).toEqual(-12);
});

test('multiply method handles one or more 1 integer values as input/s', () => {
  let product; 
  product = new Mult(1, -4)
  expect(product.multiply()).toEqual(-4);

  product = new Mult(-4, 1);
  expect(product.multiply()).toEqual(-4);

  product = new Mult(1, 4)
  expect(product.multiply()).toEqual(4);

  product = new Mult(4, 1);
  expect(product.multiply()).toEqual(4);

  product = new Mult(1, 0)
  expect(product.multiply()).toEqual(0);

  product = new Mult(0, 1);
  expect(product.multiply()).toEqual(0);
});

test('multiply method handles one or more 0 integer values as an input/s', () => {
  let product;
  product = new Mult(0, 4)
  expect(product.multiply()).toEqual(0);

  product = new Mult(4, 0);
  expect(product.multiply()).toEqual(0);

  product = new Mult(-4, 0);
  expect(product.multiply()).toEqual(0);

  product = new Mult(0, -4);
  expect(product.multiply()).toEqual(0);

  product = new Mult(0, 0);
  expect(product.multiply()).toEqual(0);
});