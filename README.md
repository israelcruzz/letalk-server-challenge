# Letalk Loan Simulation Server

Este repositório contém a implementação do servidor para o desafio técnico da Letalk. A aplicação é responsável por gerenciar simulações de empréstimos para pessoa física.

## Índice

- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução](#execução)
- [Rotas da API](#rotas-da-api)
- [Modelo de Dados](#modelo-de-dados)
- [Arquitetura](#arquitetura)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição

Este projeto implementa uma API para simulação de empréstimos utilizando Node.js, Fastify e Prisma. A API permite criar, listar, atualizar e deletar simulações de empréstimo.

A aplicação está atualmente rodando em [http://localhost:3000](http://localhost:3000).

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Fastify](https://www.fastify.io/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zod](https://github.com/colinhacks/zod)
- [class-validator](https://github.com/typestack/class-validator)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/israelcruzz/letalk-server-challenge.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd letalk-server-challenge
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Configuração

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

```env
DATABASE_URL="sua_url_do_banco_de_dados"
PORT=3000
```

## Execução

Para iniciar o servidor, execute:

```bash
npm run dev
```

A aplicação estará rodando em [http://localhost:3000](http://localhost:3000).

## Rotas da API

| Método | Rota                     | Descrição                                 |
|--------|--------------------------|-------------------------------------------|
| GET    | /loans                   | Lista todas as simulações de empréstimo   |
| GET    | /loans/:id               | Obtém uma simulação de empréstimo por ID  |
| POST   | /loans                   | Cria uma nova simulação de empréstimo     |
| PUT    | /loans/:id               | Atualiza uma simulação de empréstimo por ID|
| DELETE | /loans/:id               | Deleta uma simulação de empréstimo por ID |

## Modelo de Dados

![Modelo de Dados](caminho/para/sua/imagem.png)

## Arquitetura

Este projeto segue os princípios de Clean Architecture, visando manter o código organizado, reutilizável e de fácil manutenção. A estrutura de diretórios está organizada da seguinte forma:

- **src/**: Contém o código fonte da aplicação
  - **controllers/**: Controladores responsáveis por lidar com as requisições HTTP
  - **services/**: Contém a lógica de negócios da aplicação
  - **repositories/**: Implementações para acessar os dados
  - **entities/**: Definições das entidades do domínio
  - **dtos/**: Objetos de Transferência de Dados usados para validação e tipagem

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Faça commit das suas alterações (`git commit -m 'Adicionei MinhaFeature'`)
4. Faça push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
