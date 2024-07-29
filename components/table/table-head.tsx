import { TableHead, TableRow, TableHeader } from "@/components/ui/table";

export function TableH(){
  return(
    <TableHeader>
      <TableRow>
        <TableHead>Type</TableHead>
        <TableHead>Amount</TableHead>
        <TableHead>Category</TableHead>
        <TableHead>Description</TableHead>
        <TableHead>Date</TableHead>
      </TableRow>
    </TableHeader>
  )
}