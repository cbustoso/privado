import Header from "@/components/Header";
import BasicCard from "@/components/BasicCard";
import Box from '@mui/material/Box';
import Image from "next/image";
import { redes_externas, como_pedir_ayuda } from "@/components/imagepath";

export default function PedirAyuda() {

  return (
    <>
      <div className="row flex-column d-flex align-items-center roboto">
        <div className="col-12 col-lg-10">
          <div className="card">
            <div className="card-body flex-row d-flex justify-content-center">
              <h3>¿Cómo pedir ayuda?</h3>
            </div>
            <div className="card-body flex-md-column flex-lg-row d-flex align-self-center">
              <Box sx={{
                display: 'flex',
                flexFlow: 'column',
                gap: { xs: '20px', lg: '50px' },
                fontSize: '20px',
                textAlign: 'center'
              }}>
                <p>
                  Primero, debes saber que <i><strong>pedir ayuda no es un signo de debilidad ni un acto egoísta. Sino, todo lo contrario. Pedir ayuda es un acto de valentía y amor propio</strong></i>. Y para iniciar ese proceso, es importante saber dos cosas: <i><strong>¿Cuándo y donde pedir ayuda?</strong></i>
                </p>
              </Box></div>
            <div className="card-body flex-row d-flex justify-content-center">
              <h3>¿Cuándo pedir ayuda?</h3>
            </div>
            <p></p>
            <div className="card-body flex-md-column flex-lg-row d-flex align-self-center">
              <Box sx={{
                display: 'flex',
                flexFlow: 'column',
                gap: { xs: '20px', lg: '50px' },
                fontSize: '20px',
                textAlign: 'center'
              }}>
                <p>
                  A menudo aparecen ciertas señales que nos pueden indicar que es necesario buscar apoyo profesional o de otras personas. Te recomendamos que en caso de que presentes alguno de estos ítems, solicites ayuda y converses de lo que te pasa.
                </p>
              </Box>
            </div>
            <div className="card-body flex-column d-flex align-items-center">
              <Image
                src={como_pedir_ayuda}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  border: '1px solid black'
                }}
                width={500}
                height={300}
                alt=""
              />
            </div>
            <div className="card-body flex-column d-flex align-items-center">
              <h3>Cuestionarios de Autoevaluación</h3>
              <p style={{ fontSize: '20px' }}>
                A continuación te dejamos algunos test que pueden servirte para despejar información respecto a tus sospechas. Ambos test pueden ser evaluados por un profesional y/o por ti mismo. Lo anterior, no implica que puedas realizar un diagnóstico, pero sí puede entregarte claridad respecto a las acciones a realizar.
              </p>

              <div>

                <button className="btn btn-danger m-2">Test de ansiedad de Beck</button>
                <button className="btn btn-danger m-2">Test de síntomas de depresión</button>

              </div>
            </div>
            <div className="card-body flex-column d-flex align-items-center">
              <h3>¿A quién puedo acudir en la universidad?</h3>
              <p style={{ fontSize: '20px' }}>
                En la Universidad Diego Portales contamos con diversos canales para que puedas pedir ayuda en caso de que lo necesites. Aquí te dejamos algunos de los medios por los cuáles te puedes poner en contacto con el Departamento de Salud Mental (DSM) de nuestra Universidad.
              </p>
              <div>

                <button className="btn btn-secondary m-2">DAE - Salud mental</button>
                <button className="btn btn-secondary m-2">Correo Departamento Salud Mental</button>

              </div>
            </div>

            <div className="card-body flex-column d-flex align-items-center">
              <h3>Redes Externas</h3>
              <p style={{ fontSize: '20px' }}>
                Además de siempre poder contar con el Departamento de Salud Mental (DSM) de la Universidad, creemos que es muy importante que conozcas otras redes que también te pueden servir a ti o a otra persona, en esos momentos. Aquí te dejamos un afiche con contactos y aplicaciones especialistas en salud mental.
              </p>
            </div>

            <div className="col-10 card-body flex-column d-flex align-self-center">
              <Image
                src={redes_externas}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  border: '2px solid black'
                }}
                width={500}
                height={300}
                alt=""
              />
            </div>

            <div className="card-body flex-column d-flex align-items-center">
              <h3>Recomendación de Profesionales</h3>
              Es muy importante que puedas contar con el apoyo de un profesional a tiempo en tu proceso. Sin embargo, si los psicólogos del DSME tienen las agendas completas, tu puedes recurrir a alguno de los siguientes profesionales, los cuáles pasaran por un proceso de selección y pueden ayudarte con valores accesibles.
              <button className="btn btn-danger m-2">RECOMENDACIONES DE PROFESIONALES</button>

            </div>
          </div>
        </div>
      </div>
    </>

  );
}
