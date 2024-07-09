'use client'
import { useState } from "react";
import Link from "next/link";

const PromocionYPrevencion = () => {
  const [activeTab, setActiveTab] = useState('basictab1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  }

  return (
    <div className="row" style={{ paddingRight: '0px', marginRight: '0px' }}>
      <div className="col-12" style={{ paddingRight: '0px', marginRight: '0px' }}>
        <div className="card" style={{ padding: '0px', margin: '0px' }}>
          <div className="card-body" style={{ paddingRight: '0px', marginRight: '0px' }}>
            <h3>Promoción y Prevención</h3>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeTab === 'basictab1' ? 'active' : ''}`}
                  href="#basictab1"
                  onClick={() => handleTabClick('basictab1')}
                >
                  ¡Visita la web de promoción y prevención!
                </Link>
              </li>
            </ul>
            <div className="tab-content">
              <div className={`tab-pane ${activeTab === 'basictab1' ? 'show active' : ''}`} id="basictab1">
                <h4>¡Visita la web de promoción y prevención!</h4>
                <p>
                  ¡Te invitamos a cuidar tu bienestar mental! En estos tiempos tan desafiantes, es fundamental priorizar nuestra salud mental. Hemos preparado recursos en línea que te brindarán consejos, herramientas y recursos para promover y preservar tu salud mental.
                </p>
                <p>
                  Visita nuestro enlace especial de promoción y prevención en salud mental:
                </p>

                https://saludmentalestudiantil.udp.cl/
                
                <p>
                  En este sitio encontrarás:
                </p>
                <ul>
                  <li>
                    Información sobre actividades del Departamento de Salud Mental Estudiantil
                  </li>
                  <li>
                    Información sobre la prevención del suicidio, prevención del consumo de alcohol y drogas y autocuidado, entre otras.
                  </li>
                  <li>
                    Recursos prácticos de cuidado en salud mental
                  </li>
                </ul>
                <p>
                  No subestimes el valor de cuidar tu bienestar emocional. Visita el enlace y descubre cómo puedes mejorar tu calidad de vida. ¡Tu salud mental es importante!
                </p>
                <p>
                  ¡Haz clic en el enlace y comienza tu viaje hacia una mente más saludable hoy mismo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromocionYPrevencion;