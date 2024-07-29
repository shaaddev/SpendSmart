import { TableHead, TableRow, TableHeader } from "@/components/ui/table";

export function TableH(){
  return(
    <TableHeader>
      <TableRow>
        <TableHead>Description</TableHead>
        <TableHead>Amount</TableHead>
        <TableHead>Category</TableHead>
        <TableHead>Date</TableHead>
      </TableRow>
    </TableHeader>
  )
}