// import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = [
  "/blog",
  "/blog/agregarblog",
  "/blog/editar/:path",
  "/citas",
  "/citas/:path*",
  "/citas/agendarentrevista",
  "/citas/agendarcita",
  "/horarios",
  "/horarios/agregarhorario/:path",
  "/dashboard",
  "/pacientes",
  "/pacientes/:path*",
  "/profesionales",
  "/profesionales/agregarprofesional",
  "/profesionales/:path",
];

export default function middleware(req, sessionStatus) {
  console.log('sessionStatus', sessionStatus);
  if (!sessionStatus && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString())
  }
}


/* 
// ESTO ES LO QUE IBA
export { default } from "next-auth/middleware"

export const config = {matcher: [
  "/dashboard", 
  "/pacientes", 
  "/pacientes/:path*", 
  "/citas", 
  "/citas/:path*", 
  "/citas/agendarentrevista", 
  "/citas/agendarcita", 
  "/horarios",
  "/horarios/agregarhorario/:path",
  "/profesionales", 
  "/profesionales/agregarprofesional", 
  "/profesionales/:path",
  "/blog",
  "/blog/agregarblog",
  "/blog/editar/:path",
]} */