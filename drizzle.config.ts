import type { Config } from 'drizzle-kit'
import { env } from './src/env'

export default {
	schema: './src/db/schema.ts',
	out: './drizzle',
	driver: 'pg',
	dbCredentials: {
		database: env.POSTGRES_DB,
		host: env.POSTGRES_HOST,
		port: 5432,
		user: env.POSTGRES_USER,
		password: env.POSTGRES_PASSWORD,
	},
} satisfies Config
