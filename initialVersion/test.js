const Mult = require('./library/Mult');
test('Mult class exists', () => {
    expect(Mult).toBeDefined();
  });

test('multiply method handles two positive integers as inputs', () => {
    let product;
    product = new Mult()
    expect(product.multiply(5, 3)).toEqual(15);

    product = new Mult();
    expect(product.multiply(6, 10)).toEqual(60);

    product = new Mult();
    expect(product.multiply(150, 10)).toEqual(1500);
});

test('multiply method handles two negative integers as inputs', () => {
  let product 
  product = new Mult()
  expect(product.multiply(-5, -3)).toEqual(15);

  product = new Mult();
  expect(product.multiply(-6, -10)).toEqual(60);

  product = new Mult();
    expect(product.multiply(-150, -10)).toEqual(1500);
});

test('multiply method handles one negative and one positive integer as inputs', () => {
  let product; 
  product = new Mult()
  expect(product.multiply(3, -4)).toEqual(-12);

  product = new Mult();
  expect(product.multiply(-3, 4)).toEqual(-12);

  product = new Mult();
  expect(product.multiply(150, -10)).toEqual(-1500);

  product = new Mult();
  expect(product.multiply(-150, 10)).toEqual(-1500);
});

test('multiply method handles one or more 1 integer values as input/s', () => {
  let product; 
  product = new Mult()
  expect(product.multiply(1, -4)).toEqual(-4);

  product = new Mult();
  expect(product.multiply(-4, 1)).toEqual(-4);

  product = new Mult()
  expect(product.multiply(1, 4)).toEqual(4);

  product = new Mult();
  expect(product.multiply(4, 1)).toEqual(4);

  product = new Mult()
  expect(product.multiply(1, 0)).toEqual(0);

  product = new Mult();
  expect(product.multiply(0, 1)).toEqual(0);
});

test('multiply method handles one or more 0 integer values as an input/s', () => {
  let product;
  product = new Mult()
  expect(product.multiply(0, 4)).toEqual(0);

  product = new Mult();
  expect(product.multiply(4, 0)).toEqual(0);

  product = new Mult();
  expect(product.multiply(-4, 0)).toEqual(0);

  product = new Mult();
  expect(product.multiply(0, -4)).toEqual(0);

  product = new Mult();
  expect(product.multiply(0, 0)).toEqual(0);
});