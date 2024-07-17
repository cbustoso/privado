'use client'
import { useState } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { useMediaQuery } from "@mui/material";

const ProtocoloAccionSaludMental = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const [activeTab, setActiveTab] = useState('protocolo-de-accion-en-salud-mental');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (

    <div className="row protocolo" style={{ paddingRight: '0px', marginRight: '0px' }}>
      <div className="col-12" style={{ paddingRight: '0px', marginRight: '0px' }}>
        <div className="card quienes-somos" style={{ padding: '0px', margin: '0px', border: 'none' }}>
          <div className="card-body" style={{ paddingRight: '0px', marginRight: '0px' }}>
            <h3 className={matches ? "blog-title" : "blog-title-sm"} style={{ marginLeft: matches ? '20px' : '0px', fontSize: '48px', lineHeight: '60px', fontWeight: 700, textWrap: 'balance' }}>
              Protocolo de acción en salud mental
            </h3>
       
            <div className="tab-content tab-dsme-content">
              <div className={`tab-pane ${activeTab === 'protocolo-de-accion-en-salud-mental' ? 'show active' : ''}`} id="protocolo-de-accion-en-salud-mental">
                <div className="blog-content">
                  <p>
                    Este protocolo tiene como objetivo establecer las acciones y directrices estandarizadas que permitan realizar una respuesta adecuada consistente en identificar, contener y derivar casos de urgencia y emergencia de carácter psiquiátrico y/o psicológico ocurridos en la Universidad.
                  </p>
                  <p>
                    El documento, pone a disposición una serie de directrices y flujogramas de fácil comprensión, con el fin de facilitar las respuestas frente a sucesos de Salud Mental.
                  </p>
                  <Link href="https://dae.udp.cl/cms/wp-content/uploads/2022/05/Protocolo-de-accion-Salud-Mental-2022-1.pdf">
                    <FaArrowRightLong /> Ver protocolo aquí
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProtocoloAccionSaludMental;