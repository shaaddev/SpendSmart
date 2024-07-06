import { pgTable, timestamp, text, decimal, serial } from 'drizzle-orm/pg-core';
import { users } from './user'

export const transactions = pgTable('transactions', {
  id: serial('id').primaryKey().notNull(),
  user_id: text('user_id')
    .notNull()
    .references(() => users.user_id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  type: text('type'),
  amount: decimal('amount').notNull(),
  category: text('category').notNull(),
  date: timestamp('date').notNull(),
  description: text('description'),
  createAt: timestamp('create_at').defaultNow().notNull(),
  updateAt: timestamp('update_at').defaultNow().notNull(),
})