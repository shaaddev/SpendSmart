'use client'
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"


export function DeleteBtn({ id, children }: { id: number, children: React.ReactNode}) {
  // 'use client'

  const router = useRouter()

  const removeReminder = async () => {
    const confirmed = confirm('Are you sure you want to delete this reminder?');

    if (confirmed){
      const res = await fetch(`/api/reminder?id=${id}`, {
        method: 'DELETE',
      })

      if (!res.ok){
        throw new Error('Something went wrong');
      }
    }

    router.refresh()
  }

  return(
    <>
      <Button
        type='button'
        onClick={removeReminder}
        variant='ghost'
      >
        {children}
      </Button>
    </>
  )
}