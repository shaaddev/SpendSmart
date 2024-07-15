'use client'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { GettingStarted } from "@/components/dashboard/new/getting-started"
import { useRouter } from "next/navigation"
import { Loading } from "@/components/dashboard/loading"

export default function DashboardNew() {
  const { isAuthenticated, isLoading } = useKindeBrowserClient()
  const router = useRouter()

  if (isLoading) return <Loading />

  if (!isAuthenticated) {
    router.push('/api/auth/login')
  }

  
  return isAuthenticated ? (
    <main className="flex flex-col items-center justify-center p-10 lg:p-24">
        <GettingStarted />
    </main>
  ) : (
    <Loading />
  )
}