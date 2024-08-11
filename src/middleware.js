import { NextResponse } from 'next/server';
import { getCookie } from 'cookies-next'; // Using cookies-next for simplicity

export async function middleware(request) {
  const userLoggedIn = getCookie('userLoggedIn', { req: request }); // Retrieve the cookie value
  
  // If the user is already logged in and trying to access sign-in or sign-up pages
  // if (userLoggedIn === 'true' && (request.nextUrl.pathname === '/signin' || request.nextUrl.pathname === '/signup')) {
  //   return NextResponse.redirect(new URL('/', request.url)); // Redirect to home if logged in
  // }
  if (!userLoggedIn && (request.nextUrl.pathname === '/manage-account' )) {
    return NextResponse.redirect(new URL('/', request.url)); // Redirect to home if  not logged in
  }


  // Proceed with the request as normal
  return NextResponse.next();
}
