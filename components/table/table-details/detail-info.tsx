import { DialogContent, DialogHeader, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link  from "next/link";
import { TransactionsProps } from "@/lib/type";
import { Delete } from "./detail-delete-btn";


export async function DetailInfo({data}: {data: TransactionsProps}) {
  const { getUser } = getKindeServerSession()
  const user = await getUser();

  return(
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{data.amount} - {data.type}</DialogTitle>
          <DialogDescription>
            {data.description} 
          </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col items-start justify-center text-black dark:text-slate-500'>
          <div>
            <p>{data.category}</p>
            <p>{data.date}</p>
          </div>
          {user ? (
            <div className='w-full pt-5 flex justify-between '>
              <Link href={`/edit/${data.id}`}>
                <Button type='button' className='dark:bg-slate-500 dark:text-black'>Edit</Button>
              </Link>
              <Delete id={parseInt(data.id!)}/>
            </div>
          ): null}
        </div>
      </DialogContent>
    </>
  )
}