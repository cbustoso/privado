import { sessionStatus } from "./utils/session";
import { NextRequest, NextResponse } from "next/server";

// const protectedRoutes = ["/middlewareside"];

// export default function middleware(req) {
//   if(!sessionStatus && protectedRoutes.includes(req.nextUrl.pathname)) {
//     const absoluteURL = new URL("/", req.nextUrl.origin);
//     return NextResponse.redirect(absoluteURL.toString())
//   } 
// }

export { default } from "next-auth/middleware"

export const config = {matcher: ["/dashboard"]}