// carrinho.test.js
const CarrinhoDeCompras = require('./CarrinhoDeCompras');

describe('CarrinhoDeCompras', () => {
  let carrinho;

  beforeEach(() => {
    carrinho = new CarrinhoDeCompras();
  });

  test('deve iniciar vazio', () => {
    expect(carrinho.getItens().length).toBe(0);
    expect(carrinho.calcularTotal()).toBe(0);
  });

  test('deve adicionar itens e calcular o total corretamente', () => {
    const item1 = { nome: 'Mouse', preco: 60 };
    const item2 = { nome: 'Teclado', preco: 150 };

    carrinho.adicionarItem(item1);
    carrinho.adicionarItem(item2);

    expect(carrinho.getItens().length).toBe(2);
    expect(carrinho.calcularTotal()).toBe(210);
  });

  test('deve limpar o carrinho', () => {
    carrinho.adicionarItem({ nome: 'Monitor', preco: 800 });
    carrinho.limpar();

    expect(carrinho.getItens().length).toBe(0);
    expect(carrinho.calcularTotal()).toBe(0);
  });
});