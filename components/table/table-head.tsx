import { TableHead, TableRow, TableHeader } from "@/components/ui/table";

export function TableH(){
  return(
    <TableHeader>
      <TableRow className="border-b-black/20 dark:border-b-white/20">
        <TableHead>Description</TableHead>
        <TableHead>Amount</TableHead>
        <TableHead>Category</TableHead>
        <TableHead>Date</TableHead>
      </TableRow>
    </TableHeader>
  )
}