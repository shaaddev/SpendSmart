import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "@/lib/logos";
import { paths } from "./Navbar";
import Link from "next/link";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export function ResNavbar({
  theme, user
}: {
  theme: React.ReactNode, user: KindeUser | null
}) {
  return(
    <div className="flex lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="w-6 h-6 text-black dark:text-white"/>
        </SheetTrigger>
        <SheetContent side="left" className="border-none w-3/5 lg:1/5 bg-black text-white flex items-end dark:bg-zinc-900">
          <div className="flex items-end">
            <ul className="flex flex-col gap-6 items-start justify-end">
            {user ? (
                <>
                  {Object.entries(paths).slice(0, 2).map(([path, { name }]) => (
                    <li key={path} className='hover:opacity-70'>
                      <Link href={path}>{name}</Link>
                    </li>
                  ))}
                  <li>
                    <LogoutLink postLogoutRedirectURL="/success-logout">
                      Logout
                    </LogoutLink>
                  </li>
                </>
              ) : (
                <>
                  {Object.entries(paths).map(([path, { name }]) => (
                    <li key={path} className='hover:opacity-70'>
                      <Link href={path}>{name}</Link>
                    </li>
                  ))}
                  <li>
                    <LoginLink postLoginRedirectURL="/success-login">
                      Login
                    </LoginLink>
                  </li>
                </>
              )}
              <li>
                {theme}
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}