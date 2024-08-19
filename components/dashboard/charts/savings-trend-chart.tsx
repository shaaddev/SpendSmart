import { BarChart } from "./bar-chart"
import { db } from "@/db"
import { transactions } from "@/db/schema/transactions";
import { TransformedData } from "@/lib/type";
import { budgets } from "@/db/schema/budgets";
import { eq, desc } from "drizzle-orm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


export async function SavingsTrendChart(){

  const { getUser } = getKindeServerSession()
  const user = await getUser();


  const balance = await db.select().from(budgets).where(eq(budgets.user_id, user?.id as string)).orderBy(desc(budgets.id))
  const get_balance = parseFloat(balance[0].amount)

  const transaction = await db.select().from(transactions).where(eq(transactions.user_id, user?.id as string))
  let total_transaction = 0;
  for (let i = 0; i < transaction.length; i++) {
    total_transaction += parseFloat(transaction[i].amount)
  }
  
  const updated_transaction = get_balance - total_transaction

  console.log(updated_transaction)

  try {
    const s_t = [{ id: get_balance, value: updated_transaction}]    

    return <BarChart data={s_t} />
  } catch (error) {
    console.error('Error fetching transactions', error);
    return <p>Error loading chart data.</p>
  }
}