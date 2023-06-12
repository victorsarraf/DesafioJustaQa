class ProdutoPage {

    selecionaProduto(nomeProduto) {
        cy.get('.inventory_item_name')
            .contains(nomeProduto)
            .click();

        cy.get('.inventory_details_name.large_size')
            .should('contain', nomeProduto);
    };
  
    adicionaDiretoProdutoAoCarrinho(nomeProduto,quantidade) {
        cy.contains(nomeProduto)
            .parents('.inventory_item_description')
            .find('button')
            .contains('Add to cart')
            .click()
            .then(() => {
                cy.get('button')
                    .should('contain', 'Remove');
                });
                this.verificaSeProdutoFoiAdicionadoAoCarrinho(quantidade);
    };

    adicionaProdutoAoCarrinho() {
        cy.get('button')
            .contains('Add to cart')
            .click().then(() => {
                cy.get('button')
                    .should('contain', 'Remove');
                });
    };

    verificaSeProdutoFoiAdicionadoAoCarrinho(quantidade){
        cy.get('.shopping_cart_badge')
            .should('have.css', 'background-color', 'rgb(226, 35, 26)')
            .and('contain', quantidade);
    };

    acessaCarrinhoDeCompras() {
        cy.get('.shopping_cart_link')
            .click();
    };

    selecionaUmProduto(nomeProduto) {
        this.selecionaProduto(nomeProduto);
        this.adicionaProdutoAoCarrinho();
        this.verificaSeProdutoFoiAdicionadoAoCarrinho(1);
    };

    ordenaProdutosPorMenorValor() {
        cy.get('.product_sort_container')
            .select('lohi');
        cy.get('.inventory_item_price')
            .eq(0)
            .invoke('text')
            .then((primeiroValor) => {
                cy.get('.inventory_item_price')
                    .eq(1)
                    .invoke('text')
                    .then((segundoValor) => {
                        expect(Number(primeiroValor.replace('$', ''))).to.be.lessThan(Number(segundoValor.replace('$', '')));
                    });
            });
    };

    falhaOrdenaProdutosPorMenorValor() {
        cy.get('.product_sort_container')
            .select('lohi');
        cy.get('.inventory_item_price')
            .eq(0)
            .invoke('text')
            .then((primeiroValor) => {
                cy.get('.inventory_item_price')
                    .eq(1)
                    .invoke('text')
                    .then((segundoValor) => {
                        expect(Number(primeiroValor.replace('$', ''))).to.not.be.lessThan(Number(segundoValor.replace('$', '')));
                    });
            });
    };

    adicionaProdutoNoCartPorOrdem(ordem) { 
        cy.get('.inventory_item_description')
            .eq(ordem)
            .contains('Add to cart')
            .click()
            .then(() => {
                cy.get('button')
                    .should('contain', 'Remove');
                });
    }

    selecionaProdutoPorOrdem(ordem) {
        cy.get('.inventory_item_description')
            .eq(ordem)
            .find('.inventory_item_name')
            .as('selecaoProduto');
        
        cy.get("@selecaoProduto")
            .invoke('text')
            .as('textoSelecaoProduto');
        
        cy.get("@selecaoProduto")
            .click()
            .then(function () {
                cy.get('.inventory_details_name')
                    .as('produtoSelecionado')
                    .should('contain', this.selecaoProduto.text());
            });
        
        
        cy.get('button')
            .contains('Add to cart')
            .click()
            .then(() => {   
                cy.get('button')
                    .should('contain', 'Remove');
            }
        );
        
            };
    

    voltaParaListaDeProdutos() {
        cy.get('#back-to-products')
            .click();
    }
  
}

export default ProdutoPage;