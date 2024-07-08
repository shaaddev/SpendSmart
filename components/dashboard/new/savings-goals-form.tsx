'use client'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CardForm } from './card-form'
import { input_style } from './getting-started'

export function SavingsGoalsForm() {
  const { register } = useForm()


  return (
    <CardForm>
      <h1 className='text-center text-lg font-semibold mb-2'>Create your new Savings Goal</h1>
      <form onSubmit={ async (e) => {
        e.preventDefault()

      }} className='space-y-6'>

        <Input 
          id='target_amount'
          placeholder='Target Amount'
          className={input_style}
          {...register('target_amount', {required: true})}
        />
        
        <Input 
          id='current_amount'
          placeholder='Current Amount'
          className={input_style}
          {...register('current_amount', {required: true})}
        />

        <div className='flex flex-col gap-4'>
          <div>
            <Label htmlFor='target_date'>Target Date</Label>
            <Input 
              id='target_date'
              type='date'
              placeholder='Target Date'
              className={input_style}
              {...register('target_date', {required: true})}
            />
          </div>
        </div>

        <Button type="submit"
          className='bg-sky-900 dark:bg-black dark:text-white rounded-xl border'
        >
          Submit
        </Button>
      </form>
    </CardForm>
  )
}