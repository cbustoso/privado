'use client'
import { useState } from "react";
import { Help } from "@mui/icons-material"
import CarouselColor from "@/components/CarrouselColor";

const Recomendaciones = () => {
  const [containers, setContainers] = useState([
    {
      tituloFrente: '¿Sabías que la UDP tiene un programa sobre Suicidio?',
      tituloAtras: 'Programa ACÉRCATE',
      contenido: 'El programa "ACÉRCATE" cumple el objetivo de prevenir el suicidio, en todas sus fases, dentro de la Universidad.',
      url: 'https://saludmentalestudiantil.udp.cl/acercate/',
      id: '01',
      visible: true
    },
    {
      tituloFrente: '¿Sabías que en la UDP nos preocupamos por tu consumo de drogas y alcohol?',
      tituloAtras: 'Programa DECIDE',
      contenido: 'El programa "DECIDE" tiene el objetivo de prevenir el uso y abuso de sustancias como drogas y alcohol en la comunidad educativa.',
      url: 'https://saludmentalestudiantil.udp.cl/decide/',
      id: '02',
      visible: true
    },
    {
      tituloFrente: '¿Sabías que existe una evaluación de riesgo suicida?',
      subtitulo: 'Y puedes aplicarla en ti mismo.',
      tituloAtras: 'Escala de Clasificación de Riesgo Suicida de Columbia',
      contenido: 'Es una escala destinada a evaluar severidad de la ideación y la conducta suicida durante el último mes en pacientes con 12 años o más. Este instrumento ha sido probado y evaluado científicamente en varios contextos, y su principal valor es que no necesita ser aplicado por un especialista. Personal de colegio, personal de la salud y otros pueden hacer uso de ella.',
      url: 'https://saludmentalestudiantil.udp.cl/wp-content/uploads/2022/09/ESCALA-DE-COLUMBIA_Imhay.pdf',
      id: '03',
      visible: true
    },

  ]);

  const handleMouseOver = (containerId) => {
    // Al poner el mouse sobre un contenedor, ocultamos el primero y mostramos el segundo
    const updatedContainers = containers.map((container) => {
      if (container.id === containerId) {
        return { ...container, visible: false };
      }
      return container;
    });
    setContainers(updatedContainers);
  };

  const handleMouseLeave = (containerId) => {
    // Al sacar el mouse de encima, mostramos el primer contenedor nuevamente
    const updatedContainers = containers.map((container) => {
      if (container.id === containerId) {
        return { ...container, visible: true };
      }
      return container;
    });
    setContainers(updatedContainers);
  };


  return (
    <>
      <div className="row flex-column d-flex align-items-center roboto">
        <div className="col-12 col-lg-10">
          <div className="card">
            <div className="card-body flex-row d-flex justify-content-center">
              <h3 style={{ fontSize: '50px' }}>¿Sabías que...?</h3>
            </div>

            <div className="col-12" style={{ color: 'white', height: 'fitContent' }} >
              {containers.map(container => (

                <div
                  key={container.id}
                  className={`container ${container.visible ? '' : 'hidden'}`}
                  onMouseEnter={() => handleMouseOver(container.id)}
                  onMouseLeave={() => handleMouseLeave(container.id)}
                >
                  {!container.visible && <div
                    className="form-heading d-flex flex-column align-items-center justify-content-center"
                    style={{
                      backgroundColor: '#4054b2',
                      minHeight: '286px',
                      height: '100%',
                      margin: '40px 10px',
                      textAlign: 'center',
                      borderRadius: '200px',
                      padding: '40px',
                      fontSize: '14px'
                    }}
                  >
                    <h4>{container.tituloAtras}</h4>
                    <p>{container.contenido}</p>
                    <button className="btn btn-outline-light">
                      <a href={container.url} style={{ color: 'white' }}>¿Quieres saber más?</a>
                    </button>
                  </div>
                  }
                  {container.visible && <div
                    className="form-heading d-flex flex-column align-items-center justify-content-center"
                    style={{
                      backgroundColor: '#1abc9c',
                      minHeight: '286px',
                      height: '100%',
                      margin: '40px 10px',
                      textAlign: 'center',
                      borderRadius: '200px',
                      padding: '40px',
                      fontSize: '24px'
                    }}
                  >
                    <Help />
                    <p>{container.tituloFrente}</p>
                    {container?.subtitulo &&
                      <small>
                        {container.subtitulo}
                      </small>
                    }
                  </div>}
                </div>
              ))}
            </div>
            <div>
              <h3 style={{ fontSize: '50px' }}>Primeros Auxilios Psicológicos (PAP)</h3>
              <p>
                ¿Sabías que los Primeros Auxilios Psicológicos los podemos aplicar todos? No necesariamente debe hacerlo un profesional de la salud mental. Por eso te dejamos algunos consejos que te pueden ayudar a aplicar primeros auxilios psicológicos cuando alguien lo necesite.
              </p>
            </div>
            <div>
              <CarouselColor />
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Recomendaciones