/*
Objetivo: Criar uma classe Calculadora que saiba somar, subtrair, multiplicar e dividir.

Passos do Desenvolvimento (Ciclo TDD):

Teste de Soma:

Red: Escreva um teste que verifique se calculadora.somar(2, 3) retorna 5. O teste vai falhar, pois a classe e o método somar ainda não existem.

Green: Crie a classe Calculadora e o método somar para que o teste passe.

Teste de Subtração:

Red: Adicione um teste para o método subtrair. Por exemplo, calculadora.subtrair(5, 2) deve retornar 3.

Green: Implemente o método subtrair.

Continue o ciclo para os métodos multiplicar e dividir.

Teste de Divisão por Zero:

Red: Escreva um teste que verifique se calculadora.dividir(10, 0) lança um erro (throws an error). Isso é importante para tratar casos de exceção.

Green: Modifique o método dividir para lançar um erro quando o divisor for zero.

Refactor: Veja se há alguma parte do seu código que pode ser melhorada ou simplificada.

*/

// calculadora.test.js
// 

const Calculadora = require('./calculadora.js'); // Supondo que a classe estará em Calculadora.js

describe('Calculadora', () => {
  let calculadora;

  // Antes de cada teste, criamos uma nova instância da calculadora
  beforeEach(() => {
    calculadora = new Calculadora();
  });

  // Teste para o método somar
  test('deve somar dois números corretamente', () => {
    expect(() => {
      calculadora.somar(2, 3).toBe(5);
    })
  });

  // Teste para o método subtrair
  test('deve subtrair dois números corretamente', () => {
    // A chamada direta funciona aqui porque não esperamos um erro
    expect(calculadora.subtrair(10, 3)).toBe(7);
  });

  // Teste para o método multiplicar
  test('deve multiplicar dois números corretamente', () => {
    expect(calculadora.multiplicar(2, 3)).toBe(6);
  });

  // Teste para o método dividir (caminho feliz)
  test('deve dividir dois números corretamente', () => {
    expect(calculadora.dividir(10, 2)).toBe(5);
  });
});

