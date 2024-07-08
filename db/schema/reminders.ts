import { pgTable, timestamp, text, decimal, serial, integer } from 'drizzle-orm/pg-core';
import { users } from './user'


export const reminders = pgTable('reminders', {
  id: serial('id').primaryKey().notNull(),
  user_id: integer('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  description: text('description').notNull(),
  date: timestamp('date').notNull(),
  createAt: timestamp('create_at').defaultNow().notNull(),
  updateAt: timestamp('update_at').defaultNow().notNull(),
})