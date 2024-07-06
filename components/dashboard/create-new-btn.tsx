import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CreateNewBtn() {
  return(
    <Link href="/dashboard/new">
      <Button className='bg-sky-900 dark:bg-black dark:text-white rounded-xl border'>
        Create New
      </Button>
    </Link>
  )
}