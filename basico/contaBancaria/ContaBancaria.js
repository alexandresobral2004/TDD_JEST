/**
 * Representa uma conta bancária com operações de depósito e saque.
 */
class ContaBancaria {
  /**
   * Cria uma instância de ContaBancaria.
   * @param {number} saldoInicial - O saldo inicial da conta. Deve ser zero ou mais.
   */
  constructor(saldoInicial = 0) {
    if (saldoInicial < 0) {
      throw new Error('O saldo inicial não pode ser negativo');
    }
    this.saldo = saldoInicial;
  }

  /**
   * Retorna o saldo atual da conta.
   * @returns {number} O saldo atual.
   */
  getSaldo() {
    return this.saldo;
  }

  /**
   * Adiciona um valor ao saldo da conta.
   * @param {number} valor - O valor a ser depositado. Deve ser positivo.
   */
  depositar(valor) {
    if (valor <= 0) {
      throw new Error('O valor do depósito deve ser positivo');
    }
    this.saldo += valor;
  }

  /**
   * Retira um valor do saldo da conta.
   * @param {number} valor - O valor a ser sacado. Deve ser positivo.
   * @throws {Error} Se o valor do saque for maior que o saldo disponível.
   */
  sacar(valor) {
    if (valor <= 0) {
      throw new Error('O valor do saque deve ser positivo');
    }
    if (valor > this.saldo) {
      throw new Error('Saldo insuficiente');
    }
    this.saldo -= valor;
  }
}

module.exports = ContaBancaria;