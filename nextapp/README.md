
# Projeto de Testes E2E com Next.js e Cypress
Este projeto foi criado para fins de estudo e testes end-to-end (E2E) em uma aplicação Next.js. Utilizamos o Cypress como ferramenta de testes, e também integramos o GitHub Actions para garantir que os commits não quebrem a aplicação durante a execução.

## Recursos do Projeto:

- Testes E2E automatizados com o Cypress.
- Integração contínua com o GitHub Actions.
- Garantia de qualidade para a aplicação Next.js.

## Getting Started para rodar

## Run

Primeiramente, instale as dependências necessárias:
```bash
pnpm install && pnpm add -g ntl
```

Rode o ambiente de testes e2e:
```bash
ntl
# e selecione cypress:headless ou
pnpm cypress:headless
```

Primeiramente, rode o servidor de testes:
```bash
pnpm dev
```
Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

Criado e mantido por [development center hub](https://devcenterhub.com).
