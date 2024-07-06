import { BorderDollarSign, Wallet, Report } from "./logos"

export interface AboutFeaturesProps {
  icon: JSX.Element
  title: string
  description: string
}

export const AboutFeatures = [
  {
    'icon': <Wallet className="inline mr-2 w-5 h-5 text-red-500"/>,
    'title' : 'Budgeting',
    'description' : 'Create and manage your monthly budget, set spending limits, and track your progress.'
  },
  {
    'icon': <BorderDollarSign className="inline mr-2 w-5 h-5 text-sky-900"/>,
    'title' : 'Expense Tracking',
    'description' : 'Easily log and categorize your expenses, view detailed reports, and identify areas for savings.'
  },
  {
    'icon': <Report className="inline mr-2 w-5 h-5 text-sky-900 fill-sky-600"/>,
    'title' : 'Insights',
    'description' : 'Generate comprehensive financial reports, track your spending trends, and make informed decisions.'
  }
]