"use server"
import { db } from "@/db"
import { users } from "@/db/schema/user"
import { budgets } from "@/db/schema/budgets"
import { savings_goals } from "@/db/schema/savings_goals"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { eq } from "drizzle-orm"
import { BudgetsFormData, SavingsGoalFormData } from "@/lib/type"

export async function storeUser(){
  const { getUser } = getKindeServerSession()
  const user = await getUser();

  if (user){
    await db
      .insert(users)
      .values({
        given_name: user?.given_name as string,
        email: user?.email as string,
        user_id: user?.id,
      })
  }

  revalidatePath('/dashboard')
}

export async function createBudget(formData: FormData){
  // store user if signed in
  const { getUser } = getKindeServerSession()
  const user = await getUser();

  const isUser = await db.select().from(users).where(eq(users.user_id, user?.id as string)).limit(1)

  if (!isUser){
    await storeUser()
  }

  // create budget
  const amount = formData.get('amount') as string
  const start_date = new Date(formData.get('start_date') as string)
  const end_date = new Date(formData.get('end_date') as string)

  if (!amount || !start_date || !end_date){
    return{
      error: 'Invalid message'
    }
  }

  const user_id = user?.id as string

  try {
    const budgets_store: BudgetsFormData = { user_id, amount, start_date, end_date }
    
    await db
      .insert(budgets)
      .values(budgets_store)
  } catch (err){
    console.error('Error', err)
    return {
      error: 'Something went wrong'
    }
  }

  revalidatePath('/dashboard')
}

export async function createSavingsGoal(formData: FormData){

  const target_amount = formData.get('target_amount') as string
  const current_amount = formData.get('current_amount') as string
  const target_date = new Date(formData.get('target_date') as string)

  const { getUser } = getKindeServerSession()
  const user = await getUser();

  const isUser = await db.select().from(users).where(eq(users.user_id, user?.id as string)).limit(1)


  if (!isUser){
    await storeUser()
  }

  const user_id = user?.id as string

  console.log(user_id, target_amount, current_amount, target_date)

  try {
    const sv_goal: SavingsGoalFormData = { user_id,target_amount, current_amount, target_date }

    await db.insert(savings_goals).values(sv_goal)
      
  } catch (error) {
    console.error('Error', error)
    return {
      error: 'Error creating Savings Goal'
    }
  }

  revalidatePath('/dashboard')
  redirect('/dashboard')
}