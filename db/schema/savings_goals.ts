import { pgTable, timestamp, text, decimal, serial } from 'drizzle-orm/pg-core';
import { users } from './user'

export const savings_goals = pgTable('savings_goals', {
  id: serial('id').primaryKey().notNull(),
  user_id: text('user_id')
    .notNull()
    .references(() => users.user_id, { onDelete: 'cascade', onUpdate: 'cascade' }),
  name: text('name').notNull(),
  target_amount: decimal('target_amount').notNull(),
  current_amount: decimal('current_amount').notNull().default('0.0'),
  target_date: timestamp('target_date').notNull(),
  createAt: timestamp('create_at').defaultNow().notNull(),
  updateAt: timestamp('update_at').defaultNow().notNull(),
})