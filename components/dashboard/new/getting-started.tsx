'use client'
import { useState } from "react"
import { BudgetsForm } from "./budgets-form"
import { SavingsGoalsForm } from "./savings-goals-form"

export function GettingStarted() {
  const [step, setStep] = useState(1)

  const handleNext = () => {
    setStep(2)
  }

  return(
    <>
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Getting Started</h1>
      {step === 1 ? <BudgetsForm onNext={handleNext} /> : <SavingsGoalsForm />}
    </>
  )
}

export const card_style = 'w-full md:w-4/5 lg:w-3/5 mt-10 p-10 border-black/10 dark:border-inherit bg-inherit shadow-sm'

export const input_style = 'border border-black/10 dark:border-inherit'