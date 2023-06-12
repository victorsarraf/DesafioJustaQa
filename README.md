
# __Compra de um produto no eCommerce __

### 1. Caso de Teste

## Itens de cobertura de teste

### Identificador único

- 20230609 0123

### Descrição

- Este teste tem como objeto a verificação da funcionalidade de adição de itens ao carrinho e compra dos produtos.
- Alguns passos de execução do teste são propositalmente diferentes de outros testes semelhantes para exercitar a funcionalidade de selecionar um produto para por no carrinho através da página do produto e através da página de listagem de produtos.
- Os testes foram baseados nos 3 cenários dados no desafio, e aplicados para cada um dos 3 usuários disponíveis no sistema. O quarto usuário “locked_out_user” não permite login portanto não foi feito nenhum teste utilizando esta credencial.

### Prioridade

- Alta

### Rastreabilidade

- site Loja Swag Labs https://www.saucedemo.com/

#### Cenário 1

Eu, como Herói, desejo realizar a compra de camisa vermelha;

# Casos de Teste

# Identificador único: C1CT-001

### Objetivo

- Concluir a compra de uma camisa vermelha no site https://www.saucedemo.com
- Descrever o procedimento de teste como passo a passo.

### Prioridade

- Alta

### Rastreabilidade

- Caso de teste 20230609 0123

### Condições prévias

- Usuário válido cadastrado no sistema.
- Produto "Camisa vermelha" cadastrada no sistema.

### Entradas

- Usuário: standard_user
- Password: secret_sauce
- First name: Victor
- Last name: Sarraf
- Zip/Postal code: 00000-00

# Procedimento de Teste

### Procedimentos iniciais

- Conectar a internet
- Abrir um browser permitido (Firefox ou Chrome)

### Procedimento (Passos):

#### Passo 1

1. Acesse o endereço [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Preencha o nome do usuário e senha.
3. Clique no botão Login.
4. Valide se a página de produtos foi mostrada.

#### Passo 2

1. Na área central do site onde os produtos estão disponíveis, clique no nome do produto “Test.allTheThings() T-Shirt (Red)”
2. Clique no botão “Add to cart”
3. Valide se o botão “Add to cart” alterou seu conteúdo para "Remove".

#### Passo 3

1. Valide se o ícone do carrinho no canto superior direito está marcando o número "1" na cor branca dentro de uma bolinha vermelha.
2. Clique no ícone de carrinho.
3. Valide se há somente um item no carrinho.

#### Passo 4

1. Clique no botão “Checkout”.
2. Na página de informações do comprador, preencha os campos First Name, Last name e Zip/Postal Code.
3. Clique em Continue.
4. Valide se há somente o item “Test.allTheThings() T-Shirt (Red)”.

#### Passo 5

1. Clique no botão Finish.
2. Valide se a mensagem “Thank you for your order!” é mostrado na tela.

### Parada e fechamento

- Fechar o browser

### Resultados esperados

- Todos os passos devem ser concluídos com sucesso.
- Todas as validações devem ser concluídas conforme indicado.
- O sistema deverá mostrar a mensagem “Thank you for your order!” ao concluir a compra.

# Identificador único: C1CT-002

### Objetivo

- Concluir a compra de uma camisa vermelha no site https://www.saucedemo.com com usuário com problema de performance.
- Descrever o procedimento de teste em Gherkin.

### Prioridade

- Alta

### Rastreabilidade

- Caso de teste 20230609 0123

### Condições prévias

- Usuário válido cadastrado no sistema.
- Produto "Camisa vermelha" cadastrada no sistema.

### Entradas

- Usuário: performance_glitch_user
- Password: secret_sauce
- First name: Victor
- Last name: Sarraf
- Zip/Postal code: 00000-00

# Procedimento de Teste

### Procedimentos iniciais

- Conectar a internet
- Abrir um browser permitido (Firefox ou Chrome)

### Procedimento (Gherkin):

#### Passo 1

1. Dado que acesso o site [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Quando preencho o nome do usuário e senha.
   - E clico no botão Login.
3. Então devo ser direcionado para a página de produtos.

#### Passo 2

1. Dado que estou na página  onde os produtos estão disponíveis,
2. Quando vejo o produto “Test.allTheThings() T-Shirt (Red)”
   - E clico no botão “Add to cart”
3. Então verifico que o botão “Add to cart” alterou seu conteúdo para "Remove".
   - E o ícone do carrinho no canto superior direito está marcando o número "1"
   - E está na cor branca dentro de uma bolinha vermelha.

#### Passo 3

1. Dado que estou na página do produto
2. Quando eu clico no ícone de carrinho.
3. Então sou levado à página do carrinho de compras
   - E vejo que há somente 1 item no carrinho

#### Passo 4

1. Dado que estou na página do carrinho de compras
2. Quando clico no botão “Checkout”.
3. Então sou direcionado à página de informações do comprador.

#### Passo 5

1. Dado que estou na página de informações do comprador
2. Quando preencho os campos First Name, Last name e Zip/Postal Code.
   - E clico em Continue.
3. Então sou direcionado para a página de pagamento
   - E vejo que há somente o item “Test.allTheThings() T-Shirt (Red)”.

#### Passo 6

1. Dado que estou na página de pagamento
2. Quando eu clico no botão Finish.
3. Então eu vejo a mensagem “Thank you for your order!”

### Parada e fechamento

- Fechar o browser

### Resultados esperados

- Todos os passos devem ser concluídos com sucesso.
- Todas as validações devem ser concluídas conforme indicado.
- O sistema deverá mostrar a mensagem “Thank you for your order!” ao concluir a compra.

# Identificador único: C1CT-003

### Objetivo

- Concluir a compra de uma camisa vermelha no site https://www.saucedemo.com
- Descrever o procedimento de teste como passo a passo.
- Este caso de teste é complementar ao CT-001, porém testando a mesma funcionalidade e passos com usuário bugado.

### Prioridade

- Alta

### Rastreabilidade

- Caso de teste 20230609 0123
- CT-001

### Condições prévias

- Usuário válido cadastrado no sistema.
- Produto "Camisa vermelha" cadastrada no sistema.

### Entradas

- Usuário: problem_user
- Password: secret_sauce
- First name: Victor
- Last name: Sarraf
- Zip/Postal code: 00000-00

# Procedimento de Teste

### Procedimentos iniciais

- Conectar a internet
- Abrir um browser permitido (Firefox ou Chrome)

### Procedimento (Passos):

#### Passo 1

1. Acesse o endereço [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Preencha o nome do usuário e senha.
3. Clique no botão Login.
4. Valide se a página de produtos foi mostrada.

#### Passo 2

1. Na área central do site onde os produtos estão disponíveis, clique no nome do produto “Test.allTheThings() T-Shirt (Red)”
2. Clique no botão “Add to cart”
3. Valide se o botão “Add to cart” alterou seu conteúdo para "Remove".

#### Passo 3

1. Valide se o ícone do carrinho no canto superior direito está marcando o número "1" na cor branca dentro de uma bolinha vermelha.
2. Clique no ícone de carrinho.
3. Valide se há somente um item no carrinho.

#### Passo 4

1. Clique no botão “Checkout”.
2. Na página de informações do comprador, preencha os campos First Name, Last name e Zip/Postal Code.
3. Clique em Continue.
4. Valide se há somente o item “Test.allTheThings() T-Shirt (Red)”.

#### Passo 5

1. Clique no botão Finish.
2. Valide se a mensagem “Thank you for your order!” é mostrado na tela.

### Parada e fechamento

- Fechar o browser

### Resultados esperados

- Todos os passos devem ser concluídos com sucesso.
- Todas as validações devem ser concluídas conforme indicado.
- O sistema deverá mostrar a mensagem “Thank you for your order!” ao concluir a compra.

#### Cenário 2

Eu, como Herói, desejo realizar a compra de bolsa;

# Casos de Teste

# Identificador único: C2CT-001

### Objetivo

- Concluir a compra de uma bolsa no site https://www.saucedemo.com
- Descrever o procedimento de teste como passo a passo.

### Prioridade

- Alta

### Rastreabilidade

- Caso de teste 20230609 0123

### Condições prévias

- Usuário válido cadastrado no sistema.
- Produto “Sauce Labs Backpack” cadastrada no sistema.

### Entradas

- Usuário: standard_user
- Password: secret_sauce
- First name: Victor
- Last name: Sarraf
- Zip/Postal code: 00000-00

# Procedimento de Teste

### Procedimentos iniciais

- Conectar a internet
- Abrir um browser permitido (Firefox ou Chrome)

### Procedimento (Passos):

#### Passo 1

1. Acesse o endereço [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Preencha o nome do usuário e senha.
3. Clique no botão Login.
4. Valide se a página de produtos foi mostrada.

#### Passo 2

1. Na área central do site onde os produtos estão disponíveis, clique no nome do produto “Sauce Labs Backpack”
2. Clique no botão “Add to cart”
3. Valide se o botão “Add to cart” alterou seu conteúdo para "Remove".

#### Passo 3

1. Valide se o ícone do carrinho no canto superior direito está marcando o número "1" na cor branca dentro de uma bolinha vermelha.
2. Clique no ícone de carrinho.
3. Valide se há somente um item no carrinho.

#### Passo 4

1. Clique no botão “Checkout”.
2. Na página de informações do comprador, preencha os campos First Name, Last name e Zip/Postal Code.
3. Clique em Continue.
4. Valide se há somente o item “Sauce Labs Backpack”.

#### Passo 5

1. Clique no botão Finish.
2. Valide se a mensagem “Thank you for your order!” é mostrado na tela.

### Parada e fechamento

- Fechar o browser

### Resultados esperados

- Todos os passos devem ser concluídos com sucesso.
- Todas as validações devem ser concluídas conforme indicado.
- O sistema deverá mostrar a mensagem “Thank you for your order!” ao concluir a compra.

# Identificador único: C2CT-002

### Objetivo

- Concluir a compra de uma bolsa no site https://www.saucedemo.com
- Descrever o procedimento de teste em Gherkin.

### Prioridade

- Alta

### Rastreabilidade

- Caso de teste 20230609 0123

### Condições prévias

- Usuário válido cadastrado no sistema.
- Produto "Sauce Labs Backpack" cadastrada no sistema.

### Entradas

- Usuário: performance_glitch_user
- Password: secret_sauce
- First name: Victor
- Last name: Sarraf
- Zip/Postal code: 00000-00

# Procedimento de Teste

### Procedimentos iniciais

- Conectar a internet
- Abrir um browser permitido (Firefox ou Chrome)

### Procedimento (Gherkin):

#### Passo 1

1. Dado que acesso o site [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Quando preencho o nome do usuário e senha.
   - E clico no botão Login.
3. Então devo ser direcionado para a página de produtos.

#### Passo 2

1. Dado que estou na página  onde os produtos estão disponíveis,
2. Quando vejo o produto “Sauce Labs Backpack”
   - E clico no botão “Add to cart”
3. Então verifico que o botão “Add to cart” alterou seu conteúdo para "Remove".
   - E o ícone do carrinho no canto superior direito está marcando o número "1"
   - E está na cor branca dentro de uma bolinha vermelha.

#### Passo 3

1. Dado que estou na página da lista de produtos
2. Quando eu clico no ícone de carrinho.
3. Então sou levado à página do carrinho de compras
   - E vejo que há somente um item no carrinho

#### Passo 4

1. Dado que estou na página do carrinho de compras
2. Quando clico no botão “Checkout”.
3. Então sou direcionado à página de informações do comprador.

#### Passo 5

1. Dado que estou na página de informações do comprador
2. Quando preencho os campos First Name, Last name e Zip/Postal Code.
   - E clico em Continue.
3. Então sou direcionado para a página de pagamento
   - E vejo que há somente o item “Sauce Labs Backpack”.

#### Passo 6

1. Dado que estou na página de pagamento
2. Quando eu clico no botão Finish.
3. Então eu vejo a mensagem “Thank you for your order!”

### Parada e fechamento

- Fechar o browser

### Resultados esperados

- Todos os passos devem ser concluídos com sucesso.
- Todas as validações devem ser concluídas conforme indicado.
- O sistema deverá mostrar a mensagem “Thank you for your order!” ao concluir a compra.

# Identificador único: C2CT-003

### Objetivo

- Concluir a compra de uma camisa vermelha no site https://www.saucedemo.com
- Descrever o procedimento de teste como passo a passo.
- Este caso de teste é complementar ao CT-001, porém testando a mesma funcionalidade e passos com usuário bugado.

### Prioridade

- Alta

### Rastreabilidade

- Caso de teste 20230609 0123
- CT-001

### Condições prévias

- Usuário válido cadastrado no sistema.
- Produto "Sauce Labs Backpack" cadastrada no sistema.

### Entradas

- Usuário: problem_user
- Password: secret_sauce
- First name: Victor
- Last name: Sarraf
- Zip/Postal code: 00000-00

# Procedimento de Teste

### Procedimentos iniciais

- Conectar a internet
- Abrir um browser permitido (Firefox ou Chrome)

### Procedimento (Passos):

#### Passo 1

1. Acesse o endereço [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Preencha o nome do usuário e senha.
3. Clique no botão Login.
4. Valide se a página de produtos foi mostrada.

#### Passo 2

1. Na área central do site onde os produtos estão disponíveis, clique no nome do produto “Sauce Labs Backpack”
2. Clique no botão “Add to cart”
3. Valide se o botão “Add to cart” alterou seu conteúdo para "Remove".

#### Passo 3

1. Valide se o ícone do carrinho no canto superior direito está marcando o número "1" na cor branca dentro de uma bolinha vermelha.
2. Clique no ícone de carrinho.
3. Valide se há somente um item no carrinho.

#### Passo 4

1. Clique no botão “Checkout”.
2. Na página de informações do comprador, preencha os campos First Name, Last name e Zip/Postal Code.
3. Clique em Continue.
4. Valide se há somente o item “Sauce Labs Backpack”.

#### Passo 5

1. Clique no botão Finish.
2. Valide se a mensagem “Thank you for your order!” é mostrado na tela.

### Parada e fechamento

- Fechar o browser

### Resultados esperados

- Todos os passos devem ser concluídos com sucesso.
- Todas as validações devem ser concluídas conforme indicado.
- O sistema deverá mostrar a mensagem “Thank you for your order!” ao concluir a compra.

#### Cenário 3

Eu, como Herói, quero ordenar os valores do menor para o maior e que seja comprado os dois produtos menores.

# Casos de Teste

# Identificador único: C3CT-001

### Objetivo

- Ordenar os itens da loja do menor preço para o maior preço no site https://www.saucedemo.com.
- Realizar a compra dos dois produtos de menor valor.
- Descrever o procedimento de teste como passo a passo.

### Prioridade

- Alta

### Rastreabilidade

- Caso de teste 20230609 0123

### Condições prévias

- Usuário válido cadastrado no sistema.
- Dois ou mais produtos cadastrados no sistema.

### Entradas

- Usuário: standard_user
- Password: secret_sauce
- First name: Victor
- Last name: Sarraf
- Zip/Postal code: 00000-00

# Procedimento de Teste

### Procedimentos iniciais

- Conectar a internet
- Abrir um browser permitido (Firefox ou Chrome)

### Procedimento (Passos):

#### Passo 1

1. Acesse o endereço [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Preencha o nome do usuário e senha.
3. Clique no botão Login.
4. Valide se a página de produtos foi mostrada.

#### Passo 2

1. Na área central do site onde os produtos estão disponíveis, clique ícone de “funil” no canto direito superior da tela.
2. No menu dropdown, selecione "Price (low to high)"
3. Valide se o valor do primeiro produto da esquerda superior está inferior ao segundo produto à direita do mesmo.

#### Passo 3

1. Clique no nome do primeiro produto superior da esquerda para a direita.
2. Valide se o site foi direcionado para a página do item.

#### Passo 4

1. Clique no botão “Add to cart”
2. Valide se o conteúdo do botão alterou para para "Remove"
3. Valide se o número branco sobre uma bolinha vermelha marcado no ícone do carrinho foi adicionado.

#### Passo 5

1. Clique no link “Back to products”
2. Repita o Passo 2
3. Clique no nome do segundo produto da esquerda para a direita, no topo da lista de produtos.
4. Valide se o site foi direcionado para a página do item.

#### Passo 6

1. Repita o passo 4
2. Clique no ícone do carrinho no canto superior direito.
3. Valide se a quantidade de itens no carrinho são 2

#### Passo 7

1. Clique no botão “Checkout”.
2. Na página de informações do comprador, preencha os campos First Name, Last name e Zip/Postal Code.
3. Clique em Continue.
4. Valide se o os dois itens correspondem aos itens comprados.

#### Passo 8

1. Clique no botão Finish.
2. Valide se a mensagem “Thank you for your order!” é mostrado na tela.

### Parada e fechamento

- Feche o browser

### Resultados esperados

- Todos os passos devem ser concluídos com sucesso.
- Todas as validações devem ser concluídas conforme indicado.
- O sistema deverá mostrar a mensagem “Thank you for your order!” ao concluir a compra.

# Identificador único: C3CT-002

### Objetivo

- Ordenar os itens da loja do menor preço para o maior preço no site https://www.saucedemo.com.
- Realizar a compra dos dois produtos de menor valor.
- Descrever o procedimento de teste como passo a passo.

### Prioridade

- Alta

### Rastreabilidade

- Caso de teste 20230609 0123

### Condições prévias

- Usuário válido cadastrado no sistema.
- Dois ou mais produtos cadastrados no sistema.

### Entradas

- Usuário: problem_user
- Password: secret_sauce
- First name: Victor
- Last name: Sarraf
- Zip/Postal code: 00000-00

# Procedimento de Teste

### Procedimentos iniciais

- Conectar a internet
- Abrir um browser permitido (Firefox ou Chrome)

### Procedimento (Passos):

#### Passo 1

1. Acesse o endereço [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Preencha o nome do usuário e senha.
3. Clique no botão Login.
4. Valide se a página de produtos foi mostrada.

#### Passo 2

1. Na área central do site onde os produtos estão disponíveis, clique ícone de “funil” no canto direito superior da tela.
2. No menu dropdown, selecione "Price (low to high)"
3. Clique no botão “Add to cart”
4. Valide se o valor do primeiro produto da esquerda superior não está inferior ao segundo produto à direita do mesmo.

### Parada e fechamento

- Feche o browser

### Resultados esperados

- Todos os passos devem ser concluídos com sucesso.
- Todas as validações devem ser concluídas conforme indicado.
- O sistema deve falhar na ordenação de produtos de valor inferior para superior com este login.

# Identificador único: C3CT-003

### Objetivo

- Ordenar os itens da loja do menor preço para o maior preço no site https://www.saucedemo.com.
- Realizar a compra dos dois produtos de menor valor.
- Adicionar ao carrinho desde a tela inicial de produtos sem entrar em cada produto.
- Descrever o procedimento de teste como passo a passo.

### Prioridade

- Alta

### Rastreabilidade

- Caso de teste 20230609 0123

### Condições prévias

- Usuário válido cadastrado no sistema.
- Dois ou mais produtos cadastrados no sistema.

### Entradas

- Usuário: performance_glitch_user
- Password: secret_sauce
- First name: Victor
- Last name: Sarraf
- Zip/Postal code: 00000-00

# Procedimento de Teste

### Procedimentos iniciais

- Conectar a internet
- Abrir um browser permitido (Firefox ou Chrome)

### Procedimento (Passos):

#### Passo 1

1. Acesse o endereço [https://www.saucedemo.com/](https://www.saucedemo.com/)
2. Preencha o nome do usuário e senha.
3. Clique no botão Login.
4. Valide se a página de produtos foi mostrada.

#### Passo 2

1. Na área central do site onde os produtos estão disponíveis, clique ícone de “funil” no canto direito superior da tela.
2. No menu dropdown, selecione "Price (low to high)"
3. Valide se o valor do primeiro produto da esquerda superior está inferior ao segundo produto à direita do mesmo.

#### Passo 3

1. Veja o nome do primeiro produto superior da esquerda para a direita.
2. Clique no botão "Add to cart" deste produto.
3. Valide se o conteúdo do botão foi alterado para "Remove"
4. Valide se o número branco sobre uma bolinha vermelha marcado no ícone do carrinho foi adicionado.

#### Passo4

1. Veja o nome do segundo produto superior da esquerda para a direita.
2. Clique no botão "Add to cart" deste produto.
3. Valide se o conteúdo do botão foi alterado para "Remove"
4. Valide se o número branco sobre uma bolinha vermelha marcado no ícone do carrinho foi adicionado.

#### Passo 5

1. Clique no ícone do carrinho no canto superior direito.
2. Valide se a quantidade de itens no carrinho são 2

#### Passo 6

1. Clique no botão “Checkout”.
2. Na página de informações do comprador, preencha os campos First Name, Last name e Zip/Postal Code.
3. Clique em Continue.
4. Valide se o os dois itens correspondem aos itens comprados.

#### Passo 7

1. Clique no botão Finish.
2. Valide se a mensagem “Thank you for your order!” é mostrado na tela.

### Parada e fechamento

- Feche o browser

### Resultados esperados

- Todos os passos devem ser concluídos com sucesso.
- Todas as validações devem ser concluídas conforme indicado.
- O sistema deverá mostrar a mensagem “Thank you for your order!” ao concluir a compra.

----

# Testes Automatizados

Para a execução automatizada destes casos de testes foi escolhido a ferramenta Cypress (http://www.cypress.io). Por ser uma ferramenta já conhecida pela equipe da Justa.

Este repositório está executando testes automatizados através da da esteira do GithubActions/Plugin Cypress v5 a cada push.

#### As especificações de testes estão nesta pasta do GitHub:

[`JST-qa`](https://github.com/victorsarraf/DesafioJustaQa)`/`[`cypress`](https://github.com/victorsarraf/DesafioJustaQa/tree/main/cypress)`/e2e`

    `comprarBolsaTest.cy`

    `comprarCamisetaVermelhaTest.cy`

    `comprarDoisItensDeMenorValor.cy`

#### As credenciais de login e dados de teste estão em

[`JST-qa`](https://github.com/victorsarraf/DesafioJustaQa)`/`[`cypress`](https://github.com/victorsarraf/DesafioJustaQa/tree/main/cypress)`/e2e/fixtures`

    `credenciaisTeste.json`

#### As Page Objects estão em

[`JST-qa`](https://github.com/victorsarraf/DesafioJustaQa)`/`[`cypress`](https://github.com/victorsarraf/DesafioJustaQa/tree/main/cypress)`/pages`

    `CarrinhoPage.js`

    `LoginPage.js`

    `PedidosPage.js`

    `ProdutoPage.js`

Para executar estes testes é necessário ter o Node.js instalado no sistema e baixar uma cópia deste repositório.

Veja mais informações sobre instalação e dependências no site oficial do Cypress:

[JavaScript Web Testing and Component Testing Framework | cypress.io](https://www.cypress.io/)

Para instalar as dependências deste teste, execute da mesma pasta onde se encontra o arquivo package.json o comando:

    `npm i cypress`

Para executar os testes execute o comando do mesmo diretório:

    `npx cypress run`
