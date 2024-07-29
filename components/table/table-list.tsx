import { TableRow, TableCell } from '@/components/ui/table';
import { TransactionsProps } from '@/lib/type';
import { Detail } from './table-details/detail';

export function TableList({ data }: { data: TransactionsProps[] }) {
  return(
    <>
      {data.map((m, index) => (
        <Detail data={m} key={index}>
          <TableRow className='hover:text-blue-500 hover:cursor-pointer'>
            <TableCell>{m.description}</TableCell>
            <TableCell>$ {m.amount}</TableCell>
            <TableCell>{m.category}</TableCell>
            <TableCell>{m.date?.toString()}</TableCell>
          </TableRow>
        </Detail>
      ))}
    </>
  )
}