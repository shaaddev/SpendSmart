import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function SuccessLogin(){
  const { isAuthenticated } = getKindeServerSession()

  if (!(await isAuthenticated())){
    redirect('/api/auth/login')
  }

  return(
    <main className="flex flex-col items-center justify-center mx-auto max-w-screen-xl mt-10">
      <p className="mb-5">You have successfully logged in!</p>

      <Link href="/dashboard">
        <Button type="button">Go to Dashboard</Button>
      </Link>
    </main>
  )
}