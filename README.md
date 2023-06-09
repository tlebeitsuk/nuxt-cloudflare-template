# Nuxt + Cloudflare(Pages + D1 + KV) Starter

Serverless [Nuxt 3](https://nuxt.com) template using [Cloudflare Pages](https://developers.cloudflare.com/pages) for hosting/functions, [Cloudflare D1](https://developers.cloudflare.com/d1) for database, and [Cloudflare KV](https://developers.cloudflare.com/workers/runtime-apis/kv) for storage/cache.

[Demo](https://c3-test.pages.dev)

Heavily inspired by [nuxt-todos-edge](https://github.com/Atinux/nuxt-todos-edge).

## Setup

### Database

1. Create a D1 database and add to wrangler.toml.

```bash
pnpm wrangler d1 create your-database --experimental-backend
```

Provide optional `--location` flag to specify the location of the database.


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

### KV

1. Create a KV namespace and add to wrangler.toml.

```bash
pnpm wrangler kv:namespace create "KV_NAME" 
```

Provide optional `--preview` flag to create a preview namespace.

2. Open project in CF and under project settings -> Variables, add the binding between your KV namespace and the STORAGE variable.


## Development

1. Make sure to install the dependencies:

```bash
pnpm install
```

2. Start the development server:

```bash
pnpm dev
pnpm pages:dev # Using wrangler but D1/KV binding does not work
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
