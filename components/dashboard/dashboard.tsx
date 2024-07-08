import { CardDashboard } from "./card-dashboard"
import { TotalBalance } from "./total-balance"

export function _Dashboard() {
  return(
    <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      <CardDashboard>
        <p className={dashboard_title_style}>Total Balance</p>
      </CardDashboard>
      <CardDashboard>
        <p className={dashboard_title_style}>Total Income</p>
      </CardDashboard>
      <CardDashboard>
        <p className={dashboard_title_style}>Total Expenses</p>
      </CardDashboard>
    </div>
  )
}

const dashboard_title_style = "text-2xl font-bold mb-5"