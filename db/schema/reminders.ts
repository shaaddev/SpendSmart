import { pgTable, timestamp, text, serial } from 'drizzle-orm/pg-core';


export const reminders = pgTable('reminders', {
  id: serial('id').primaryKey().notNull(),
  user_id: text('user_id').notNull(),
  description: text('description').notNull(),
  date: timestamp('date').notNull(),
  createAt: timestamp('create_at').defaultNow().notNull(),
  updateAt: timestamp('update_at').defaultNow().notNull(),
})