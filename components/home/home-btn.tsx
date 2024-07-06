import { Button } from "../ui/button"
import Link from "next/link"

export function HomeBtn() {
  return (
    <div className="flex flex-row gap-6 justify-center">
      <Link href="/signup">
        <Button className="bg-sky-900 dark:bg-black dark:text-white dark:border dark:hover:bg-sky-900/30">
          Sign Up
        </Button>
      </Link>
      <Link href="/">
        <Button variant="outline" className="border-sky-900">
          Download the App
        </Button>
      </Link>
    </div>
  )
}