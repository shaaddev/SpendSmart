import { BarChart } from "./charts/bar-chart"
import { subtitle_class, title_class, description_class, chart_class } from "./expenses"

export function Budget(){
  return(
    <div className="flex flex-col items-center justify-center space-y-6 text-center my-20 lg:my-36">
      <div className={subtitle_class}>Budgeting</div>
      <h2 className={title_class}>Stay on top of your Budget</h2>
      <p className={description_class}>
        Create custom budgets, set spending limits, and receive alerts to help you stay on track with your financial goals.
      </p>
      <div className={`${chart_class} direction-reverse`}>
        <BarChart className="aspect-[9/4]"/>
        <p className="text-gray-500 dark:text-gray-400">
          Easily compare your budgeted amounts to your actual spending, and make adjustments as needed.
        </p>
      </div>
    </div>
  )
}