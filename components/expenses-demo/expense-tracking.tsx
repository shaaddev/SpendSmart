import { PieChart } from "./charts/pie-chart"
import { subtitle_class, title_class, description_class, chart_class } from "./expenses"

export function ExpenseTracking(){
  return(
    <>
      <div className="flex flex-col items-center justify-center space-y-6 text-center ">
        <div className={subtitle_class}>Expense Tracking</div>
        <h2 className={title_class}>Visualize your spending</h2>
        <p className={description_class}>
          Easily categorize your expenses and see where your money is going with our intuitive expense tracking tools.
        </p>
      </div>
      <div className={chart_class}>
          <PieChart className="aspect-square"/>
          <p className="text-gray-500 dark:text-gray-400">
            Gain insights into your spending habits by visualizing your expenses by category.
          </p>
      </div>
    </>
  )
}