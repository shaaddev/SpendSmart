import { pgTable, timestamp, text, numeric, serial } from 'drizzle-orm/pg-core';

export const transactions = pgTable('transactions', {
  id: serial('id').primaryKey().notNull(),
  user_id: text('user_id').notNull(),
  amount: numeric('amount', { precision: 10, scale: 2}).notNull(),
  category: text('category').notNull(),
  date: timestamp('date').notNull(),
  description: text('description').notNull(),
  createAt: timestamp('create_at').defaultNow().notNull(),
  updateAt: timestamp('update_at').defaultNow().notNull(),
})