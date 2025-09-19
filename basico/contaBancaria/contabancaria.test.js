// contaBancaria.test.js
const ContaBancaria = require('./ContaBancaria');

describe('ContaBancaria', () => {
  let conta;

  beforeEach(() => {
    // Começamos cada teste com uma nova conta com saldo inicial de 200
    conta = new ContaBancaria(200);
  });

  test('deve ter o saldo inicial correto', () => {
    expect(conta.getSaldo()).toBe(200);
  });

  test('deve depositar um valor e atualizar o saldo', () => {
    conta.depositar(50);
    expect(conta.getSaldo()).toBe(250);
  });

  test('deve sacar um valor e atualizar o saldo', () => {
    conta.sacar(80);
    expect(conta.getSaldo()).toBe(120);
  });

  test('deve lançar um erro ao tentar sacar um valor maior que o saldo', () => {
    expect(() => {
      conta.sacar(250);
    }).toThrow('Saldo insuficiente');
  });

  test('não deve permitir depósitos de valores negativos', () => {
    expect(() => {
      conta.depositar(-50);
    }).toThrow('O valor do depósito deve ser positivo');
  });
});