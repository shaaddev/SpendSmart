import { NextResponse } from "next/server";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { transactions } from "@/db/schema/transactions";

export async function DELETE(req: any){
  const id = req.nextUrl.searchParams.get("id");

  await db.delete(transactions)
    .where(eq(transactions.id, parseInt(id)));

  
  return NextResponse.json({message: 'transaction deleted'}, {status: 201});
}