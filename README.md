# Zoftify Assessment Test (NestJS)

A full-featured backend API built with NestJS, PostgreSQL, and TypeORM. 
Includes authentication, validation, error handling, and Swagger documentation.

✅ __All tasks (including optional) from the assessment were fully implemented. The project can be started via Docker or locally (see below).__

---

## Features

- Full CRUD for users
- JWT-based authentication
- DTO validation (`class-validator`)
- Global exception filter
- PostgreSQL + TypeORM integration
- Middleware for request timing
- Swagger auto-generated API docs
- Dockerized app with `docker-compose`

---

## Requirements

> For local development without Docker

- [Node.js v18+](https://nodejs.org/)
- [npm v9+](https://www.npmjs.com/)
- [Nest CLI](https://docs.nestjs.com/cli/overview)
- [PostgreSQL 14+](https://www.postgresql.org/)

> Or just use Docker (recommended)

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🚀 Quick Start with Docker

> Easiest way to get everything running.

```bash
# 1. Clone
git clone https://github.com/ddiagilevv/zoftify-nestjs.git
cd zoftify-nestjs

# Copy environment variables
cp .env.example .env

# Build and start app with PostgreSQL
sudo docker-compose up --build
```

### After running:

- API: [http://localhost:3000/api](http://localhost:3000/api)  
- Swagger UI: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

---

## Local Development

```bash
# 1. Clone
git clone https://github.com/ddiagilevv/zoftify-nestjs.git
cd zoftify-nestjs

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Set up .env
cp .env.example .env

# 4. Start PostgreSQL
sudo docker-compose up -d db

# 5. Run migrations
npm run migration:run

# 6. Run dev server
npm run start:dev
```

---

## JWT Authentication

### Register

```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepass",
  "name": "John"
}
```

### Login

```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepass"
}
```

Response:
```json
{ "access_token": "JWT_TOKEN_HERE" }
```

### Authenticated Request

Add this header:

```
Authorization: Bearer JWT_TOKEN_HERE
```

Example:
```http
GET /users
Authorization: Bearer eyJhbGciOiJIUzI1...
```

---

## Scripts

| Command                  | Description                   |
|--------------------------|-------------------------------|
| `npm run start:dev`      | Start dev server (watch mode) |
| `npm run build`          | Build project to `dist`       |
| `npm run start:prod`     | Run built app                 |
| `npm run migration:run`  | Apply DB migrations           |
| `npm run migration:generate --name=XYZ` | Generate a new migration |

---

## Unit testing

```bash
# Install test dependencies
npm install --save-dev @nestjs/testing @types/jest jest ts-jest

#run test
npm run test
```

---

## Project Structure

```
src/
├── auth/              # Authentication (JWT)
│   └── dto/           # Login & Response DTOs
├── common/            # Filters, guards, middleware
├── config/            # Config services
├── users/             # User CRUD logic
├── main.ts            # Bootstrap + Swagger setup
├── app.module.ts      # Root module
```

---

## .env Example

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=nestjs_db
JWT_SECRET=supersecret
JWT_EXPIRES_IN=3600
```

---

## Author

**Danila Diagilev**  
[LinkedIn](https://www.linkedin.com/in/daniladiagilev/)