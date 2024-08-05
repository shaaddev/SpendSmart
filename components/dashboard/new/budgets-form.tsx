'use client'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CardForm } from './card-form'
import { btn_style, input_style } from './getting-started'
import { createBudget } from './actions'

export function BudgetsForm({ onNext }: {onNext: () => void}) {
  const { register } = useForm();
  
  return  (
    <CardForm>
      <h1 className='text-center text-lg font-semibold mb-2'>Start your new Budget</h1>
      <form onSubmit={ async (e) => {
        e.preventDefault()
        
        const formData = new FormData(e.currentTarget)
        await createBudget(formData)
        onNext()
      }} className='space-y-6'>

        <Input 
          id="amount"
          type="number"
          placeholder='Balance'
          className={input_style}
          {...register('amount', {required: true})}
        />

        <div className='flex flex-col gap-6 lg:grid lg:grid-cols-2'>
          <div>
            <Label htmlFor='start_date'>Start Date</Label>
            <Input 
              id="start_date"
              type="date"
              placeholder='Start Date'
              className={input_style}
              {...register('start_date', {required: true})}
            />
          </div>

          <div>
            <Label htmlFor='end_date'>End Date</Label>
            <Input 
              id="end_date"
              type="date"
              placeholder='End Date'
              className={input_style}
              {...register('end_date', {required: true})}
            />
          </div>
          
        </div>

        <Button type="submit"
          className={btn_style}
        >
          Next
        </Button>
      </form>
    </CardForm>
  )
}