'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import FrequentAskedQuestions from "@/components/FAQ";
import { useMediaQuery } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const questions = [
  {
    id: 'question01',
    title: 'Psicoterapia breve',
    answer: `Ingresan casos de baja a mediana complejidad. Se puede trabajar uno o dos objetivos según el motivo de consulta. Proceso terapéutico de 8 a 10 sesiones como máximo.`,
    bgColor: 'bg-blue'
  },
  {
    id: 'question02',
    title: 'Acompañamiento psicológico',
    answer: `Ingresan casos de baja complejidad. Se trabaja un objetivo terapéutico en concreto. Proceso de 2 a 4 sesiones de duración.`,
    bgColor: 'bg-red'
  },
  {
    id: 'question03',
    title: 'Grupos de acompañamiento',
    answer: `Espacio de contención, apoyo y compañía frente a problemáticas en torno a la salud mental de los estudiantes, mediante la realización de actividades lúdicas y conversación. No tiene criterios de exclusión y es de asistencia libre.`,
    bgColor: 'bg-green'
  },
  {
    id: 'question04',
    title: 'Grupo psicopedagógico',
    answer: `Espacio psicoeducativo grupal, participativo y enfocado en el bienestar académico, a través de la realización de sesiones con temáticas especificas como: organización del tiempo, estrategias de estudio, estrés y ansiedad académica, entre otras. Es con inscripción previa y cupos limitados.`,
    bgColor: 'bg-blue'
  },
  {
    id: 'question05',
    title: 'Grupo psicoterapéutico',
    answer: `Grupo psicoterapéutico de contención y crecimiento personal, que tiene como objetivo el desarrollo de herramientas y recursos personales, para así afrontar de manera sana las problemáticas de salud mental y la vida universitaria. Se ingresa por entrevista de despeje y tiene criterios de exclusión.`,
    bgColor: 'bg-red'
  },
  {
    id: 'question06',
    title: 'Atención psicopedagógica',
    answer: `Dispositivo orientado a apoyar y brindar herramientas al estudiantado para favorecer y mejorar los procesos de aprendizaje y el rendimiento académico.`,
    bgColor: 'bg-green'
  },
]

const IntervencionesClinicas = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const [activeTab, setActiveTab] = useState('descripcion-general');

  useEffect(() => {
    // Bootstrap JS requires window and document objects, which are not available in the Next.js SSR phase.
    if (typeof window !== "undefined" /* && typeof document !== "undefined" */) {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <div className="row intervenciones-clinicas" style={{ paddingRight: '0px', marginRight: '0px' }}>
        <div className="col-12" style={{ paddingRight: '0px', marginRight: '0px' }}>
          <div className="card quienes-somos" style={{ padding: '0px', margin: '0px', border: 'none' }}>
            <div className="card-body" style={{ paddingRight: '0px', marginRight: '0px' }}>
              <h3 className={matches ? "blog-title" : "blog-title-sm"} style={{ marginLeft: matches ? '20px' : '0px', fontSize: '48px', lineHeight: '60px', fontWeight: 700, textWrap: 'balance' }}>
                Intervenciones clínicas
              </h3>
              {/* <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link
                  className={`nav-link-submenu ${activeTab === 'descripcion-general' ? 'quienes-somos-active' : 'nav-link-submenu'}`}
                  href="#descripcion-general"
                  onClick={() => handleTabClick('descripcion-general')}
                >
                  Descripción general
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link
                  className={`nav-link-submenu ${activeTab === 'solicitud-de-hora' ? 'quienes-somos-active' : 'nav-link-submenu'}`}
                  href="#solicitud-de-hora"
                  onClick={() => handleTabClick('solicitud-de-hora')}
                >
                  Solicitud de hora
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link
                  className={`nav-link-submenu ${activeTab === 'entrevista-de-despeje' ? 'quienes-somos-active' : 'nav-link-submenu'}`}
                  href="#entrevista-de-despeje"
                  onClick={() => handleTabClick('entrevista-de-despeje')}
                >
                  ¿Qué es la entrevista de despeje?
                </Link>
              </li>
            </ul> */}
              <div className="tab-content tab-dsme-content">
                <div id="descripcion-general">
                  {/* <h2>Descripción General</h2> */}
                  <div className="blog-content">
                    <p>
                      En el área de intervención clínica el equipo del Departamento de Salud Mental Estudiantil realiza contención y apoyo emocional, acompañamiento e intervenciones psicológicas individuales breves e intervención grupal terapéutica gratuitas, a todos/as aquellos/as estudiantes de pregrado de la universidad, que lo soliciten y que manifiesten dificultades de tipo emocional, relacional, social, de rendimiento académico y/o vocacional.
                    </p>
                    <p>
                      En caso de requerir una atención especializada, de urgencia o de largo plazo, se realizan derivaciones a las instancias pertinentes con convenio UDP o al sistema de salud público o privado, según sea la previsión de cada estudiante. El/la estudiante derivado/a, mantendrá atenciones en el DSME hasta que ingrese formalmente al tratamiento en el lugar de derivación determinado, para así resguardar su bienestar.
                    </p>
                    {/* 
                  <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner sailec" style={{ color: 'white' }} >
                      <div className="carousel-item active bg-blue" style={{ height: '300px', textAlign: 'center', alignContent: 'center' }}>
                        <h3>Psicoterapia breve</h3>
                        <p style={{ width: '80%', margin: 'auto', textAlign: "center", color: 'white' }}>Ingresan casos de baja a mediana complejidad. Se puede trabajar uno o dos objetivos según el motivo de consulta. Proceso terapéutico de 8 a 10 sesiones como máximo</p>
                      </div>
                      <div className="carousel-item bg-red" style={{ height: '300px', textAlign: 'center', alignContent: 'center' }}>
                        <h3>Acompañamiento psicológico</h3>
                        <p style={{ width: '80%', margin: 'auto', textAlign: "center", color: 'white' }}>
                          Ingresan casos de baja complejidad. Se trabaja un objetivo terapéutico en concreto. Proceso de 2 a 4 sesiones de duración.
                        </p>
                      </div>
                      <div className="carousel-item bg-green" style={{ height: '300px', textAlign: 'center', alignContent: 'center' }}>
                        <h3>Grupos de acompañamiento</h3>
                        <p style={{ width: '80%', margin: 'auto', textAlign: "center", color: 'white' }}>
                          Espacio de contención, apoyo y compañía frente a problemáticas en torno a la salud mental de los estudiantes, mediante la realización de actividades lúdicas y conversación. No tiene criterios de exclusión y es de asistencia libre.
                        </p>
                      </div>
                      <div className="carousel-item bg-blue" style={{ height: '300px', textAlign: 'center', alignContent: 'center' }}>
                        <h3>Grupo psicopedagógico</h3>
                        <p style={{ width: '80%', margin: 'auto', textAlign: "center", color: 'white' }}>
                          Espacio psicoeducativo grupal, participativo y enfocado en el bienestar académico, a través de la realización de sesiones con temáticas especificas como: organización del tiempo, estrategias de estudio, estrés y ansiedad académica, entre otras. Es con inscripción previa y cupos limitados.
                        </p>
                      </div>
                      <div className="carousel-item bg-red" style={{ height: '300px', textAlign: 'center', alignContent: 'center' }}>
                        <h3>Grupo psicoterapéutico</h3>
                        <p style={{ width: '80%', margin: 'auto', textAlign: "center", color: 'white' }}>
                          Grupo psicoterapéutico de contención y crecimiento personal, que tiene como objetivo el desarrollo de herramientas y recursos personales, para así afrontar de manera sana las problemáticas de salud mental y la vida universitaria. Se ingresa por entrevista de despeje y tiene criterios de exclusión.
                        </p>
                      </div>
                      <div className="carousel-item bg-green" style={{ height: '300px', textAlign: 'center', alignContent: 'center' }}>
                        <h3>Atención psicopedagógica</h3>
                        <p style={{ width: '80%', margin: 'auto', textAlign: "center", color: 'white' }}>
                          Dispositivo orientado a apoyar y brindar herramientas al estudiantado para favorecer y mejorar los procesos de aprendizaje y el rendimiento académico.
                        </p>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div> */}
                  </div>

                  <FrequentAskedQuestions questions={questions} />
                </div>
                {/* <div className={`tab-pane ${activeTab === 'solicitud-de-hora' ? 'show active' : ''}`} id="solicitud-de-hora">
                <h2>Solicitud de hora</h2>
                <div className="blog-content">
                  <p>Para acceder a entrevista de despeje debes seguir los siguientes pasos:</p>
                  <ol>
                    <li>Ingresar al sitio de Solicitud de hora para entrevista de despeje</li>
                    <li>Completar el formulario</li>
                    <li>Tomar una hora en la agenda electrónica</li>
                    <li>Leer el consentimiento informado que se encuentra en el link</li>
                  </ol>
                  <strong>Importante*: Si no se completan los 3 primeros pasos, la hora no será agendada</strong>
                </div>
              </div> */}

              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="entrevista-de-despeje">

        <Section
          title={'¿Qué es la entrevista de despeje?'}
          image={'https://github.com/Niennis/imagesudp/blob/main/profesional01.jpg?raw=true'}
          left={false}
        >
          <p>Cuando agendas una hora, estás agendando para una entrevista inicial de despeje. En esta entrevista se indaga sobre la solicitud de atención y características de la situación, como grado de sintomatología, recursos personales, redes de apoyo, entre otros.
          </p>
          <p>A partir de la entrevista inicial de despeje se define cuál es el camino más adecuado para las características particulares del o la estudiante, pudiendo ingresar a acompañamiento psicológico, psicoterapia breve, atención psicopedagógica, grupo psicoterapéutico o derivación externa.</p>
        </Section>

        {/* 
<h2>¿Qué es la entrevista de despeje?</h2>
<div className="blog-content">
<p>Cuando agendas una hora, estás agendando para una entrevista inicial de despeje. En esta entrevista se indaga sobre la solicitud de atención y características de la situación, como grado de sintomatología, recursos personales, redes de apoyo, entre otros.
</p>
<p>A partir de la entrevista inicial de despeje se define cuál es el camino más adecuado para las características particulares del o la estudiante, pudiendo ingresar a acompañamiento psicológico, psicoterapia breve, atención psicopedagógica, grupo psicoterapéutico o derivación externa.</p>
</div> */}

      </div>
      <div>
        <Section
          title={'Intervenciones grupales'}
          image={'https://github.com/Niennis/imagesudp/blob/main/profesional01.jpg?raw=true'}
          left={true}
        >
          <p>Las intervenciones grupales en el Plan de Salud Mental Universitaria de la Universidad Diego Portales incluyen varias modalidades destinadas a apoyar a los estudiantes en aspectos específicos de su bienestar mental y académico. Se organizan grupos psicoterapéuticos, psicopedagógicos, y de acompañamiento.
          </p>
          <p> Estos grupos ofrecen sesiones enfocadas en temas como el manejo de la ansiedad, estrategias de estudio y apoyo emocional, promoviendo habilidades y estrategias dentro de un ambiente colaborativo y de apoyo mutuo entre los participantes.</p>
        </Section>
      </div>

      <div>
        <Section
          title={'Intervenciones psicoeducativas'}
          image={'https://github.com/Niennis/imagesudp/blob/main/profesional01.jpg?raw=true'}
          left={false}
        >
          <p>Intervenciones psicoeducativas dirigidas, cuyo objetivo es abordar temáticas que las escuelas u otros departamentos de la Universidad consideren relevantes para el desempeño académico y la salud mental de los y las estudiantes.</p>

        </Section>
      </div>
    </>
  )
}

export default IntervencionesClinicas;