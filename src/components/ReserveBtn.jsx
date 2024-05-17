"use client"
// import { useState } from "react";
import { Today } from "@mui/icons-material"
// import Modal from "./Modal";
import Link from "next/link"
import { signIn } from "next-auth/react"
// import { redirect } from "next/dist/server/api-utils"
import { redirect } from "next/navigation"
import { useMediaQuery } from "@mui/material"

const ReserveBtn = ({ text, bgColor, color }) => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const matches = useMediaQuery('(min-width:600px)');
  const handleSignIn = async () => {
    try {
      // Realiza la autenticación
      await signIn('google', { callbackUrl: '/citas' }) // Se puede pasar el nombre del proveedor que se esté utilizando
      // Si la autenticación es exitosa, se redirigirá automáticamente a la página de destino configurada en NextAuth

    } catch (error) {
      // Maneja el error de autenticación
      redirect('/login')
      console.log('ERRRR', error);
      if (error.message === 'No se pudo acceder. Correo no autorizado.') {
        // Muestra un mensaje de error personalizado al usuario
        alert('No tienes acceso. Tu correo no está autorizado.');
      } else {
        // Maneja otros errores de autenticación
        console.error('Error de autenticación:', error);
        // Muestra un mensaje de error genérico al usuario
        alert('Ha ocurrido un error durante la autenticación. Por favor, inténtalo de nuevo.');
      }
    }
  }

  return (
    <>
      {/* <Link href="#" > */}
      <button
        onClick={() => handleSignIn()}
        className='btn btn-rounded'
        style={{
          width: '189px',
          height: '56px',
          padding: '8px 24px',
          margin: '16px 0',
          backgroundColor: bgColor,
          color: color,
        }}
      // onClick={handleOpen}
      >
        {matches && <Today style={{marginRight: '8px'}}/>}
        {text}
      </button>
      {/* </Link> */}
      {/* <Modal open={open} handleClose={handleClose} /> */}
    </>
  )
}

export default ReserveBtn;
