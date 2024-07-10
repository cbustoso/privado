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
                  Promoción y Prevención
                </Link>
              </li>
            </ul>
            <div className="tab-content tab-dsme-content">
              <div className={`tab-pane ${activeTab === 'promocion-y-prevencion' ? 'show active' : ''}`} id="promocion-y-prevencion">
                <h2>Promoción y Prevención</h2>
                <div className="blog-content">
                  <p>
                    El Departamento de Salud Mental de la UDP aborda la promoción y prevención en salud mental, centrando esfuerzos en mejorar el bienestar emocional y psicológico de la comunidad universitaria. Implementa estrategias para reducir los riesgos de trastornos mentales y desarrolla un Plan de Formación en Salud Mental para capacitar a docentes y administrativos en habilidades de manejo de crisis y primeros auxilios psicológicos, incluyendo cursos específicos orientados a mejorar la salud mental en contextos universitarios.
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