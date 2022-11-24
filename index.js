/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;
const calculaDescontos = (salario, descontos) => salario - descontos;

const teste = (titulo, esperado, retornado) => {
  if (esperado === retornado) {
    console.log(`${titulo} passou`);
  } else {
    console.log(`${titulo} não passou`);
  }
};

teste('somaHorasExtras', 2500, somaHorasExtras(2000, 500));
teste('calculaDescontos', 1500, calculaDescontos(2000, 500));
