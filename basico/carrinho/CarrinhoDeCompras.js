/**
 * Representa um carrinho de compras que gerencia uma lista de itens.
 */
class CarrinhoDeCompras {
  constructor() {
    this.itens = [];
  }

  /**
   * Adiciona um item ao carrinho.
   * @param {object} item - O item a ser adicionado, contendo nome e preço.
   * @param {string} item.nome - O nome do item.
   * @param {number} item.preco - O preço do item.
   */
  adicionarItem(item) {
    // Validação simples para garantir que o item tem as propriedades esperadas
    if (!item || typeof item.preco !== 'number' || typeof item.nome !== 'string') {
      throw new Error('Item inválido');
    }
    this.itens.push(item);
  }

  /**
   * Retorna a lista de itens no carrinho.
   * @returns {Array<object>} A lista de itens.
   */
  getItens() {
    return this.itens;
  }

  /**
   * Calcula o valor total de todos os itens no carrinho.
   * @returns {number} O valor total.
   */
  calcularTotal() {
    // Usa o método reduce para somar o preço de cada item
    return this.itens.reduce((total, item) => total + item.preco, 0);
  }

  /**
   * Remove todos os itens do carrinho.
   */
  limpar() {
    this.itens = [];
  }
}

module.exports = CarrinhoDeCompras;