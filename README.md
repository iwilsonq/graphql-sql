# GraphQL SQL

A GraphQL starter server with SQL integration. Uses Knex ORM to abstract away the choice of SQL DB.

Inspired by [GitHunt API](https://github.com/apollographql/GitHunt-API).

Please submit a pull request if you see anything that can be improved!

## Running the server

1. **Install Node/npm.** Make sure you have Node.js 4 or newer installed.
2. **Clone and install dependencies.**
   Run the following commands:

```
git clone https://github.com/iwilsonq/graphql-sql.git
cd graphql-sql
npm install
```

3. **Run migrations.** Set up the SQLite database and run migrations/seed data with the following commands:

```
npm run migrate
npm run seed
```

Or you can use `dotenv`, to do this `cp .env.default .env` and edit with your Github keys.

4. **Run the app.**

```
npm run dev
```

5. **Open the app.** Open http://localhost:8080/graphiql to interact with the api.
