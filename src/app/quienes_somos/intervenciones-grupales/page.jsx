'use client'
import { useState } from "react";
import Link from "next/link";
import FrequentAskedQuestions from "@/components/FAQ";
import { useMediaQuery } from "@mui/material";
import { BsFillCloudHaze2Fill } from "react-icons/bs";

const questions = [
  {
    id: 'question01',
    title: 'Té-Acompaño',
    answer: `
                Es una instancia de encuentro presencial, diseñado para ser un espacio de contención, acompañamiento y apoyo emocional, en donde los temas serán propuestos por los participantes sobre variadas temáticas de salud mental y otros temas de interés.`
  }
]

const IntervencionesGrupales = () => {
  const [activeTab, setActiveTab] = useState('basictab1');
  const matches = useMediaQuery('(min-width:600px)');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    // <section className="comp-section" id="comp_tabs">
    <div className="row intervenciones-grupales" style={{ paddingRight: '0px', marginRight: '0px' }}>
      <div className="col-12" style={{ paddingRight: '0px', marginRight: '0px' }}>
        <div className="card quienes-somos" style={{ padding: '0px', margin: '0px', border: 'none' }}>
          <div className="card-body" style={{ paddingRight: '0px', marginRight: '0px' }}>
            <h3 className={matches ? "blog-title" : "blog-title-sm"} style={{ marginLeft: matches ? '20px' : '0px', fontSize: '48px', lineHeight: '60px', fontWeight: 700, textWrap: 'balance' }}>
              Intervenciones grupales
            </h3>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeTab === 'basictab1' ? 'active' : ''}`}
                  href="#basictab1"
                  onClick={() => handleTabClick('basictab1')}
                >
                  Descripción general
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeTab === 'basictab2' ? 'active' : ''}`}
                  href="#basictab2"
                  onClick={() => handleTabClick('basictab2')}
                >
                  Grupos de apoyo y acompañamiento
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeTab === 'basictab3' ? 'active' : ''}`}
                  href="#basictab3"
                  onClick={() => handleTabClick('basictab3')}
                >
                  Intervenciones focalizadas
                </Link>
              </li>
            </ul>
            <div className="tab-content">
              <div className={`tab-pane ${activeTab === 'basictab1' ? 'show active' : ''}`} id="basictab1">
                <h2>Descripción General</h2>
                <div className="blog-content">
                  <p>El área de intervenciones grupales forma parte del Departamento de Salud Mental Estudiantil. Ésta tiene como objetivo ofrecer diversos espacios para fomentar el desarrollo de estrategias y herramientas para el cuidado de la Salud Mental, la obtención de un mayor bienestar y una experiencia universitaria integral y satisfactoria.
                  </p>
                </div>
              </div>

              <div className={`tab-pane ${activeTab === 'basictab2' ? 'show active' : ''}`} id="basictab2">
                <h2>Grupos de apoyo y acompañamiento</h2>
                <div className="blog-content">
                  <p>Intervenciones terapéuticas grupales, dirigidas a estudiantes,  basadas en un espacio seguro,  de interacción, participación, contención y construcción conjunta y colectiva del espacio. Se realizarán en un formato presencial y online, con un cupo de 10 a 15 participantes por grupo.</p>
                </div>

                <FrequentAskedQuestions questions={questions} />


              </div>
              <div className={`tab-pane ${activeTab === 'basictab3' ? 'show active' : ''}`} id="basictab3">
                <h2>Intervenciones Focalizadas</h2>
                <div className="blog-content">
                  <p>Intervenciones psicoeducativas dirigidas, cuyo objetivo es abordar temáticas que las escuelas u otros departamentos de la Universidad consideren relevantes para el desempeño académico y la salud mental de los y las estudiantes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </section>
  )
}


export default IntervencionesGrupales;