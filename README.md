# SARC API

> **Sobre o projeto:**
> 
> O SARC (Sistema Acadêmico de Registro e Controle) é uma API para gestão acadêmica, permitindo o cadastro e gerenciamento de usuários (alunos, professores, coordenadores), turmas, avaliações, chamadas, reservas de recursos, currículos e demais processos relacionados ao ambiente universitário. O sistema foi projetado para facilitar o controle de presença, avaliações, reservas de salas e recursos, além de fornecer endpoints para integração com portais e sistemas acadêmicos.

## Colaboradores
- Pedro Zardin Guimarães e Enzo Augusto Tonatto

## Ferramentas & Tecnologias Utilizadas
- **Node.js** (ES Modules)
- **Express** (framework para API REST)
- **Prisma** (ORM para acesso ao banco de dados)
- **AWS RDS** (banco de dados compatível com MySQL)
- **Serverless Framework** (deploy para AWS Lambda & API Gateway)
- **Swagger** (documentação da API)

## Configuração para Desenvolvimento

### 1. Instale as dependências
```bash
npm install
```

### 2. Configure as variáveis de ambiente
- Crie um arquivo `.env` com a string de conexão do banco de dados:
  ```
  DATABASE_URL="mysql://USUARIO:SENHA@HOST:PORTA/BANCO"
  ```

### 3. Gere o Prisma Client
```bash
npx prisma generate
npx prisma db push
```

### 4. Execute em modo de desenvolvimento
Você pode rodar a API localmente usando:
```bash
npx serverless offline
```
- A API estará disponível em `http://localhost:3000/api`

## Deploy

### 1. Deploy para AWS
```bash
npx serverless deploy
```
- Isso irá empacotar seu código e fazer o deploy para AWS Lambda e API Gateway.
- Após o deploy, você receberá uma URL como:
  `https://<api-id>.execute-api.<região>.amazonaws.com/<stage>/api`

### 2. Remover o Deploy
```bash
npx serverless remove
```

## Infraestrutura do Serverless Framework

Ao fazer o deploy com o Serverless Framework, os seguintes recursos AWS são criados:
- **AWS Lambda**: Sua aplicação Express roda como uma função Lambda (serverless, cobrança por uso).
- **API Gateway**: Endpoints HTTP(S) são criados para rotear requisições para sua função Lambda. Todos os endpoints REST (incluindo `/api`) são tratados pelo API Gateway.
- **RDS (MySQL)**: Seu banco de dados é gerenciado separadamente, e o Prisma conecta nele a partir da Lambda.
- **IAM Roles**: O Serverless configura as permissões necessárias para a Lambda rodar e acessar outros serviços AWS.

**Como funciona:**
- O API Gateway recebe as requisições HTTP e as encaminha para sua função Lambda.
- A Lambda executa sua aplicação Express, que trata a requisição e retorna a resposta.
- Todo o escalonamento, atualizações e gerenciamento de infraestrutura são feitos pela AWS.