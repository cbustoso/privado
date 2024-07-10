'use client'
import { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";

const PromocionYPrevencion = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const [activeTab, setActiveTab] = useState('promocion-y-prevencion');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  }

  return (
    <div className="row prevencion" style={{ paddingRight: '0px', marginRight: '0px' }}>
      <div className="col-12" style={{ paddingRight: '0px', marginRight: '0px' }}>
        <div className="card quienes-somos" style={{ padding: '0px', margin: '0px', border: 'none' }}>
          <div className="card-body" style={{ paddingRight: '0px', marginRight: '0px' }}>
            <h3 className={matches ? "blog-title" : "blog-title-sm"} style={{ marginLeft: matches ? '20px' : '0px', fontSize: '48px', lineHeight: '60px', fontWeight: 700, textWrap: 'balance' }}>
              Promoción y Prevención
            </h3>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link
                  className={`nav-link-submenu ${activeTab === 'promocion-y-prevencion' ? 'quienes-somos-active' : 'nav-link-submenu'}`}
                  href="#promocion-y-prevencion"
                  onClick={() => handleTabClick('promocion-y-prevencion')}
                >
                  ¡Visita la web de promoción y prevención!
                </Link>
              </li>
            </ul>
            <div className="tab-content tab-dsme-content">
              <div className={`tab-pane ${activeTab === 'promocion-y-prevencion' ? 'show active' : ''}`} id="promocion-y-prevencion">
                <h2>¡Visita la web de promoción y prevención!</h2>
                <div className="blog-content">
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
    </div>
  )
}

export default PromocionYPrevencion;