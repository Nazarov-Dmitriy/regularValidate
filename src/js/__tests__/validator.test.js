import Validator from '../Validator.js';

test('validatir test of login', () => {
  const result = new Validator('Login123on').validateUsername();

  expect(result).toBe(true);
});

test('validatir test of login', () => {
  const result = new Validator('Login123').validateUsername();

  expect(result).toBe(false);
});