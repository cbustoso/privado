import axios from "axios";
import { sessionStatus } from "./utils/auth";
import { NextRequest, NextResponse } from "next/server";

/* const protectedRoutes = [
  "/dashboard", 
  "/pacientes", 
  "/pacientes/:path*", 
  "/citas", 
  "/citas/:path*", 
  "/citas/agendarentrevista", 
  "/citas/agendarcita", 
  "/profesionales", 
  "/profesionales/agregarprofesional", 
  "/profesionales/:path",
  "/blog",
  "/blog/agregarblog",
  "/blog/editar/:path",
];

export default function middleware(req) {
  console.log('sessionStatus', sessionStatus);
  if(!sessionStatus && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString())
  } 
}

axios('http://localhost:3000/api/auth/session')
  .then(res => console.log('MIDDLE RES', res))
  .catch(err => console.log('MIDDLE ERR', err))
 */
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
]}