# Nuxt + Cloudflare(Pages + D1) Starter

[Nuxt 3](https://nuxt.com) template using [Cloudflare Pages](https://developers.cloudflare.com/pages) for hosting and [Cloudflare D1](https://developers.cloudflare.com/d1) for database.

## Setup

### Database

1. Create a D1 database and add to wrangler.toml.

Provide optional `--location` flag to specify the location of the database.

```bash
pnpm wrangler d1 create your-database --experimental-backend
```


2. Open project in CF and under project settings -> Functions, add the binding between your D1 database and the DB variable.

#### Migrations

1. Generate migrations with [Drizzle](https://orm.drizzle.team):

```bash
pnpm migrations
```

2. Apply migrations to the database:

```bash
pnpm wrangler d1 migrations apply <DB NAME> --experimentalBackend true
```

Provide `--local` flag to apply migrations to local database.

## Development

1. Make sure to install the dependencies:

```bash
pnpm install
```

2. Start the development server:

```bash
pnpm dev
pnpm pages:dev // Using wrangler but D1 binding does not work
```

## Deploy

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
pnpm pages:preview
```

Deploy to CF Pages:

```bash
pnpm pages:deploy
```
