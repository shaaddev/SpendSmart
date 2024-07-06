import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"

export default async function DashboardNew() {
  const { isAuthenticated } = getKindeServerSession()

  if (!(await isAuthenticated())){
    redirect('/api/auth/login')
  }
  
  return(
    <main className="flex items-center justify-center p-10 lg:p-24">
      
    </main>
  )
}