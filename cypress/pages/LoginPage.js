class LoginPage {
    visitaLogin() {
        cy.visit('/', { timeout: 10000 });
    }

    preencheUsuario(user) {
        cy.get('#user-name')
            .as('user')
            .type(user)
    }

    preencheSenha(password) {
        cy.get('#password')
            .as('password')
            .type(password)
    }

    clicaBotaoLogin() {
        cy.get('#login-button')
            .as('loginButton')
            .click()
    }

    verificaPaginaProdutos() {
        cy.get('.title')
            .should('contain', 'Products')
    }

    preencheLogin(usuario, senha) {
        this.visitaLogin();
        this.preencheUsuario(usuario);
        this.preencheSenha(senha);
        this.clicaBotaoLogin();
        this.verificaPaginaProdutos();
    }

}

export default LoginPage;
