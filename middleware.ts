import { type NextRequest } from 'next/server'
import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware'
export default withAuth(async function middleware(req: any) {
  console.log("look at me", req.kindeAuth)
})

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/admin',
  ],
}