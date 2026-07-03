# QA Automation Playwright

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Playwright](https://img.shields.io/badge/Playwright-000000?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)

Este projeto é um exemplo simples de automação de testes web com Playwright, criado para demonstrar boas práticas de testes em um cenário realista de e-commerce.

## Objetivo

Construir uma suíte de testes automatizados para validar fluxos importantes de uma aplicação, como login, navegação, carrinho e checkout, de forma simples, legível e reutilizável.

## O que está sendo testado

- Login com sucesso
- Erros de login
- Logout
- Adição e remoção de produtos no carrinho
- Fluxo completo de checkout

## Tecnologias

- Node.js
- Playwright
- JavaScript
- GitHub

## Como executar

```bash
npm install
npx playwright install chromium
npm test
```

## Estrutura do projeto

- tests/login.spec.js: cenários de autenticação
- tests/produtos.spec.js: cenários de produtos e carrinho
- tests/checkout.spec.js: cenário de checkout
- tests/helpers/login.js: função reutilizável para login

## Aprendizados aplicados

- escrita de testes automatizados
- validação de URL e texto
- uso de helpers para reduzir repetição
- organização de cenários por tema
- execução de testes em navegador real


Este projeto demonstra base em automação de testes com Playwright, incluindo validação de fluxos de usuário, organização de cenários e uso de boas práticas de manutenção e reutilização de código.
