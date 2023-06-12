class PedidosPage{

    preencheFirstName(nome) {
        cy.get('#first-name')
            .type(nome);
    };

    preencheLastName(sobrenome) {
        cy.get('#last-name')
            .type(sobrenome);
    };

    preenchePostalCode(codigoPostal) {
        cy.get('#postal-code')
            .type(codigoPostal);
    };

    clicaBotaoContinue() {
        cy.get('#continue')
            .as('continueButton')
            .click()
    }

    verificaQuantidadeDeItensNoCarrinho(quantidade) {
        cy.get('@cartItem')
            .its('length')
            .should('eql', quantidade);
    };

    verificaItemNoCarrinho(nomeProduto) {
        cy.get('@cartItem')
            .should('contain', nomeProduto);
    };

    clicaBotaoFinish() {
        cy.get('#finish')
            .as('finishButton')
            .click();
    };

    verificaMensagemDePedidoFinalizado(mensagem) {
        cy.get('.complete-header')
            .should('contain', mensagem);
    };

    preencheInformacoesDoPedido(nome,sobrenome,codigoPostal) {
        this.preencheFirstName(nome);
        this.preencheLastName(sobrenome);
        this.preenchePostalCode(codigoPostal);
        this.clicaBotaoContinue();
    }

    verificaPedido(nomeProduto, quantidade) {
        this.verificaQuantidadeDeItensNoCarrinho(quantidade);
        this.verificaItemNoCarrinho(nomeProduto);
        this.clicaBotaoFinish();
    };
}

export default PedidosPage;