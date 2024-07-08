'use client'
import Link from "next/link";
import { carrousel01 } from "@/components/imagepath";
import { useMediaQuery } from "@mui/material";
import FooterDae from "@/components/FooterDae";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function QuienesSomosLayout({ children }) {
  const matches = useMediaQuery('(min-width:600px)');
  const router = useRouter()

  return (
    <>
      {matches && <div style={{
        height: '520px',
        overflow: 'hidden',
        backgroundImage: `url(${carrousel01.src})`,
        backgroundPosition: 'center 30%',
        backgroundSize: 'cover'
      }}>
      </div>
      }

      <div className="row flex-column d-flex align-items-center sailec">
        <div className="col-12 col-lg-10" style={{ padding: 0 }}>
          <div>
            {matches &&
              <>
                <button className='btn mt-4 mb-5'
                  style={{
                    border: '1px solid #A6A6A6',
                    height: '56px',
                    width: '163px',
                    padding: '0px 24px',
                    borderRadius: '100px',
                    marginLeft: '76px'
                  }}
                  onClick={() => router.back()}
                >
                  <FaArrowLeft /> Volver
                </button>
                <ul>
                  <li>
                    <Link href="/quienes_somos/intervenciones-clinicas">
                      Intervenciones clínicas
                    </Link>
                  </li>
                  <li>
                    <Link href="/quienes_somos/intervenciones-grupales">
                      Intervenciones grupales
                    </Link>
                  </li>
                  <li>
                    <Link href="/quienes_somos/protocolo-de-accion-en-salud-mental">
                      Protocolo de acción en salud mental
                    </Link>
                  </li>
                </ul>
              </>
            }
            {children}
          </div>
        </div>
      </div>
      <FooterDae />

    </>

  );
}
