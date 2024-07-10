import { pgTable, timestamp, text, numeric, serial, integer } from 'drizzle-orm/pg-core';
import { users } from './user'

export const savings_goals = pgTable('savings_goals', {
  id: serial('id').primaryKey().notNull(),
  user_id: text('user_id')
    .notNull()
    .references(() => users.user_id, { onDelete: 'cascade' }),
  target_amount: numeric('target_amount', { precision: 10, scale: 2}).notNull(),
  current_amount: numeric('current_amount', { precision: 10, scale: 2}).notNull().default('0.00'),
  target_date: timestamp('target_date').notNull(),
  createAt: timestamp('create_at').defaultNow().notNull(),
  updateAt: timestamp('update_at').defaultNow().notNull(),
})