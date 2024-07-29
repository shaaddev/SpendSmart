"use server"
import { db } from "@/db"
import { transactions } from "@/db/schema/transactions"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { TransactionsProps } from "@/lib/type"

const get_user_id = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser();
  return user?.id
}

export const createTransactionAction = async (formData: FormData) => {
  const description = formData.get('description') as string
  const amount = formData.get('amount') as string
  const category = formData.get('category') as string
  const date = new Date(formData.get('date') as string)
  const user_id = await get_user_id()

  if (!description || !amount || !category || !date){
    return {
      error: 'Missing required fields'
    }
  }

  try {
    const taction: any = { user_id, category, description, amount, date }

    await db.insert(transactions).values(taction)
  } catch (error) {
    return console.log('Error', error)
  }

  revalidatePath('/dashboard')
  redirect('/dashboard')
}

export const updateTransactionAction = async (formData: FormData, id: string) => {
  const new_description = formData.get('new_description') as string
  const new_amount = formData.get('new_amount') as string
  const new_category = formData.get('new_category') as string
  const new_date = new Date(formData.get('new_date') as string)

  if (!new_description || !new_amount || !new_category || !new_date){
    return{
      error: 'Missing required fields'
    }
  }

  try {
    const new_taction: any = { new_description, new_amount, new_category, new_date } 

    await db.update(transactions).set(new_taction).where(eq(transactions.id, parseInt(id)))

  } catch (error) {
    return console.log('Error', error)
  }

  revalidatePath('/dashboard')
  redirect('/dashboard')
}