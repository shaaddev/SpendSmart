import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Logout(){

  const { isAuthenticated } = getKindeServerSession()

  if (!(await isAuthenticated())){
    redirect('/error')
  }

  return(
    <main className="flex flex-col items-center justify-center mx-auto max-w-screen-xl mt-10">
      <p className="mb-5">You have successfully logged out!</p>

      <Link href="/">
        <Button type="submit">Go Back</Button>
      </Link>
    </main>
  )
}