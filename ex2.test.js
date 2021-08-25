const myRemove = require('./ex2.js');

describe('Remove um numero', () => {
  it('retira o numero 3 do array', () => {
    expect(myRemove([1, 2, 3, 4],3)).toEqual([1, 2, 4]);
  });
  it('se nao retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4],3)).not.toEqual([1, 2, 3, 4]);
  })
  it('se tirar o 5 retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})