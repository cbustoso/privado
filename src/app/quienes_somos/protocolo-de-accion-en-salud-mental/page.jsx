'use client'
import { useState } from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const ProtocoloAccionSaludMental = () => {
  const [activeTab, setActiveTab] = useState('basictab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (

    <div className="row" style={{ paddingRight: '0px', marginRight: '0px' }}>
      <div className="col-12" style={{ paddingRight: '0px', marginRight: '0px' }}>
        <div className="card" style={{ padding: '0px', margin: '0px' }}>
          <div className="card-body" style={{ paddingRight: '0px', marginRight: '0px' }}>
            <h3 >Protocolo de acción en salud mental</h3>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeTab === 'basictab1' ? 'active' : ''}`}
                  href="#basictab1"
                  onClick={() => handleTabClick('basictab1')}
                >
                  Protocolo de acción en salud mental
                </Link>
              </li>
            </ul>
            <div className="tab-content">
              <div className={`tab-pane ${activeTab === 'basictab1' ? 'show active' : ''}`} id="basictab1">
                <h4>Protocolo de acción en salud mental</h4>
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

  )
}

export default ProtocoloAccionSaludMental;