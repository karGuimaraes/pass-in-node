# Pass.in API

API Pass.in é uma interface RESTful desenvolvida durante o evento NLW Unite pela Rocketseat. Ela gerencia eventos e participantes.

### Passo a Passo

1. Renomeie o arquivo `.env.example` para `.env`.
2. Para executar as migrações do banco de dados, utilize o seguinte comando:
   ```
    npm run db:migrate
   ```
3. Para popular o banco de dados com dados iniciais, execute o seguinte comando:
   ```
    npx prisma db seed
   ```
4. Para iniciar o servidor
   ```
    npm run dev
   ```

### Dependências

- Node.js 🟢: Plataforma de execução de código JavaScript.
- Prisma 🔍: ORM (Object-Relational Mapping) para banco de dados.
- Fastify ⚡: Framework web utilizado para criar uma API REST rápida e eficiente.
- Swagger 📚: Ferramenta para documentar APIs RESTful.
- Zod 🛡️: Biblioteca para validação de esquemas de dados em JavaScript.

### Documentação

Acesse a documentação da API Swagger em http://localhost:3333/docs para explorar os endpoints disponíveis.
![image](https://github.com/karGuimaraes/pass-in-node/assets/39937365/75c71866-17cc-49df-b90a-0a94a9967b5f)
