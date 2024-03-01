"use client"
// import { useState } from "react";
import { Today } from "@mui/icons-material"
// import Modal from "./Modal";
import Link from "next/link"
import { signIn } from "next-auth/react"

const ReserveBtn = ({ text, bgColor, color }) => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <>
      {/* <Link href="#" > */}
        <button
        onClick={() => signIn('google', { callbackUrl: '/pacientes' })}
          className='btn btn-rounded seilac'
          style={{ margin: '16px 0', backgroundColor: bgColor, color: color }}
          // onClick={handleOpen}
        >
          <Today /> {text}
        </button>
      {/* </Link> */}
      {/* <Modal open={open} handleClose={handleClose} /> */}
    </>
  )
}

export default ReserveBtn;
