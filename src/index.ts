import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import db from './db/db'
import { insertUserSchema, users } from './db/schema'
import { env } from './env'

const app = new Hono()

app.get('/users', async (c) => {
	return c.json(await db.select().from(users))
})

app.post('/users', zValidator('json', insertUserSchema), async (c) => {
	const userCandidate = c.req.valid('json')

	await db.insert(users).values(userCandidate)

	return c.text('success', 201)
})

interface ExportedType {
	port: number
	fetch: typeof app.fetch
}

const exported: ExportedType = {
	port: env.PORT,
	fetch: app.fetch,
}

export default exported
