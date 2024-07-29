import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DetailInfo } from './detail-info';
import { TransactionsProps } from "@/lib/type";

export function Detail({ children, data}: {children: React.ReactNode, data: TransactionsProps}) {
  return(
    <>
      <Dialog>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DetailInfo data={data}/>
      </Dialog>
    </>
  )
}