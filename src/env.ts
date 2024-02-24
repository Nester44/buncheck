import { z } from 'zod'

const envSchema = z.object({
	POSTGRES_HOST: z.string().min(1),
	POSTGRES_DB: z.string().min(1),
	POSTGRES_USER: z.string().min(1),
	POSTGRES_PASSWORD: z.string().min(1),
	PORT: z.string().transform(Number),
})

const result = envSchema.safeParse(process.env)

if (!result.success) {
	console.log(result.error.flatten().fieldErrors)
	throw 'Incorrect environmental variables'
}

export const env = result.data
