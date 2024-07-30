'use client'
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { updateTransactionAction } from "./transActions"
import { TransactionsProps } from "@/lib/type"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { btn_style, input_style } from "../new/getting-started"
import { CardForm } from "../new/card-form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function EditForm({
  id, description, amount, category, date
}: TransactionsProps) {
  const { register, setValue } = useForm()

  useEffect(() => {
    setValue('new_description', description)
    setValue('new_amount', amount)
    setValue('new_category', category)
    setValue('new_date', date)
  }, [setValue, description, amount, category, date])

  const { toast } = useToast();

  const onSubmit = () => {
    toast({
      title: 'Successfully updated',
      description: 'The transaction has been successfully updated.',
    })
  }

  return(
    <CardForm>
      <form onSubmit={async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        await updateTransactionAction(formData, id!)
      }} className="space-y-6 w-full"
      >
        <div>
          <Label htmlFor="new_description">Description</Label>
          <Input 
            id="new_description"
            className={input_style}
            {...register('new_description', {required: true})}
          />
        </div>

        <div>
          <Label htmlFor="new_amount">Amount</Label>
          <Input 
            id="new_amount"
            type="number"
            className={input_style}
            {...register('new_amount', {required: true})}
          />
        </div>

        <div>
          <Label htmlFor="new_category">Category</Label>
          <Select defaultValue={category} {...register('new_category', {required: true})}>
            <SelectTrigger className={input_style}>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Entertainment">Entertainment</SelectItem>
              <SelectItem value="Groceries">Groceries</SelectItem>
              <SelectItem value="Health/Medical">Health/Medical</SelectItem>
              <SelectItem value="Food">Food</SelectItem>
              <SelectItem value="Personal">Personal</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="new_date">Date</Label>
          <Input 
            id="new_date"
            type="date"
            className={input_style}
            {...register('new_date', {required: true})}
          />
        </div>

        <Button type="submit" onClick={onSubmit} className={btn_style}>Submit</Button>
      </form>
    </CardForm>
  )
}