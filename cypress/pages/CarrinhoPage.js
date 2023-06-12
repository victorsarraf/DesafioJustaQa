
class CarrinhoPage {
    verificaItemNoCarrinho(nomeProduto) {
        cy.get('.inventory_item_name')
            .should('contain', nomeProduto);
    };

    verificaQuantidadeNoCarrinho(quantidade) {
        cy.get('.cart_item')
            .as('cartItem')
            .its('length')
            .should('eql', quantidade);
    };

    clicaNoBotaoCheckout() {
        cy.get('.checkout_button')
            .as('checkoutButton')
            .click();
    };

    acessaCarrinhoDeCompras() {
        cy.get('.shopping_cart_link')
            .click();
    };

    validaInformacoesDoCarrinho(nomeProduto, quantidade) {
        this.acessaCarrinhoDeCompras();
        this.verificaItemNoCarrinho(nomeProduto);
        this.verificaQuantidadeNoCarrinho(quantidade);
        this.clicaNoBotaoCheckout();
    };

}

export default CarrinhoPage;