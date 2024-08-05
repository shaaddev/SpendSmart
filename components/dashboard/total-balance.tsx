import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { eq, desc } from "drizzle-orm";
import { db } from "@/db";
import { budgets } from "@/db/schema/budgets";

export async function TotalBalance() {
  const { getUser } = getKindeServerSession()
  const user = await getUser();

  const budget = await db.select().from(budgets).where(eq(budgets.user_id, user?.id as string)).orderBy(desc(budgets.id))
  

  return(
    <>
      <p className="text-xl font-semibold">${budget[0].amount}</p>
    </>
  )
}