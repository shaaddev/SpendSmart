import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation"
import { _Dashboard } from "@/components/dashboard/dashboard"
import { CreateNewBtn } from "@/components/dashboard/create-new-btn"

export default async function Dashboard(){
  const { isAuthenticated } = getKindeServerSession()

  if (!(await isAuthenticated())){
    redirect('/api/auth/login')
  }

  return(
    <main className="flex items-center justify-center p-10 lg:p-24">
      <_Dashboard />
      <div className="absolute bottom-5 right-5">
        <CreateNewBtn />
      </div>
    </main>
  )
}