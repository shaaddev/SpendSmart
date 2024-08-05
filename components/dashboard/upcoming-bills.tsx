import { db } from "@/db"
import { reminders } from "@/db/schema/reminders"
import { PlusCircle } from "lucide-react"
import { UpcomingBillsDetailForm } from "./upcoming-bills-detail-form"
import { Button } from "../ui/button"
import { revalidatePath } from "next/cache"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { ReminderFormData } from "@/lib/type"
import { desc } from "drizzle-orm"
import { DeleteBtn } from "./upcoming-bills-delete"

export async function UpcomingBills() {

  const add_reminder = async (formData: FormData) => {
    'use server'
    const { getUser } = getKindeServerSession()
    const user = await getUser();

    const description = formData.get('description') as string
    const user_id = user?.id as string

    try {

      const reminder_store: ReminderFormData = { user_id, description }
      
      await db
        .insert(reminders)
        .values(reminder_store)


    } catch (error) {
      console.error('Error', error)
      return{
        error: 'Something went wrong'
      }
    }

    revalidatePath('/dashboard')
  }

  const reminder = await db.select().from(reminders).orderBy(desc(reminders.id))



  return (
    <div className="">
      <div className="mb-5">
        <UpcomingBillsDetailForm data={add_reminder}>
          <PlusCircle className="hover:cursor-pointer"/>
        </UpcomingBillsDetailForm>
      </div>

      <div>
        {reminder.map((r, index) => (
          <div key={index}>
            <DeleteBtn id={r.id}>
              <p className="hover:underline">{r.description}</p>
            </DeleteBtn>
          </div>
        ))}
      </div>
    </div>
  )
}