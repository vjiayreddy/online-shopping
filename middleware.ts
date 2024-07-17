import NextAuth, { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import authOptions from "./app/api/auth/[...nextauth]/utils/authOptions";
import { getSession } from "next-auth/react";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host");
  const requestForNextAuth = {
    headers: {
      cookie: request.headers.get("cookie") ?? undefined,
    },
  };
  const session = await getSession({ req: requestForNextAuth });

  //   const session = await getServerSession(authOptions);
  console.log(session);
  return NextResponse.next();
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
