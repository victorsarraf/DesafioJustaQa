import LoginPage from '../pages/LoginPage'
import ProdutoPage from '../pages/ProdutoPage'
import CarrinhoPage from '../pages/CarrinhoPage'
import PedidosPage from '../pages/PedidosPage'

describe('Eu como Heroi desejo realizar a compra de bolsa;',
    () => {
        //Setup dos dados de teste
        let nomeProduto = 'Sauce Labs Backpack';
        let quantidadeProdutoCarrinho = 1;
        let mensagemAceitacao = 'Thank you for your order!';
        const loginPage = new LoginPage();
        const produtoPage = new ProdutoPage();
        const carrinhoPage = new CarrinhoPage();
        const pedidosPage = new PedidosPage();

        beforeEach(function () {
            cy.visit('/');
            cy.fixture('credenciaisTeste').then(function (credencial) {
                this.credencial = credencial;
            });
        });

        it(`C2CT-001 - Faz a compra de ${nomeProduto} com login de usuario comum`, function () {

            loginPage.preencheLogin(
                this.credencial.standard_user,
                this.credencial.password
            );

            produtoPage.selecionaUmProduto(nomeProduto);

            carrinhoPage.validaInformacoesDoCarrinho(
                nomeProduto,
                quantidadeProdutoCarrinho
            );

            pedidosPage.preencheInformacoesDoPedido(
                this.credencial.first_name,
                this.credencial.last_name,
                this.credencial.postal_code
            );

            pedidosPage.verificaPedido(
                nomeProduto,
                quantidadeProdutoCarrinho
            );

            pedidosPage.verificaMensagemDePedidoFinalizado(mensagemAceitacao);
        });

        it(`C2CT-002 - Faz a compra de ${nomeProduto} com login de usuario com problema de performance`, function () {

            loginPage.preencheLogin(
                this.credencial.performance_glitch_user,
                this.credencial.password
            );

            produtoPage.adicionaDiretoProdutoAoCarrinho(
                nomeProduto,
                quantidadeProdutoCarrinho
            );

            carrinhoPage.validaInformacoesDoCarrinho(
                nomeProduto,
                quantidadeProdutoCarrinho
            );

            pedidosPage.preencheInformacoesDoPedido(
                this.credencial.first_name,
                this.credencial.last_name,
                this.credencial.postal_code
            );

            pedidosPage.verificaPedido(
                nomeProduto,
                quantidadeProdutoCarrinho
            );

            pedidosPage.verificaMensagemDePedidoFinalizado(mensagemAceitacao);
        });

        it(`C2CT-003 - Faz a compra de ${nomeProduto} com login de usuario bugado`, function () {

            loginPage.preencheLogin(
                this.credencial.standard_user,
                this.credencial.password
            );

            produtoPage.selecionaUmProduto(nomeProduto);

            carrinhoPage.validaInformacoesDoCarrinho(
                nomeProduto,
                quantidadeProdutoCarrinho
            );

            pedidosPage.preencheInformacoesDoPedido(
                this.credencial.first_name,
                this.credencial.last_name,
                this.credencial.postal_code
            );

            pedidosPage.verificaPedido(
                nomeProduto,
                quantidadeProdutoCarrinho
            );

            pedidosPage.verificaMensagemDePedidoFinalizado(mensagemAceitacao);
        });
    })