'use client'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { createTransactionAction } from './transActions'
import { btn_style, input_style } from '../new/getting-started'
import { CardForm } from '../new/card-form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CreateForm(){
  const { register } = useForm()
  const { toast } = useToast()

  const onSubmit = () => {
    toast({
      title: 'Successfully created',
      description: 'The transaction has been successfully created.',
    })
  }

  return(
    <CardForm>
      <form onSubmit={ async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        await createTransactionAction(formData)
      }} className='space-y-6'>

        <div>
          <Label htmlFor='description'>Description</Label>
          <Input
            id="description"
            className={input_style}
            {...register('description', {required: true})}
          />
        </div>

        <div>
          <Label htmlFor='amount'>Amount</Label>
          <Input
            id="amount"
            type="number"
            className={input_style}
            {...register('amount', {required: true})}
          />
        </div>

        <div>
          <Label htmlFor='category'>Category</Label>
          <Select {...register('category', {required: true})}>
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
          <Label htmlFor='date'>Date</Label>
          <Input
            id="date"
            type="date"
            className={input_style}
            {...register('date', {required: true})}
          />
        </div>

        <Button type="submit" onClick={onSubmit} className={btn_style}>Submit</Button>
      </form>
    </CardForm>
  )
}
