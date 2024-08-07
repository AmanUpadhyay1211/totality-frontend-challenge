import { NextResponse } from "next/server";


export async function middleware(request) {
  const user = "sfd";

  if (request.nextUrl.pathname.startsWith("/sign")) {
    if (user) {
      return NextResponse.rewrite(new URL("/", request.url));
    }
  }
}
