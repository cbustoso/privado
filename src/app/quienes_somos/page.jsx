'use client'
import Header from "@/components/Header";
import BasicCard from "@/components/BasicCard";
import Box from '@mui/material/Box';
import Image from "next/image";
import { carrousel01, profesional01, map } from "@/components/imagepath";
import { useMediaQuery } from "@mui/material";
import { Card, CardMedia, CardActions, Typography } from "@mui/material";
import { } from "@/components/imagepath";
import { blogs } from "@/utils/blogs";
import FooterDae from "@/components/FooterDae";
import ReserveBtn from "@/components/ReserveBtn";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import SimpleBackdrop from "@/components/Backdrop";
import Elevation from "@/components/HowTo"

export default function Dash() {
  const matches = useMediaQuery('(min-width:600px)');
  const router = useRouter()

  return (
    <>
      {matches && <div style={{
        height: '520px',
        overflow: 'hidden'
      }}>
        <img
          alt="#"
          src={carrousel01.src}
          width={'100%'}
        />
      </div>
      }

      <div className="row flex-column d-flex align-items-center sailec">
        <div className="col-12 col-lg-10" style={{ padding: 0 }}>
          <div>
            {matches &&
              <button className='btn mt-4 mb-5'
                style={{
                  border: '1px solid #A6A6A6',
                  height: '56px',
                  width: '163px',
                  padding: '0px 24px',
                  borderRadius: '100px',
                  marginLeft: '76px'
                }}
                onClick={() => router.back()}
              >
                <FaArrowLeft /> Volver
              </button>}
            <div className="card-body flex-row d-flex justify-content-center mt-4">
              <h2
                className="sailec"
                style={{ fontWeight: 700, fontSize: '32px', lineHeight: '40px', textAlign: 'center', marginTop: !matches && '90px' }}>
                ¿Qué es el DSME?
              </h2>
            </div>
            <div className="row" style={{ margin: '0 10px' }} >
              {
                matches
                  ?
                  <div
                    className={`container col-12  d-flex  justify-content-center`}
                    style={{
                      fontSize: '24px',
                      fontWeight: 400,
                      lineHeight: '32px',
                      borderRadius: '12px',
                      marginTop: '20px'
                    }}
                  >
                    <Card
                      className='col-12 col-lg-4'
                      sx={{
                        boxShadow: 0,
                        display: 'inline-block',
                        padding: '2em 0',
                        width: '',
                      }}>
                      <CardMedia
                        component="img"
                        height="240"
                        image={profesional01.src}
                        sx={{ borderRadius: '8px' }}
                      />
                    </Card>

                    <Card
                      className='col-12 col-lg-8'
                      sx={{
                        boxShadow: 0,
                        display: 'inline-block',
                        height: matches ? "100%" : "fit-content",
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        paddingBottom: '10px',
                        padding: '2em',
                      }}>

                      <Typography
                        variant="body2"
                        className="sailec"
                        sx={{
                          color: '#000',
                          // textWrap: 'balance',
                          fontSize: '20px',
                          lineHeight: '28px'
                        }}>
                        El <strong>Departamento de Salud Mental Estudiantil (DSME)</strong> es un equipo cuya misión es contribuir al bienestar psicológico y emocional del estudiantado de la Universidad Diego Portales.
                      </Typography>

                      <Typography
                        variant="body2"
                        className="sailec"
                        sx={{
                          color: '#000',
                          // textWrap: 'balance',
                          fontSize: '20px',
                          lineHeight: '28px'
                        }}>
                        Nuestro modelo de intervención se basa en la <strong>Promoción, Prevención, Atención Grupal y Atención Clínica Individual</strong>; con la finalidad de prestar apoyo para enfrentar las diversas problemáticas psicosociales que se presentan en el transcurso de la vida estudiantil.
                      </Typography>
                    </Card>
                  </div>

                  :
                  <div
                    className={`container col-12 ${matches ? 'd-flex' : ''} justify-content-center`}
                    style={{
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: '24px',
                      borderRadius: '12px',
                      padding: 0,
                      margin: '0 10px'
                    }}
                  >
                    <div className="media-body sailec" style={{
                      margin: '0 20px', paddingTop: '10px',
                      fontSize: '20px',
                      fontWeight: 400,
                      lineHeight: '32px'
                    }}>
                      <p className="media-body sailec" style={{ textWrap: 'balance' }}>
                        El <strong>Departamento de Salud Mental Estudiantil (DSME)</strong> es un equipo cuya misión es contribuir al bienestar psicológico y emocional del estudiantado de la Universidad Diego Portales.
                      </p>
                      <p style={{ textWrap: 'balance' }}>
                        Nuestro modelo de intervención se basa en la <strong>Promoción, Prevención, Atención Grupal y Atención Clínica Individual</strong>; con la finalidad de prestar apoyo para enfrentar las diversas problemáticas psicosociales que se presentan en el transcurso de la vida estudiantil.
                      </p>


                    </div>
                  </div>
              }
            </div>

            <div className="row" style={{ margin: '0 10px' }} >
            </div>

            <div className="row" style={{ margin: '0 10px' }} >
              <div className="card-body flex-column d-flex align-items-center my-3 ">
                {
                  matches
                    ?
                    <>
                      <h3 className="sailec-medium">¿Cómo puedo solicitar atención en el DSME?</h3>

                      <p className="sailec" style={{ textWrap: 'center' }}>Primero, debes saber que <strong>pedir ayuda no es un signo de debilidad ni un acto egoísta. Sino, todo lo contrario. Pedir ayuda es un acto de valentía y amor propio</strong>. Y para iniciar ese proceso, es importante saber dos cosas: <strong>¿Cuándo y donde pedir ayuda?</strong>
                      </p>
                    </>
                    :
                    <>
                      <h3 className="sailec-medium">¿Cómo puedo solicitar </h3>
                      <h3 className="sailec-medium">atención en el DSME?</h3>
                    </>
                }
                <Elevation matches={matches} />
              </div>
              <div className="card-body flex-column d-flex align-items-center my-3 ">

                <ReserveBtn text={'Reservar'} bgColor={'#FABB00'} color={'#000'} />
              </div>

              <div className="card-body flex-column d-flex align-items-center">

                <h3 className="sailec-medium">¿Tienes preguntas o sugerencias?</h3>
                <p style={{
                  margin: '0 25px',
                  textAlign: 'center',
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '32px',
                  textWrap: 'balance'
                }}>
                  Puedes preguntar o sugerir lo que quieras, es totalmente anónimo, por lo que puedes sentirte seguro. Tus preguntas serán respondidas en el Canal de WhatsApp.</p>
                <button className="btn btn-secondary me-1 p-2 my-3">
                  <a style={{ color: 'white' }} href="https://forms.gle/nFShGTzpaBKcvhCX9">
                    Buzón de preguntas
                  </a>
                </button>

              </div>
            </div>
            <div className="row" style={{ margin: '0 10px' }} >
              <div className="card-body flex-column d-flex align-items-center">
              {console.log('matches', matches)}
                {
                matches
                  ? <h3 className="sailec-medium">¿Dónde se encuentra el <strong>DSME?</strong></h3>
                  : <>
                    <h3 className="sailec-medium">¿Dónde se encuentra el</h3>
                    <h3 className="sailec-medium"><strong>DSME?</strong></h3>
                  </>
                }
                <div className="col-12 col-lg-6 d-flex justify-content-center mb-3">
                  <a href="https://maps.app.goo.gl/MgPjwoqPatGxty8W8" target="_blank">
                    <img src={map.src} alt="Mapa ubicación Universidad" width={matches ? 800 : '90%'} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterDae />

    </>

  );
}
