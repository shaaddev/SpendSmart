import { transactions } from "@/db/schema/transactions"
import { DoughnutChart } from "./doughnut-chart";
import { db } from "@/db";
import { TransformedData } from "@/lib/type";

export async function SpendingChart(){
  try {
    const get_transactions = await db.select().from(transactions).execute()

    const transformedData: TransformedData[] = get_transactions.reduce((acc: TransformedData[], transaction) => {
      const category = transaction.category
      const value = parseFloat(transaction.amount.toString())

      const existingCategory = acc.find((item: any) => item.id === category);
      if (existingCategory) {
        existingCategory.value += value;
      } else {
        acc.push({ id: category, value });
      }

      return acc;
    }, [])
    
    return <DoughnutChart data={transformedData} />
  } catch (error) {
    console.error('Error fetching transactions', error);
    return <p>Error loading chart data.</p>
  }
}