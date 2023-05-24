# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

### D1

Create a D1 database and add to wrangler.tml.

```bash
wrangler d1 create your-database --experimental-backend
```

Provide `--location` flag to specify the location of the database.

Open project in CF and under project settings -> Functions, add the binding between your D1 database and the DB variable.

#### Apply migrations

```bash
wrangler d1 migrations apply <DB NAME> --experimentalBackend true
```

Provide `--local` flag to apply migrations to local database.

## Install

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
