import { BarChart } from "./bar-chart"
import { db } from "@/db"

const data = [
  {id: 'Entertainment', value: 10},
  {id: 'Groceries', value: 20},
  {id: 'Health/Medical', value: 30},
  {id: 'Food', value: 40},
  {id: 'Personal', value: 50},
  {id: 'Other', value: 60},
];

export function SavingsTrendChart(){
  return(
    <>
      <BarChart data={data} />
    </>
  )
}