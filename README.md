# Cantina do Ovelha - Frontend

Aplicativo de busca e consulta de restaurantes e cardápios. Com objetivo de consultar informações de endereços, horários de funcionamento e promoções do dia.

Desenvolvido em [React](https://reactjs.org/) e consumindo [API](https://github.com/gabrielBFerreira/cantina-ovelha-backend/) desenvolvida em [Node.js](https://nodejs.org/)

## Sumário

- [Workspaces](#workspaces)
- [Bibliotecas Utilizadas](#bibliotecas-utilizadas)
- [Desafios e Problemas](#desafios-e-problemas)
- [Possíveis Melhorias](#possíveis-melhorias)
- [Uso](#uso)

## Workspaces

- [Commitizen](https://github.com/commitizen/cz-cli)
- [Create React App](https://github.com/facebook/create-react-app).
- [ESLint](https://eslint.org/)
- [Gitflow](https://github.com/nvie/gitflow)
- [Prettier](https://prettier.io/)
- [Yarn](https://yarnpkg.com/)

## Bibliotecas Utilizadas

- [Axios](https://github.com/axios/axios): requisições AJAX;
- [Bootstrap](https://getbootstrap.com/): biblioteca de classes CSS;
- [React Accessible Accordion](https://react-accessible-accordion.springload.co.nz/): componente accordion;
- [React Icons](https://react-icons.netlify.com/): utilização de ícones no projeto;
- [Reactstrap](https://reactstrap.github.io/): biblioteca Bootstrap para React de componentes estilizados;
- [Styled Components](https://styled-components.com/): estilização de componentes escrito em JS;
- [Styled Media Query](https://github.com/styled-components/styled-components): utilizado em conjunto com Styled Components, tem a função de padronizar tamanho de telas para responsividade com media queries.

## Desafios e problemas

- **Cards**

  - Posicionar corretamente e responsivamente selos de avisos (restaurante aberto ou fechado, promoções de produtos).

- **Sistema de busca**

  - Desenvolver um sistema de busca performático e robusto.

- **Modal**

  - Desenvolver um modal exatamente como está no design e responsivo.

- **Horários**
  - Problema em lidar com horários exatamente como pede no escopo: atualizar horário de funcionamento e promoções componente conforme o horário atual sem a necessidade de recarregar a página.

## Possíveis Melhorias

- **Performance**

  - Sistemas de horários;
  - Sistemas de buscas.

- **Estrutura**

  - Organização de estilos com Styled Components, Bootstrap e CSS;
  - Responsividade de cards e modais.
  - Estrutura desta documentação.

- **Padrões**

  - Configurações do ESlint e Prettier;
  - Organização de commits: como escrever commit corretamente e quando realizar commits;
  - Documentação de componentes com [Storybook](https://storybook.js.org/).

## Uso

- Executar `git clone git@github.com:cunhamuril/cantina-ovelha-frontend-murilo.git` para realizar o download do projeto;
- Copiar tudo do arquivo `.env.example`, criar e colar tudo no arquivo arquivo `.env`;
- Executar `yarn` ou `npm install` para instalar todas as dependências, depois executar `yarn start` ou `npm start`. O servidor de desenvolvimento deverá iniciar em https://localhost:3000.
