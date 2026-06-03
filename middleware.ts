import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Check if Supabase environment variables are available
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.error('Supabase environment variables are not configured')

    // For protected routes, redirect to login if no Supabase config
    if (request.nextUrl.pathname.startsWith('/avttr')) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    // For login route, continue without Supabase if no config
    if (request.nextUrl.pathname.startsWith('/login')) {
      return NextResponse.next()
    }

    // For other routes, continue normally
    return NextResponse.next()
  }

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            // Force 24-hour expiration for security
            const enforcedOptions = { ...options, maxAge: 86400 };
            request.cookies.set(name, value)
          })
          response = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) => {
            const enforcedOptions = { ...options, maxAge: 86400 };
            response.cookies.set(name, value, enforcedOptions)
          })
        },
      },
    }
  )

  // Try to get the user, but handle potential errors gracefully
  let user = null;
  try {
    const {
      data: { user: userData },
    } = await supabase.auth.getUser()

    user = userData
  } catch (error) {
    console.error('Error getting user in middleware:', error)
    // Don't redirect on error, just continue without authentication check
    return NextResponse.next()
  }

  // PROTECTED ROUTES
  if (request.nextUrl.pathname.startsWith('/avttr')) {
    if (!user) {
        // Kalau belum login, lempar ke login page
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // AUTH ROUTES (Login)
  if (request.nextUrl.pathname.startsWith('/login')) {
    if (user) {
        // Kalau sudah login, langsung ke dashboard
      return NextResponse.redirect(new URL('/avttr', request.url))
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
