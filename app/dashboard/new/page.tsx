import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"
import { GettingStarted } from "@/components/dashboard/new/getting-started"

export default async function DashboardNew() {
  const { isAuthenticated } = getKindeServerSession()

  if (!(await isAuthenticated())){
    redirect('/api/auth/login')
  }
  
  return(
    <main className="flex flex-col items-center justify-center p-10 lg:p-24">
      <GettingStarted />
    </main>
  )
}