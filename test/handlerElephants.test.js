const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('teste', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('teste', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('teste1', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('teste2', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('teste3', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('teste4', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('teste5', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('teste6', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('teste7', () => {
    expect(handlerElephants('thayane')).toBeNull();
  });
});
