'use client'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs"
import { redirect } from "next/navigation"
import { GettingStarted } from "@/components/dashboard/new/getting-started"
import { Button } from "@/components/ui/button"

export default function DashboardNew() {
  const { isAuthenticated, isLoading } = useKindeBrowserClient()

  if (isLoading) return <p>Loading...</p>
  
  return (
    <main className="flex flex-col items-center justify-center p-10 lg:p-24">
      {isAuthenticated ? (
        <GettingStarted />
      ): (
        <div>
          You have to 
          <Button className="bg-sky-900 dark:bg-black dark:text-white rounded-xl border">
            <LoginLink>Login</LoginLink>
          </Button> 
          to see this page
        </div>
      )}
    </main>
  )
}