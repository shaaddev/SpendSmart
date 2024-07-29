import { CreateForm } from "@/components/dashboard/transactions/create-form"
import { CardForm } from "@/components/dashboard/new/card-form"

export default function TransactionAdd(){
  return(
    <div className="flex flex-col items-center justify-center p-10 lg:p-24">
      <CreateForm />
    </div>
  )
}