import Link from 'next/link'
import { Theme } from './theme'
import { ResNavbar } from './resNavbar'
import { DollarSign } from '@/lib/logos'
import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

export const paths = {
  "/": {
    name: 'Home',
  },
  "/dashboard": {
    name: 'Dashboard',
  }
}

export async function Navbar() {
  const { getUser } = getKindeServerSession()
  const user = await getUser();

  return (
    <nav className='sticky flex flex-col max-w-full h-max z-10 top-0 inset-x-0 px-5 py-4 text-base font-medium tracking-tight bg-white/30 dark:bg-black/30 text-neutral-900 dark:text-white backdrop-blur border-b border-b-black/10 dark:border-b-white/10'>
      <div className='flex flex-row items-center justify-between px-5'>
        <div><DollarSign className='w-6 h-6 inline align-middle'/> {user ? (<div className='inline align-middle'>Welcome {user.given_name}!</div>) : null}</div>
        <ul className='hidden lg:flex flex-row gap-6 justify-end'>
          {user ? (
            <>
              {Object.entries(paths).slice(0, 2).map(([path, { name }]) => (
                <li key={path} className='hover:opacity-70'>
                  <Link href={path}>{name}</Link>
                </li>
              ))}
              <li>
                <LogoutLink className='hover:opacity-70'>
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
                <LoginLink postLoginRedirectURL='/success-login' className='hover:opacity-70'>
                  Login
                </LoginLink>
              </li>
            </>
          )}
          <li>
            <Theme />
          </li>
        </ul>
        <ResNavbar 
          theme={<Theme />}
          user={user}
        />
      </div>
    </nav>
  )
}