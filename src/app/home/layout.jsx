"use client"
import FooterDae from "@/components/FooterDae";
import Link from "next/link";
import Carrousel from "@/components/Carrousel";
import useMediaQuery from '@mui/material/useMediaQuery';
import { banner01, banner02, banner03 } from "@/components/imagepath";

export default function DashLayout({ children }) {
  const matches = useMediaQuery('(min-width:600px)');
  const blogs = [
    {
      imagen: banner01,
      titulo: 'Manual de Autocuidado para Estudiantes',
      texto: 'El presente manual presenta algunas estrategias que pueden ser útiles para mantenerte saludable tanto en el ámbito físico, como en el psicológico, además de entregar herramientas.',
      id: '01',
      link: 'https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/11/230905_UDP_ManualAutocuidado-2.pdf'
    },
    {
      imagen: banner02,
      titulo: 'Manual de Prevención del Consumo de Alcohol y Drogas para Estudiantes',
      texto: 'En esta guía podrás conocer sobre algunas de las drogas más consumidas por la población universitaria, aprenderás a reconocer señales que pudieran indicar un consumo de riesgo o problemático.',
      id: '02',
      link: 'https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/11/230714_UDP_ManualPrevencionDrogasyAlcohol-5.pdf'
    },
    {
      imagen: banner03,
      titulo: 'Manual de Prevención del Suicidio para Estudiantes',
      texto: 'En esta guía podrás conocer sobre el espectro suicida, además de reconocer factores protectores y de riesgo asociados al suicidio, junto con estrategias que te puedan ayudar a prevenir su ocurrencia.',
      id: '03',
      link: 'https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/11/230905_UDP_ManualPrevencionSuicidio-4.pdf'
    }
  ]

  return (
    <>
      <div className="page-wrapper" style={{ marginLeft: 'unset', display: 'flex', justifyContent: 'center' }}>
        <div className="content col-12 col-lg-10 d-flex flex-column" style={{ backgroundColor: 'white', boxShadow: 'inset 0px 5px 5px 0px rgba(0,0,0,0.25)' }} >
          {/* Page Header */}
          <div className="page-header" >
            <div className="row justify-content-center">
              <div className="col-sm-12">
                <div style={{ textAlign: 'center' }}>
                  <h3 className="roboto" style={{ fontSize: '43px' }}>
                    <span>Departamento </span>
                    <span style={{ fontWeight: '700' }}>Salud mental </span>
                    <span>UDP</span>
                  </h3>
                </div>
              </div>

              {/* <div className="row">
                <div className="d-flex justify-content-center" style={{ textAlign: 'center' }}>

                  <Carrousel slides={blogs.slice(0, 5)} matches={matches} parentWidth={950} />
                </div>
              </div> */}
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div >
              {children}

            </div>
          </div>
        </div>
      </div>
      <FooterDae />
    </>
  )
}
