# Backend da Simulação de Empréstimos Letalk

<img src="https://github.com/israelcruzz/letalk-challenge-frontend/blob/main/public/thumbs/capa.png?raw=true" height="100%" />

Este repositório contém a implementação backend para o Desafio de Simulação de Empréstimos da Letalk. A aplicação fornece uma API para simular e gerenciar solicitações de empréstimo, e inclui uma documentação interativa via Swagger.

## Sumário
- [Introdução](#introdução)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura](#arquitetura)
- [Funcionalidades](#funcionalidades)
- [API](#api)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Introdução
O backend da aplicação de Simulação de Empréstimos da Letalk é responsável por processar as solicitações de empréstimo e fornecer a lógica de negócios necessária. A API permite a criação, visualização e gestão de solicitações de empréstimo, e está documentada usando Swagger.

## Tecnologias Utilizadas
- **Node.js**: Ambiente de execução JavaScript para o backend.
- **Fastify**: Framework de web server rápido e eficiente.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript.
- **Prisma**: ORM para acesso ao banco de dados.
- **Swagger**: Ferramenta para documentação e teste da API.
- **bcrypt.js**: Biblioteca para hashing de senhas.

## Arquitetura
A arquitetura do projeto é baseada em uma estrutura modular e escalável com os seguintes componentes principais:

- **Camada de Controladores**: Responsável por gerenciar as requisições HTTP e interagir com os serviços.
- **Camada de Serviços**: Contém a lógica de negócios da aplicação. Interage com a camada de repositórios e realiza cálculos e validações.
- **Camada de Repositórios**: Interage com o banco de dados usando Prisma para realizar operações CRUD.
- **Camada de Validação**: Utiliza o Zod e o class-validator para garantir que os dados recebidos sejam válidos e seguros.
- **Camada de Documentação**: Configurada com Swagger para fornecer uma interface interativa para explorar e testar a API.

## Funcionalidades
- **Simulação de Empréstimo**: Endpoint para calcular as parcelas e condições do empréstimo com base nos parâmetros fornecidos.
- **Efetivação de Empréstimo**: Endpoint para finalizar a solicitação de um empréstimo.
- **Consulta de Empréstimos**: Endpoint para consultar empréstimos efetivados.
- **Documentação da API**: Interface Swagger para explorar e testar os endpoints da API.

## API
A documentação da API está disponível em: [Swagger Documentation](https://letalk-server-challenge.onrender.com/API#/)

A URL base da API é: [https://letalk-server-challenge.onrender.com](https://letalk-server-challenge.onrender.com)

## Instalação
Para rodar o backend localmente, siga estes passos:

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

4. Configure as variáveis de ambiente (se necessário). Veja o arquivo `.env.example` para detalhes.

5. Inicie o servidor:
   ```bash
   npm start
   ```

## Uso
- Acesse a API localmente em `http://localhost:3333` (ou a URL configurada).
- Explore a documentação e teste os endpoints na interface Swagger: [Swagger Documentation](https://letalk-server-challenge.onrender.com/API#/).
