# Expense Tracker API

API para controle de despesas pessoais com autenticação via JWT, cadastro de usuários e operações completas de criação, atualização, listagem, filtro e remoção de gastos.

## Visão geral

Este projeto tem como objetivo permitir que cada usuário acompanhe suas despesas de forma segura e organizada. A API será responsável por autenticar o usuário, proteger as rotas e fornecer recursos para registrar e consultar despesas por período e categoria.

## Funcionalidades

- Criar conta de novo usuário.
- Gerar e validar JWTs para autenticação e manutenção de sessão.
- Listar despesas do usuário autenticado.
- Filtrar despesas por período:
  - Última semana
  - Último mês
  - Últimos 3 meses
  - Período personalizado com data inicial e data final
- Adicionar nova despesa.
- Atualizar despesa existente.
- Remover despesa existente.

## Categorias de despesa

A API deve suportar, no mínimo, as seguintes categorias:

- Groceries
- Leisure
- Electronics
- Utilities
- Clothing
- Health
- Others

A implementação pode tratar essas categorias como um enum, tabela de referência ou campo textual validado.

## Requisitos de autenticação

- Todas as rotas de despesas devem ser protegidas por JWT.
- O token deve ser usado para identificar o usuário solicitante.
- Um usuário só deve conseguir acessar e manipular suas próprias despesas.

## Modelo de dados sugerido

### User

- id
- name
- email
- passwordHash
- createdAt
- updatedAt

### Expense

- id
- userId
- title
- amount
- category
- occurredAt
- createdAt
- updatedAt

## Fluxo esperado

1. O usuário se cadastra na API.
2. O usuário faz login e recebe um JWT.
3. O JWT é enviado nas requisições protegidas.
4. O usuário cria, consulta, filtra, atualiza e remove suas despesas.

## Possíveis endpoints

A definição final pode variar conforme a tecnologia escolhida, mas uma estrutura comum seria:

- `POST /auth/signup` - cadastro de usuário
- `POST /auth/login` - autenticação e geração de JWT
- `GET /expenses` - listar despesas
- `GET /expenses?filter=past-week` - filtrar por período
- `POST /expenses` - criar despesa
- `PUT /expenses/:id` - atualizar despesa
- `DELETE /expenses/:id` - remover despesa

## Observações de implementação

- O projeto pode ser construído com qualquer linguagem, framework e banco de dados.
- Recomenda-se usar uma camada de validação para entrada de dados.
- Recomenda-se persistir as despesas com índice por `userId` e `occurredAt` para facilitar consultas por período.
- Recomenda-se hash seguro para senhas e tratamento consistente de erros.

## Próximos passos

- Escolher a stack do projeto.
- Definir a estrutura das rotas e dos modelos.
- Implementar autenticação com JWT.
- Criar persistência das despesas e filtros por período.
- Adicionar testes para autenticação e operações de despesa.
