import { drizzle } from 'drizzle-orm/node-postgres'
import { migrate } from 'drizzle-orm/node-postgres/migrator'
import { Client } from 'pg'
import { env } from '../env'
import * as schema from './schema'

const client = new Client({
	host: env.POSTGRES_HOST,
	port: 5432,
	user: env.POSTGRES_USER,
	password: env.POSTGRES_PASSWORD,
	ssl: {
		rejectUnauthorized: true,
	},
})

await client.connect()
const db = drizzle(client, { schema })

await migrate(db, { migrationsFolder: 'drizzle' })

export default db
