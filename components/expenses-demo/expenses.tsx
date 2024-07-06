'use client'
import { ExpenseTracking } from "./expense-tracking"
import { Budget } from "./budgeting"
import { Insights } from "./insights"

export function Expenses(){
  return(
    <div className="min-h-screen mt-48 flex flex-col justify-center items-center w-full">
      <ExpenseTracking />
      <Budget />
      <Insights />
    </div>
  )
}

export const subtitle_class = "inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm"
export const title_class = "text-3xl font-bold tracking-tighter sm:text-5xl"
export const description_class = "text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
export const chart_class = "mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12"