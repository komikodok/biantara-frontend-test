import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/') {
    const url = req.nextUrl.clone()
    url.pathname = '/practice'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
