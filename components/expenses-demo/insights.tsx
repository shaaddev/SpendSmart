import { LineChart } from "./charts/line-chart"
import { subtitle_class, title_class, description_class, chart_class } from "./expenses"

export function Insights(){
  return(
    <div className="flex flex-col items-center justify-center space-y-6 text-center">
      <div className={subtitle_class}>Insights</div>
      <h2 className={title_class}>Gain financial clarity</h2>
      <p className={description_class}>
        Our powerful analytics and reporting tools provide you with the insights you need to make informed financial decisions.
      </p>
      <div className={chart_class}>
        <LineChart className="aspect-[9/4]"/>
        <p className="text-gray-500 dark:text-gray-400">
          Visualize the relationship between your income and expenses, helping you identify areas for improvement.
        </p>
      </div>
    </div>
  )
}