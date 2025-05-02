import { 
    NextResponse, 
    NextRequest 
} from 'next/server';

export function middleware(request: NextRequest) {
    const user = request.cookies.get('furiaUser');
    const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');

    if (isDashboardRoute && !user) {
        return NextResponse.redirect(new URL('/', request.url));
    };

    return NextResponse.next();
};

export const config = {
    matcher: '/dashboard/:path*',
}; 