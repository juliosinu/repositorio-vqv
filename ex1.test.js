const sum = require('./ex1');

describe('soma de dois numeros', () => {
  it('somar', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('soma 0 + 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('testa se lança erro com uma string', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  it('testa se a mensagem de erro e igual', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  });
})