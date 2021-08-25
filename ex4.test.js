const myFizzBuzz = require('./ex4');

describe('testa se um numero e divisivel por 3 e 5', () => {
  it("verifica se 15 e divisivel por 3 e 5", () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('verifica se o numero e divisivel so por 3', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  it('verifica se nao e dividido por 3 e 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  it('verifica se nao é um numero', () => {
    expect(myFizzBuzz('A')).toBe(false);
  })
})