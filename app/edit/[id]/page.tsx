import { db } from "@/db";
import { transactions } from "@/db/schema/transactions";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Edit({ params }: { params: { id: string}} ){
  const { isAuthenticated, getUser } = getKindeServerSession()
  const user = await getUser();

  if (!(await isAuthenticated())){
    redirect('/api/auth/login')
  }

  const { id } = params;
  const transaction = await db.select().from(transactions).where(eq(transactions.id, parseInt(id)) && eq(transactions.user_id, user?.id as string));
  const { type, amount, category, description, date} = transaction[0]

  return(
    <div className="flex items-center justify-center mx-auto max-w-screen-xl">

    </div>
  )
}