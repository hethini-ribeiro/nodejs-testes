const { somaHorasExtras, calculaDescontos } = require('../index.js');

describe('Testes do calculo de folha', () => {
  it('Deve retornar a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    expect(retornado).toBe(esperado);
  });

  it('Deve retornar a subtração de horas negativas', () => {
    const esperado = 1500;
    const retornado = calculaDescontos(2000, 500);

    expect(esperado).toBe(retornado);
  });
});
