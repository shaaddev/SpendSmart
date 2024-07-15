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