import Header from "@/components/Header";
import BasicCard from "@/components/BasicCard";
import Box from '@mui/material/Box';
import Image from "next/image";
import { modelo_dsme } from "@/components/imagepath";

export default function Dash() {

  return (
    <>
      <div className="row flex-column d-flex align-items-center">
        <div className="col-12 col-lg-10">
          <div className="card">
            <div className="card-body flex-row d-flex justify-content-center">
              <h3>¿Qué es el DSME?</h3>
            </div>
            <div className="card-body flex-md-column flex-lg-row d-flex align-self-center">
              <Box sx={{
                display: 'flex',
                flexFlow: { xs: 'column', lg: 'row' },
                gap: { xs: '20px', lg: '50px' }
              }}>
                <BasicCard
                  maxWidth={400}
                  bgColor={'transparent'}
                  fontSize={'20px'}
                  border={'B82925'}
                >
                  Primero, debes saber que <strong>pedir ayuda no es un signo de debilidad ni un acto egoísta. Sino, todo lo contrario. Pedir ayuda es un acto de valentía y amor propio</strong>. Y para iniciar ese proceso, es importante saber dos cosas: <strong>¿Cuándo y donde pedir ayuda?</strong>
                </BasicCard>
                <BasicCard
                  maxWidth={400}
                  bgColor={'transparent'}
                  fontSize={'20px'}
                  border={'B82925'}
                >
                  Nuestro modelo de intervención se basa en la <strong>Promoción, Prevención, Atención Grupal y Atención Clínica Individual</strong>; con la finalidad de prestar apoyo para enfrentar las diversas problemáticas psicosociales que se presentan en el transcurso de la vida estudiantil.
                </BasicCard>
              </Box>
            </div>

            <div className="card-body flex-column d-flex align-items-center">
              <h3>¿Cómo solicitar atención en el departamento?</h3>
              <Image
                src={modelo_dsme}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                width={500}
                height={300}
                alt=""
              />
            </div>

            <div className="card-body flex-column d-flex align-items-center">
              <button className="btn btn-danger me-1 p-2">Haz click aquí para solicitar hora</button>
            </div>

            <div className="card-body flex-column d-flex align-items-center">
              <h3>¿Tienes preguntas o sugerencias?</h3>
              <p style={{ textAlign: 'center' }}>Puedes preguntar o sugerir lo que quieras, es totalmente anónimo, por lo que puedes sentirte seguro. Tus preguntas serán respondidas en el Canal de WhatsApp.</p>
              <button className="btn btn-secondary me-1 p-2">
                <a style={{color: 'white'}} href="https://forms.gle/nFShGTzpaBKcvhCX9">
                  Buzón de preguntas
                </a>
              </button>

            </div>

            <div className="card-body flex-column d-flex align-items-center">
              <h3>¿Dónde se encuentra el</h3>
              <h3><strong>DSME?</strong></h3>
              <div className="col-12 col-lg-6 d-flex justify-content-center">
                <iframe style={{ height: '400px', width: '100%' }} loading="lazy" src="https://maps.google.com/maps?q=Manuel%20Rodriguez%20343&amp;t=m&amp;z=14&amp;output=embed&amp;iwloc=near" title="Manuel Rodriguez 343" aria-label="Manuel Rodriguez 343"></iframe>
              </div>

              <p style={{ fontSize: '20px' }}>Av. Manuel Rodríguez 343 – Piso 2</p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
