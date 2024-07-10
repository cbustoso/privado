'use client'
import Link from "next/link";
import { carrousel01 } from "@/components/imagepath";
import { useMediaQuery } from "@mui/material";
import FooterDae from "@/components/FooterDae";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";

export default function QuienesSomosLayout({ children }) {
  const matches = useMediaQuery('(min-width:600px)');
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (href) => {
    console.log('HREF', pathname);
    return pathname === href ? 'quienes-somos-active' : 'nav-link-quienes-somos';
  };
  
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

      <div className="row flex-column d-flex align-items-center sailec mt--md-5 section-quienes-somos">
        <div className="col-12 col-lg-10 mt--md-5" style={{ padding: 0 }}>
          <div>

            <nav className="navbar navbar-expand-lg navbar-light ">
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
                </>
              }
              {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button> */}

              <div  id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item" >
                    <Link 
                    className={`nav-link nav-link-quienes-somos ${isActive('/quienes_somos')}`} 
                    href="/quienes_somos">
                      Quiénes somos
                    </Link>
                  </li>
                  <li className="nav-item" >
                    <Link 
                    className={`nav-link nav-link-quienes-somos  ${isActive('/quienes_somos/intervenciones-clinicas')}`}  
                    href="/quienes_somos/intervenciones-clinicas">
                      Intervenciones clínicas
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                    className={`nav-link nav-link-quienes-somos ${isActive('/quienes_somos/intervenciones-grupales')}`}  
                    href="/quienes_somos/intervenciones-grupales">
                      Intervenciones grupales
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                    className={`nav-link nav-link-quienes-somos ${isActive('/quienes_somos/protocolo-de-accion-en-salud-mental')}`}  
                    href="/quienes_somos/protocolo-de-accion-en-salud-mental">
                      Protocolo de acción en salud mental
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                    className={`nav-link nav-link-quienes-somos ${isActive('/quienes_somos/intervencion-en-promocion-y-prevencion')}`}  
                    href="/quienes_somos/intervencion-en-promocion-y-prevencion">
                      Promoción y prevención
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            {children}
          </div>
        </div>
      </div>
      <FooterDae />

    </>

  );
}
