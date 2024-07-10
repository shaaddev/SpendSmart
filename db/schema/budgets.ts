import { pgTable, timestamp, text, numeric, serial } from 'drizzle-orm/pg-core';
import { users } from './user'

export const budgets = pgTable('budgets', {
  id: serial('id').primaryKey().notNull(),
  user_id: text('user_id')
    .notNull()
    .references(() => users.user_id, { onDelete: 'cascade' }),
  amount: numeric('amount', { precision: 10, scale: 2}).notNull(),
  start_date: timestamp('start_date').notNull(),
  end_date: timestamp('end_date').notNull(),
  createAt: timestamp('create_at').defaultNow().notNull(),
  updateAt: timestamp('update_at').defaultNow().notNull(),
})