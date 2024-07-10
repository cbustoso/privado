'use client'
import { useState } from "react";
import Link from "next/link";
import FrequentAskedQuestions from "@/components/FAQ";
import { useMediaQuery } from "@mui/material";

const questions = [
  {
    id: 'question01',
    title: 'Psicoterapia breve',
    answer: `Ingresan casos de baja a mediana complejidad. Se puede trabajar uno o dos objetivos según el motivo de consulta. Proceso terapéutico de 8 a 10 sesiones como máximo.`
  },
  {
    id: 'question02',
    title: 'Acompañamiento psicológico',
    answer: `Ingresan casos de baja complejidad. Se trabaja un objetivo terapéutico en concreto. Proceso de 2 a 4 sesiones de duración.`
  },
  {
    id: 'question03',
    title: 'Grupos de acompañamiento',
    answer: `Espacio de contención, apoyo y compañía frente a problemáticas en torno a la salud mental de los estudiantes, mediante la realización de actividades lúdicas y conversación. No tiene criterios de exclusión y es de asistencia libre.`
  },
  {
    id: 'question04',
    title: 'Grupo psicopedagógico',
    answer: `Espacio psicoeducativo grupal, participativo y enfocado en el bienestar académico, a través de la realización de sesiones con temáticas especificas como: organización del tiempo, estrategias de estudio, estrés y ansiedad académica, entre otras. Es con inscripción previa y cupos limitados.`
  },
  {
    id: 'question05',
    title: 'Grupo psicoterapéutico',
    answer: `Grupo psicoterapéutico de contención y crecimiento personal, que tiene como objetivo el desarrollo de herramientas y recursos personales, para así afrontar de manera sana las problemáticas de salud mental y la vida universitaria. Se ingresa por entrevista de despeje y tiene criterios de exclusión.`
  },
  {
    id: 'question06',
    title: 'Atención psicopedagógica',
    answer: `Dispositivo orientado a apoyar y brindar herramientas al estudiantado para favorecer y mejorar los procesos de aprendizaje y el rendimiento académico.`
  },
]

const IntervencionesClinicas = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const [activeTab, setActiveTab] = useState('descripcion-general');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (

    <div className="row intervenciones-clinicas" style={{ paddingRight: '0px', marginRight: '0px' }}>
      <div className="col-12" style={{ paddingRight: '0px', marginRight: '0px' }}>
        <div className="card quienes-somos" style={{ padding: '0px', margin: '0px', border: 'none' }}>
          <div className="card-body" style={{ paddingRight: '0px', marginRight: '0px' }}>
            <h3 className={matches ? "blog-title" : "blog-title-sm"} style={{ marginLeft: matches ? '20px' : '0px', fontSize: '48px', lineHeight: '60px', fontWeight: 700, textWrap: 'balance' }}>
              Intervenciones clínicas
            </h3>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link
                  className={`nav-link-submenu ${activeTab === 'descripcion-general' ? 'quienes-somos-active' : 'nav-link-submenu'}`}
                  href="#descripcion-general"
                  onClick={() => handleTabClick('descripcion-general')}
                >
                  Descripción general
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link-submenu ${activeTab === 'solicitud-de-hora' ? 'quienes-somos-active' : 'nav-link-submenu'}`}
                  href="#solicitud-de-hora"
                  onClick={() => handleTabClick('solicitud-de-hora')}
                >
                  Solicitud de hora
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link-submenu ${activeTab === 'entrevista-de-despeje' ? 'quienes-somos-active' : 'nav-link-submenu'}`}
                  href="#entrevista-de-despeje"
                  onClick={() => handleTabClick('entrevista-de-despeje')}
                >
                  ¿Qué es la entrevista de despeje?
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link-submenu ${activeTab === 'convenios-y-profesionales-recomendados' ? 'quienes-somos-active' : 'nav-link-submenu'}`}
                  href="#convenios-y-profesionales-recomendados"
                  onClick={() => handleTabClick('convenios-y-profesionales-recomendados')}
                >
                  Convenios y Profesionales recomendados
                </Link>
              </li>
            </ul>
            <div className="tab-content tab-dsme-content">
              <div className={`tab-pane ${activeTab === 'descripcion-general' ? 'show active' : ''}`} id="descripcion-general">
                <h2>Descripción General</h2>
                <div className="blog-content">
                  <p>
                    En el área de intervención clínica el equipo del Departamento de Salud Mental Estudiantil realiza contención y apoyo emocional, acompañamiento e intervenciones psicológicas individuales breves e intervención grupal terapéutica gratuitas, a todos/as aquellos/as estudiantes de pregrado de la universidad, que lo soliciten y que manifiesten dificultades de tipo emocional, relacional, social, de rendimiento académico y/o vocacional.

                    En caso de requerir una atención especializada, de urgencia o de largo plazo, se realizan derivaciones a las instancias pertinentes con convenio UDP o al sistema de salud público o privado, según sea la previsión de cada estudiante. El/la estudiante derivado/a, mantendrá atenciones en el DSME hasta que ingrese formalmente al tratamiento en el lugar de derivación determinado, para así resguardar su bienestar.
                  </p>
                </div>

                <FrequentAskedQuestions questions={questions} />
              </div>
              <div className={`tab-pane ${activeTab === 'solicitud-de-hora' ? 'show active' : ''}`} id="solicitud-de-hora">
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
              </div>
              <div className={`tab-pane ${activeTab === 'entrevista-de-despeje' ? 'show active' : ''}`} id="entrevista-de-despeje">
                <h2>¿Qué es la entrevista de despeje?</h2>
                <div className="blog-content">
                  <p>Cuando agendas una hora, estás agendando para una entrevista inicial de despeje. En esta entrevista se indaga sobre la solicitud de atención y características de la situación, como grado de sintomatología, recursos personales, redes de apoyo, entre otros.
                  </p>
                  <p>A partir de la entrevista inicial de despeje se define cuál es el camino más adecuado para las características particulares del o la estudiante, pudiendo ingresar a acompañamiento psicológico, psicoterapia breve, atención psicopedagógica, grupo psicoterapéutico o derivación externa.</p>
                </div>
              </div>
              <div className={`tab-pane ${activeTab === 'convenios-y-profesionales-recomendados' ? 'show active' : ''}`} id="convenios-y-profesionales-recomendados">
                <h2>Convenios y Profesionales recomendados</h2>
                <div className="blog-content">
                  <h3>Convenios</h3>
                  <ul>
                    <li>
                      CEPS Centro Psicológico Universidad Alberto Hurtado. Atención online y presencial. Aranceles de bajo costo. Contacto correo ceps@uahurtado.cl, teléfono +56968410676, whatsapp +56975198912
                    </li>
                    <li>
                      Centro de Salud Mosaicos. Atención online y presencial. Arancel $25.000. Contacto correo mosaicos.psi@gmail.com, o en Formulario Realizar solicitud de atención a través de correo institucional.
                    </li>
                    <li>
                      Centro Decir. Atención online $15.000 y atención presencial $18.000. Contacto a través de página web https://capdecir.cl/, o correo electrónico capdecir@gmail.com. Realizar solicitud indicando que son estudiantes UDP.
                    </li>
                    <li>
                      Centro Orgánico de Salud. Atención online y presencial. Arancel Fonasa $15.000, Isapre o sin previsión $18.000. Contacto correo electrónico contacto@centrorganico.cl, teléfono +56222611397. Realizar solicitud indicando que son estudiantes UDP.
                    </li>
                  </ul>
                  <h3>Profesionales recomendados</h3>
                  <p>
                    En caso de que requieras atención psicológica y no encuentres horas disponibles dentro del Departamento de Salud Mental, disponemos de un listado de profesionales recomendados, a los que se puede acceder a costo preferencial, señalando que son estudiantes UDP.
                  </p>
                  <p>
                    *Importante: Los profesionales han sido entrevistados por el Departamento de Salud Mental, pero no forman parte de la UDP, por lo que son atenciones particulares a costo preferencial, y no derivaciones desde el Departamento de Salud Mental de la Universidad Diego Portales
                  </p>
                  <ul>
                    <li>
                      Psicóloga Nadiesna Olea Rivas. Orientación Cognitivo conductual. Atención online, valor FONASA $13.000, ISAPRE $15.000. Mail de contacto: nadiesna.olea.rivas@gmail.com
                    </li>
                    <li>
                      Psicóloga Lorena Espinoza Gálvez. Orientación integrativa. Atención presencial FONASA $12.800. Atención particular online con arancel diferenciado a estudiantes $15.000. Mail de contacto: lorena.espinozagal@gmail.com
                    </li>
                    <li>
                      Psicóloga Katherine Veloso D. Orientación psicoanalítica. Atención Online. Consultas por Fonasa, particular e isapre. Valor $16.000. Mail de contacto: ps.katherinevelosodiaz@gmail.com.
                    </li>
                    <li>
                      Benjamín Vera B. Orientación psicoanalítica. Atención Online. Consultas Particulares. Valor: rango desde $12.000. Correo de contacto: b.vera03@ufromail.cl
                    </li>
                    <li>
                      José Brizuela. Orientación psicoanalítica. Atención online y particular. Valor: rango desde $8.000 a $15.000. Correo de contacto: brizuelajosec@gmail.com
                    </li>
                    <li>
                      Constanza Barriga. Orientación Sistémica. Atención online. Consulta Isapre y particular. Valor: entre $20.000 y $25.000. Correo de contacto: ps.cuentaconmigo@gmail.com
                    </li>
                    <li>
                      Olga Conley G. Orientación Humanista integrativa. Atención online y presencial. Consulta particular. Valor: $10.000. Correo de contacto: olga.conleygarrido@gmail.com
                    </li>
                    <li>
                      Eliana Rodríguez. Orientación Psicoanalítica. Atención online y presencial. Consulta particular e isapres. Correo de contacto: merodriguez1@uc.cl
                    </li>
                    <li>
                      Karina Castillo V. Orientación Psicoanalítica. Atención Online. Consulta particular e isapres. Valor: $20.000. Correo de contacto: Ps.karina.castillo@gmail.com
                    </li>
                    <li>
                      Eduardo Guajardo. Orientación psicoanalítica. Atención Online. Consulta isapres. Correo de contacto: eduardo.guajardo@ug.uchile.cl
                    </li>
                    <li>
                      Bárbara Ruz. Orientación Sistémica. Atención online. Consulta FONASA, particular e isapres. Valor: de $10.000 a $15.000. Correo de contacto: barbararuzb@gmail.com
                    </li>
                    <li>
                      Vanesa Arenas M. Orientación  Terapia de Aceptación y Compromiso /cognitivo-conductual. Atención online y particular. Valor: entre $12.000 y $25.000. Correo de contacto: vanesa.arenas.va@gmail.com
                    </li>
                    <li>
                      Alejandro Goye. Orientación Integrativa. Atención Online (después de 18:00 hrs.). Consulta Fonasa particular e isapres. Valor $9.310 Fonasa y $15.000 Particular. Correo de contacto: psgoye@gmail.com
                    </li>
                    <li>
                      Hernán Fuenzalida. Orientació  Psicoanalítica. Atención online. Consulta particular. Valor: desde $17.000. Correo de contacto: hernanfuenzac@gmail.com
                    </li>
                    <li>
                      Andrés Vásquez. Orientación Cognitivo Conductual. Atención Online. Consulta Fonasa (en tramite), Particular e Isapres. Correo de contacto ndrsvsqz@gmail.com
                    </li>
                    <li>
                      Karina Garrido. Terapeuta Ocupacional Presencial. Consulta Particular. $15.000. TOMA DE TEST ADOS-2 (TEA) ADULTOS $70.000 to.karinagarrido@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntervencionesClinicas;