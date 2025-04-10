# Backend

This is the backend for the React-zod-prisma-auth

## Tech Stack

- Node.js + Express
- TypeScript
- Prisma ORM
- MySQL
- dotenv (for environment config)

## Setup Instructions

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```env
   DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/DATABASE_NAME"
   CLIENT_URL=http://localhost:5173
   PORT=5000
   ```

4. Generate Prisma client and apply migrations:
   ```bash
   npx prisma migrate dev --name init
   ```

---

## Run Locally

```bash
npm run dev
```

API is now running at: [http://localhost:5000]

---

## API Endpoint

- `POST /api/users/login` – Login with email and password

---

## Prisma User Schema

```prisma
model User {
  id       Int    @id @default(autoincrement())
  email    String @unique
  password String
}
```

---

## Features

- Clean structure (routes, controllers, utils)
- Error handling middleware
- Type-safe DB schema using Prisma
- TypeScript throughout
