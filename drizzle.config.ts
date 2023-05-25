import type { Config } from 'drizzle-kit'

export default {
  schema: './server/db/schema.ts',
  connectionString: process.env.DB,
  out: './server/db/migrations',
  breakpoints: true,
} satisfies Config
