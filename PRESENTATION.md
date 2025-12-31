# QA Automation Playwright

Este projeto é uma base prática de automação de testes web com Playwright, criada para demonstrar como validar fluxos reais de uma aplicação com testes automatizados.

## O que o projeto faz

- valida o fluxo de login
- testa cenários de erro de autenticação
- verifica adição e remoção de produtos no carrinho
- cobre o fluxo completo de checkout

## Tecnologias utilizadas

- Node.js
- Playwright
- JavaScript
- GitHub Actions

## Estrutura do projeto

- tests/login.spec.js: cenários de autenticação
- tests/produtos.spec.js: cenários de produtos e carrinho
- tests/checkout.spec.js: cenário de checkout
- tests/helpers/login.js: função reutilizável para login

## Como executar

```bash
npm install
npx playwright install chromium
npm test
```

## Aprendizados aplicados

- automação de testes end-to-end
- validação de URL e texto
- uso de helpers para reduzir repetição
- organização de cenários por tema
- estrutura limpa e reutilizável

## Objetivo do projeto

Mostrar, de forma prática e objetiva, como criar uma suíte de testes automatizados para uma aplicação web simples, com foco em qualidade, manutenção e clareza.
