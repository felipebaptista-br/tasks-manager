
# To-do Project

Esse projeto é uma simples aplicação de gerenciamento de tarefas que tem por objetivo entregar uma interface minimalista através de boas práticas de usabilidade. O projeto é Open-Source e qualquer pessoa pode acessar ou se inspirar em construir a sua.



## Stack

**Client:** Next.js, React, Redux, Axios

**Server:** Node.js, Fastify

**Banco de Dados:** PostgreSQL


## Pré-requisitos

 - [Node.js](https://nodejs.org/en) versão 18.18.2 ou superior.


## Referência de API's

#### Para listar todas as tasks:

```http
  GET /tasks
```

#### Para cadastrar uma nova task:

```http
  POST /task/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Id da Task cadastrada como parâmetro na rota |

#### Para alterar os valores de uma task:

```http
  PUT /task/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id da Task cadastrada como parâmetro na rota |

#### Para deletar uma task:

```http
  DELETE /task/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id da Task cadastrada como parâmetro na rota |


## Instalação back-end

Dentro da pasta `server`, utilize:

```bash
  npm install
  ou
  yarn install
```

## Rodar o back-end localmente

Dentro da pasta `server`, utilize:

```bash
  npm run dev
  ou
  yarn run dev
```

## Instalação front-end

Dentro da pasta `client`, utilize:

```bash
  npm install
  ou
  yarn install
```

## Rodar o front-end localmente

Dentro da pasta `client`, utilize:

```bash
  npm run dev
  ou
  yarn run dev
```
## Suporte

Em casos de dúvidas ou sugestões de melhorias, sinta-se a vontade para me chamar pelo e-mail felipe.baptista06@gmail.com caso eu demore para responder, pode me consultar no Linkedin que está no meu perfil do GitHub.

