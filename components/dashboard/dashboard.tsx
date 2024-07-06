import { CardDashboard } from "./card-dashboard"

export function _Dashboard() {
  return(
    <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      <CardDashboard>
        <p className="text-2xl font-bold">Expenses</p>
      </CardDashboard>
      <CardDashboard>
        <p className="text-2xl font-bold">Budget</p>
      </CardDashboard>
      <CardDashboard>
        <p className="text-2xl font-bold">Insights</p>
      </CardDashboard>
    </div>
  )
}