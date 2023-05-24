# Nuxt 3 + Cloudflare(Pages + D1) Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

### Database

1. Create a D1 database and add to wrangler.toml.

Provide optional `--location` flag to specify the location of the database.

```bash
wrangler d1 create your-database --experimental-backend
```


2. Open project in CF and under project settings -> Functions, add the binding between your D1 database and the DB variable.

#### Migrations

Generate migrations with Drizzle:

```bash
pnpm migrations
```

Apply migrations to the database:

```bash
wrangler d1 migrations apply <DB NAME> --experimentalBackend true
```

Provide `--local` flag to apply migrations to local database.

### App

Make sure to install the dependencies:

```bash
pnpm install
```

### Development Server

Start the development server:

```bash
pnpm dev
pnpm pages:dev // Using wrangler but D1 binding does not work
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
pages:preview
```

Deploy to CF Pages:

```bash
pnpm pages:deploy
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
