import type { DrizzleD1Database } from 'drizzle-orm/d1'
import { drizzle } from 'drizzle-orm/d1'

export * as tables from '../db/schema'

let db: DrizzleD1Database | null = null

export function useDb() {
  if (!db) {
    if (process.env.DB)
      db = drizzle(process.env.DB)
    else
      throw new Error('DB is not defined')
  }

  return db
}
