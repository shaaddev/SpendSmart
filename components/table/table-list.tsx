import { TableRow, TableCell } from '@/components/ui/table';
import { TransactionsProps } from '@/lib/type';

export function TableList({ data }: { data: TransactionsProps[] }) {
  return(
    <>
      {data.map((m, index) => (
        <TableRow className='hover:text-blue-500 hover:cursor-pointer' key={index}>
          <TableCell>{m.type}</TableCell>
          <TableCell>{m.amount}</TableCell>
          <TableCell>{m.category}</TableCell>
          <TableCell>{m.description}</TableCell>
          <TableCell>{m.date}</TableCell>
        </TableRow>
      ))}
    </>
  )
}