import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CreateNewBtn() {
  return(
    <Link href="/dashboard/new">
      <Button className='bg-sky-900 dark:bg-black dark:text-white rounded-xl border'>
        Create New Budget
      </Button>
    </Link>
  )
}

export function CreateNewTransactionBtn() {
  return(
    <Link href="/transaction/add">
      <Button className='bg-sky-900 dark:bg-black dark:text-white rounded-xl border mt-5'>
        Add Transaction
      </Button>
    </Link>
  )
}