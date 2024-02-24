import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	fullName: text('full_name').notNull(),
	phone: varchar('phone', { length: 256 }),
})

export type User = typeof users.$inferSelect
export type UserInsert = typeof users.$inferInsert

// Schema for inserting a user - can be used to validate API requests
export const insertUserSchema = createInsertSchema(users)
// Schema for selecting a user - can be used to validate API responses
const selectUserSchema = createSelectSchema(users)
