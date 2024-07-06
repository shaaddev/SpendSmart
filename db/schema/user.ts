import { pgTable, timestamp, text, decimal, serial } from 'drizzle-orm/pg-core';

export const users = pgTable('user', {
  id: serial('id').primaryKey().notNull(),
  given_name: text('given_name').notNull(),
  email: text('email').notNull(),
  user_id: text('user_id').notNull().unique(),
  createAt: timestamp('create_at').defaultNow().notNull(),
  updateAt: timestamp('update_at').defaultNow().notNull(),
})