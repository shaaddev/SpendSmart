import { NextResponse } from "next/server";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { reminders } from "@/db/schema/reminders";

export async function DELETE(req: any){
  const id = req.nextUrl.searchParams.get("id");

  await db.delete(reminders)
    .where(eq(reminders.id, parseInt(id)));

  return NextResponse.json({message: 'reminder deleted'}, {status: 201}); 
}