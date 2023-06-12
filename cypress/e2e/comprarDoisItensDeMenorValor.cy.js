import LoginPage from '../pages/LoginPage'
import ProdutoPage from '../pages/ProdutoPage'
import CarrinhoPage from '../pages/CarrinhoPage'
import PedidosPage from '../pages/PedidosPage'

describe('Eu como Heroi quero ordenar os valores do menor para o maior e que seja comprado os dois produtos menores;',
    () => {
        //Setup dos dados de teste
        let quantidadeProdutoCarrinho = 2;
        let mensagemAceitacao = 'Thank you for your order!';

        beforeEach(function () {
            cy.visit('/');
            cy.fixture('credenciaisTeste').then(function (credencial) {
                this.credencial = credencial;
            });
        });

        it(`C3CT-001 - Faz a compra dos dois itens mais baratos usando login de usuario comum`, function () {

            const loginPage = new LoginPage();
            const produtoPage = new ProdutoPage();
            const carrinhoPage = new CarrinhoPage();
            const pedidosPage = new PedidosPage();

            loginPage.preencheLogin(
                this.credencial.standard_user,
                this.credencial.password
            );

            produtoPage.ordenaProdutosPorMenorValor();
            produtoPage.selecionaProdutoPorOrdem(0);
            produtoPage.verificaSeProdutoFoiAdicionadoAoCarrinho(1);
            produtoPage.voltaParaListaDeProdutos();

            produtoPage.ordenaProdutosPorMenorValor();
            produtoPage.selecionaProdutoPorOrdem(1);
            produtoPage.verificaSeProdutoFoiAdicionadoAoCarrinho(2);

            carrinhoPage.acessaCarrinhoDeCompras();
            carrinhoPage.verificaQuantidadeNoCarrinho(quantidadeProdutoCarrinho);
            carrinhoPage.clicaNoBotaoCheckout();

            pedidosPage.preencheInformacoesDoPedido(
                this.credencial.first_name,
                this.credencial.last_name,
                this.credencial.postal_code
            );

            pedidosPage.verificaQuantidadeDeItensNoCarrinho(quantidadeProdutoCarrinho);
            pedidosPage.clicaBotaoFinish();

            pedidosPage.verificaMensagemDePedidoFinalizado(mensagemAceitacao);
        });

        it(`C3CT-002 - Tenta fazer a compra usando usuario bugado e nao termina a operação`, function () {
            const loginPage = new LoginPage();
            const produtoPage = new ProdutoPage();
            const carrinhoPage = new CarrinhoPage();
            const pedidosPage = new PedidosPage();

            loginPage.preencheLogin(
                this.credencial.problem_user,
                this.credencial.password
            );

            produtoPage.falhaOrdenaProdutosPorMenorValor();

        });


        it(`C3CT-003 - Faz a compra dos dois itens mais baratos usando login de problem_user`, function () {
            const loginPage = new LoginPage();
            const produtoPage = new ProdutoPage();
            const carrinhoPage = new CarrinhoPage();
            const pedidosPage = new PedidosPage();

            loginPage.preencheLogin(
                this.credencial.performance_glitch_user,
                this.credencial.password
            );

            produtoPage.ordenaProdutosPorMenorValor();

            produtoPage.adicionaProdutoNoCartPorOrdem(0);
            produtoPage.verificaSeProdutoFoiAdicionadoAoCarrinho(1);

            produtoPage.adicionaProdutoNoCartPorOrdem(1);
            produtoPage.verificaSeProdutoFoiAdicionadoAoCarrinho(2);

            carrinhoPage.acessaCarrinhoDeCompras();
            carrinhoPage.verificaQuantidadeNoCarrinho(quantidadeProdutoCarrinho);
            carrinhoPage.clicaNoBotaoCheckout();

            pedidosPage.preencheInformacoesDoPedido(
                this.credencial.first_name,
                this.credencial.last_name,
                this.credencial.postal_code
            );

            pedidosPage.verificaQuantidadeDeItensNoCarrinho(quantidadeProdutoCarrinho);
            pedidosPage.clicaBotaoFinish();

            pedidosPage.verificaMensagemDePedidoFinalizado(mensagemAceitacao);
        });


    })