class calculadora {
  somar(a, b) {
    return a + b;
  }

  dividir(a, b) {
    if (b === 0) {
      throw new Error('Não é possível dividir por zero');
    }
    return a / b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  subtrair(a, b) {
    return a - b;
  }
}



module.exports = calculadora;