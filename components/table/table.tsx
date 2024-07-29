import { Table, TableBody } from "../ui/table";
import { TableList } from "./table-list";
import { TableH } from "./table-head";
import { transactions } from "@/db/schema/transactions";
import { db } from "@/db";
import { desc, eq } from "drizzle-orm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function _Table(){
  const { getUser } = getKindeServerSession()
  const user = await getUser();

  let transaction: any = await db.select().from(transactions).where(eq(transactions.user_id, user?.id as string)).orderBy(desc(transactions.id))

  return(
    <Table>
      <TableH />
      <TableBody>
        <TableList data={user ? transaction : []} />
      </TableBody>
    </Table>
  )
}