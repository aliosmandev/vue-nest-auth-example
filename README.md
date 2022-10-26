# Vue nest authantication example!!

## Tech stack

- Frontend
  - Vuejs
  - Tailwind
  - Vee Validate
- Backend
  - NestJS
  - PostgreSQL
  - Prisma
- Other
  - ESLint / Prettier
  - Docker / Docker Compose
  - Vercel

# Getting Started

# Docker

You can launch the development environment with one command!

```bash
docker-compose up
```

After successful launch, go to the following URL in your browser!

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

:warning: Containers have dependencies, but the next container may start to be started before the preparation is complete.
If it fails for that reason, please specify the start-up separately as follows.

```bash
docker-compose up postgre
```

See `docker-compose.yaml` if you want to know more.

# Local

Prepare PostgreSQL and create a database for development. then fill in the environment variables in the `.env.example` file.

# Frontend

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

# Backend

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
