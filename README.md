# Projeto de Testes Automatizados - Conduit

Este projeto contém testes automatizados para a aplicação Conduit, utilizando Cypress para testes de API e de Interface Web.

# Relatório:

## Introdução:

Este projeto de testes automatizados foi desenvolvido para testar a aplicação Conduit, que é uma plataforma de publicação de artigos. O objetivo é garantir que as funcionalidades principais da aplicação estejam funcionando corretamente, tanto em nível de API quanto de Interface Web.

## Métodos:
Utilizamos o framework Cypress para implementar os testes automatizados. Organizamos os testes em uma estrutura de diretórios clara e coesa, separando os testes de API dos testes de interface web.

## Resultados:
Todos os testes foram implementados e executados com sucesso, garantindo uma cobertura abrangente das funcionalidades da aplicação. Além disso, foi gerado um relatório HTML detalhado para facilitar a análise dos resultados dos testes.

## Conclusão:
Os testes automatizados fornecem uma camada de segurança adicional ao garantir que a aplicação Conduit funcione conforme o esperado, mesmo após modificações ou atualizações. Isso aumenta a confiabilidade e a qualidade do software entregue aos usuários finais.

## Estudo de Caso:
Suponhamos que a equipe de desenvolvimento esteja prestes a lançar uma nova funcionalidade na aplicação Conduit, que permite aos usuários editar seus comentários em artigos. Neste cenário, poderíamos expandir nossos testes para incluir casos de teste específicos para esta nova funcionalidade, garantindo que ela funcione corretamente em todas as condições possíveis antes do lançamento.

## Execução do Projeto:

1. Clonar o repositório: `git clone https://github.com/seu-usuario/nome-do-repositorio.git`
2. Instalar as dependências: `npm install`
3. Executar os testes:
   - Testes de API: `npm run test:api`
   - Testes de Interface Web: `npm run test:web`

## Padrão de Projeto e Estrutura de Pastas:

Os testes estão organizados conforme a estrutura de diretórios a seguir:

```
cypress
│
├── fixtures
│   └── example.json
│
├── integration
│   ├── api
│   │   ├── addComment.spec.js
│   │   ├── createArticle.spec.js
│   │   ├── deleteComment.spec.js
│   │   ├── favoriteArticle.spec.js
│   │   ├── getProfile.spec.js
│   │   ├── listArticles.spec.js
│   │   ├── loginUser.spec.js
│   │   ├── registerUser.spec.js
│   │   └── updateProfile.spec.js
│   │
│   └── web
│       ├── addRemoveComment.spec.js
│       ├── editProfile.spec.js
│       ├── viewArticle.spec.js
│       └── viewProfile.spec.js
│
├── plugins
│   └── index.js
│
├── reports
│   ├── mochareports
│   │   └── ...
│   └── screenshots
│       └── ...
│
├── support
│   ├── commands.js
│   └── index.js
│
├── videos
│   └── ...
│
├── cypress.json
├── package.json
└── README.md

```


## Geração do Report:

Para gerar o relatório HTML dos testes, execute o seguinte comando após a execução dos testes:

```
npm run cy:report
```

O relatório será gerado na pasta `cypress/reports`.

## Plugins e Criatividade:

Neste projeto, foram adicionados os plugins `cypress-axe` para acessibilidade e `cypress-xpath` para suporte a XPath.

## Repositório:

O código-fonte está disponível no [repositório do GitHub](https://github.com/digitalinnovationone/conduit-realworld-example-app-with-cypress-automation).

