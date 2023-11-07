import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { IsAuth } from '@/lib/IsAuth';

export const config = {
    matcher: '/dashboard/:path*',
}

export async function middleware(request: NextRequest) {
    if (await IsAuth(request)) {
        return NextResponse.next()
    }
    const loginUrl = new URL('/login', request.url)
    return NextResponse.redirect(loginUrl)
}
