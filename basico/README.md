
# Laboratório de TDD com JavaScript e Jest (TDD\_JEST)

Este repositório é um ambiente prático e focado para o estudo e a prática de **Desenvolvimento Orientado a Testes (Test-Driven Development - TDD)** utilizando JavaScript, o framework de testes [Jest](https://jestjs.io/) e o ambiente [Node.js](https://nodejs.org/).

O objetivo principal é fornecer um conjunto de exercícios com complexidade gradual, permitindo que desenvolvedores possam treinar o ciclo clássico do TDD (Red-Green-Refactor) em um ambiente já configurado.

## 🎯 A Filosofia TDD Neste Projeto

O TDD é mais do que apenas escrever testes; é uma metodologia de design de software. Cada linha de código de produção neste repositório foi escrita *após* a criação de um teste que falhava. Seguimos o ciclo:

1.  **🔴 Red (Vermelho):** Escrevemos um teste para uma funcionalidade que ainda não existe. Naturalmente, este teste falhará. Isso prova que o teste está funcionando e que a funcionalidade ainda precisa ser implementada.
2.  **🟢 Green (Verde):** Escrevemos o código mais simples e direto possível para fazer o teste passar. Neste ponto, não nos preocupamos com a qualidade do código, apenas com a funcionalidade.
3.  **🔵 Refactor (Refatorar):** Com a segurança de um teste que passa, agora refatoramos o código para melhorar sua estrutura, legibilidade e performance, sem alterar seu comportamento externo.

Os testes não são apenas uma rede de segurança; eles guiam o design da nossa aplicação, garantindo um código mais limpo, modular e de fácil manutenção.

## 🛠️ Configuração do Ambiente de Desenvolvimento

Para rodar os exercícios em sua máquina local, você precisará do Node.js e de um editor de código como o VS Code. Siga os passos abaixo para configurar tudo.

### Pré-requisitos

  * **Node.js:** Versão 16.x ou superior. (Vem com o `npm`, o gerenciador de pacotes do Node). Você pode baixar em [nodejs.org](https://nodejs.org/).
  * **Git:** Para clonar o repositório.
  * **Visual Studio Code (VS Code):** [code.visualstudio.com](https://code.visualstudio.com/).

### Passo a Passo da Instalação

1.  **Clone o Repositório**
    Abra seu terminal e clone este projeto:

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO_AQUI>
    cd TDD_JEST
    ```

2.  **Inicialize o Projeto Node.js**
    O comando `npm init` cria um arquivo `package.json`, que gerencia as dependências e os scripts do projeto. O `-y` aceita todas as opções padrão.

    ```bash
    npm init -y
    ```

3.  **Instale o Jest**
    Vamos instalar o Jest como uma dependência de desenvolvimento, pois ele é necessário apenas durante a fase de testes e desenvolvimento, não em produção.

    ```bash
    npm install --save-dev jest
    ```

    Este comando irá baixar o Jest e adicioná-lo à seção `devDependencies` do seu arquivo `package.json`.

4.  **Configure o Script de Teste**
    Para facilitar a execução dos testes, vamos adicionar um script ao nosso `package.json`. Abra o arquivo e localize a seção `"scripts"`. Adicione a linha `"test"` conforme abaixo:

    ```json
    // Dentro do seu package.json
    "scripts": {
      "test": "jest --watchAll"
    },
    ```

      * **`jest`**: É o comando que executa o framework de testes.
      * **`--watchAll`**: É uma flag extremamente útil para TDD. Ela faz com que o Jest fique monitorando continuamente as alterações nos arquivos. A cada vez que você salvar um arquivo, os testes serão executados automaticamente, fornecendo feedback instantâneo sobre seu código.

### Integração com o VS Code (Recomendado)

Para uma experiência de desenvolvimento ainda mais fluida, instale a extensão **[Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)** no VS Code.

Ela permite rodar e depurar testes diretamente pelo editor, além de mostrar os resultados dos testes (sucesso ou falha) ao lado do seu código.

## 🚀 Executando os Testes

Com tudo configurado, executar os testes é muito simples. Abra o terminal integrado do VS Code (`Ctrl + '`) e rode o seguinte comando:

```bash
npm test
```

Este comando invocará o script que configuramos no `package.json` (`jest --watchAll`), e você verá a saída do Jest, que começará a monitorar seus arquivos de teste.

## 📁 Estrutura do Projeto

A estrutura de pastas foi organizada para separar claramente o código da aplicação dos seus testes:

```
TDD_JEST/
└── basico/                   # Raiz do projeto com os exercícios básicos
    ├── calculadora/          # Módulo da Calculadora
    │   ├── calculadora.js      # (Suposto local do código fonte da funcionalidade)
    │   └── calculadora.test.js # (Suposto local dos testes da funcionalidade)
    │
    ├── carrinho/             # Módulo do Carrinho de Compras
    │   └── ...               # (Arquivos de código e teste ficam aqui dentro)
    │
    ├── contaBancaria/        # Módulo da Conta Bancária
    │   └── ...               # (Arquivos de código e teste ficam aqui dentro)
    │
    ├── node_modules/         # Pasta onde as dependências (como o Jest) são instaladas
    ├── .gitignore            # Define quais arquivos e pastas o Git deve ignorar
    └── package.json          # Arquivo de configuração do Node.js com os scripts e dependências
```

## 🧪 Os Exercícios

Este repositório contém três desafios de TDD:

1.  **Calculadora (`calculadora.test.js`)**

      * **Objetivo:** Um exercício de aquecimento. Implementar as quatro operações matemáticas básicas (soma, subtração, multiplicação e divisão), garantindo que os casos extremos (como divisão por zero) sejam tratados.

2.  **Conta Bancária (`contaBancaria.test.js`)**

      * **Objetivo:** Introduz o conceito de estado. Você deve criar uma classe ou objeto que represente uma conta bancária com funcionalidades de depósito, saque, e consulta de saldo. Os testes devem garantir que o saldo não possa ficar negativo e que os valores de depósito/saque sejam válidos.

3.  **Carrinho de Compras (`carrinhoDeCompras.test.js`)**

      * **Objetivo:** Um desafio mais complexo que lida com uma coleção de objetos. Você implementará funcionalidades como adicionar item, remover item, listar itens e calcular o valor total do carrinho. Os testes devem cobrir cenários de carrinho vazio, adição de itens duplicados e cálculo correto do total.

Sinta-se à vontade para explorar, modificar e adicionar novos testes e funcionalidades\! O aprendizado em TDD vem da prática constante. Bom código\!
