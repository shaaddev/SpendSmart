export interface BudgetsFormData {
  user_id: string
  amount: string
  start_date: Date
  end_date: Date
}

export interface SavingsGoalFormData {
  user_id: string
  target_amount: string
  current_amount: string
  target_date: Date
}

export interface DashboardDetailsProps {
  title: string
  component: JSX.Element
}

export interface AboutFeaturesProps {
  icon: JSX.Element
  title: string
  description: string
}

export interface TransactionsProps {
  id?: string
  user_id?: string
  amount: string
  category: string
  description: string
  date: Date | string
}

export interface TransformedData {
  id: string,
  value: number
}