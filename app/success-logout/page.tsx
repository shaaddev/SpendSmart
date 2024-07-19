import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Logout(){

  return(
    <main className="flex flex-col items-center justify-center mx-auto max-w-screen-xl mt-10">
      <p className="mb-5">You have successfully logged out!</p>

      <Link href="/">
        <Button type="submit">Go Back</Button>
      </Link>
    </main>
  )
}