'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export function Delete({id}: {id: number}){
  const router = useRouter();

  const removeTransaction = async () => {
    const confirmed = confirm('Are you sure you want to delete this transaction?');

    if (confirmed){
      const res = await fetch(`/api/transactions?id=${id}`, {
        method: 'DELETE',
      });

      if (!res.ok){
        throw new Error('Something went wrong');
      }

      router.refresh();
    }
  }

  return(
    <>
      <Button type='button' onClick={removeTransaction} className='dark:bg-slate-500 dark:text-black'>Delete</Button>
    </>
  )
}