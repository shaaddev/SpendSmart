import { CardDashboard } from "./card-dashboard"
import { TotalBalance } from "./total-balance"
import { TotalExpenses } from "./total-expenses"
import { TotalIncome } from "./total-income"
import { DashboardDetailsProps } from "@/lib/type"
import { _Table } from "../table/table"

const dashboard_details: DashboardDetailsProps[] = [
  {
    title: "Total Balance",
    component: <TotalBalance/>
  },
  {
    title: "Total Income",
    component: <TotalIncome/>
  },
  {
    title: "Total Expenses",
    component: <TotalExpenses/>
  },
  {
    title: "Spending Trends",
    component: <></>
  },
  {
    title: "Savings Trend",
    component: <></>
  },
  {
    title: "Upcoming Bills",
    component: <></>
  }
]

export function _Dashboard() {
  return(
    <div className="flex flex-col items-center justify-center w-full">
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-7">
        {dashboard_details.map((d: DashboardDetailsProps, index: number) => (
          <CardDashboard key={index} className="p-2 lg:p-5">
            <p className={dashboard_title_style}>{d.title}</p>
            {d.component}
          </CardDashboard>
        ))}
      </div>
      <CardDashboard className="p-0 m-0">
        <_Table/>
      </CardDashboard>
    </div>
  )
}

const dashboard_title_style = "text-2xl font-bold mb-5"