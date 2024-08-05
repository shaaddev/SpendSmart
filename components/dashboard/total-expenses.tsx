import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { eq, desc } from "drizzle-orm";
import { db } from "@/db";
import { savings_goals } from "@/db/schema/savings_goals";

export async function TotalExpenses() {
  const { getUser } = getKindeServerSession()
  const user = await getUser();

  const sv_goal = await db.select().from(savings_goals).where(eq(savings_goals.user_id, user?.id as string)).orderBy(desc(savings_goals.id))
  

  return(
    <>
      <p className="text-xl font-semibold">${sv_goal[0].target_amount}</p>
    </>
  )
}