'use client'
import Header from "@/components/Header";
import BasicCard from "@/components/BasicCard";
import Box from '@mui/material/Box';
import Image from "next/image";
import { modelo_dsme } from "@/components/imagepath";
import { useMediaQuery } from "@mui/material";
import { Card, CardMedia, CardActions, Typography } from "@mui/material";
import { profesional01 } from "@/components/imagepath";
// import ReserveBtn from "@/components/ReserveBtn"; 

export default function Dash() {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <>
      <div className="row flex-column d-flex align-items-center">
        <div className="col-12 col-lg-10">
          <div>
            <div className="card-body flex-row d-flex justify-content-center">
              <h3>¿Qué es el DSME?</h3>
            </div>
            {/*   <div className="card-body flex-md-column flex-lg-row d-flex align-self-center">
              <Box sx={{
                display: 'flex',
                flexFlow: { xs: 'column', lg: 'row' },
                gap: { xs: '20px', lg: '50px' }
              }}>
                <BasicCard
                  maxWidth={400}
                  bgColor={'transparent'}
                  fontSize={'20px'}
                >
                  Primero, debes saber que <strong>pedir ayuda no es un signo de debilidad ni un acto egoísta. Sino, todo lo contrario. Pedir ayuda es un acto de valentía y amor propio</strong>. Y para iniciar ese proceso, es importante saber dos cosas: <strong>¿Cuándo y donde pedir ayuda?</strong>
                </BasicCard>
                <BasicCard
                  maxWidth={400}
                  bgColor={'transparent'}
                  fontSize={'20px'}
                >
                  Nuestro modelo de intervención se basa en la <strong>Promoción, Prevención, Atención Grupal y Atención Clínica Individual</strong>; con la finalidad de prestar apoyo para enfrentar las diversas problemáticas psicosociales que se presentan en el transcurso de la vida estudiantil.
                </BasicCard>
              </Box>
            </div> */}
            <div className="row" style={{ margin: 0 }} >
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
                        <p>
                          Primero, debes saber que <strong>pedir ayuda no es un signo de debilidad ni un acto egoísta. Sino, todo lo contrario. Pedir ayuda es un acto de valentía y amor propio</strong>. Y para iniciar ese proceso, es importante saber dos cosas: <strong>¿Cuándo y donde pedir ayuda?</strong>
                        </p>
                        <p>
                          Nuestro modelo de intervención se basa en la <strong>Promoción, Prevención, Atención Grupal y Atención Clínica Individual</strong>; con la finalidad de prestar apoyo para enfrentar las diversas problemáticas psicosociales que se presentan en el transcurso de la vida estudiantil.
                        </p>
                      </Typography>
                    </Card>
                  </div>

                  :
                  <div
                    className={`container col-12 ${matches ? 'd-flex' : ''} justify-content-center`}
                    style={{
                      fontSize: '24px',
                      fontWeight: 400,
                      lineHeight: '32px',
                      borderRadius: '12px',
                      padding: 0,
                    }}
                  >
                    <Box sx={{ bgcolor: '#99D6E9', fontFamily: 'sailec', lineHeight: '30px', }}>
                      <div className="media-body sailec" style={{ margin: '0 20px', paddingTop: '10px', fontSize: '20px', fontWeight: 400, lineHeight: '28px' }}>
                        <p className="media-body sailec" style={{ textWrap: 'pretty' }}>
                          Primero, debes saber que <strong>pedir ayuda no es un signo de debilidad ni un acto egoísta. Sino, todo lo contrario. Pedir ayuda es un acto de valentía y amor propio</strong>. Y para iniciar ese proceso, es importante saber dos cosas: <strong>¿Cuándo y donde pedir ayuda?</strong>
                        </p>
                        <p>
                          Nuestro modelo de intervención se basa en la <strong>Promoción, Prevención, Atención Grupal y Atención Clínica Individual</strong>; con la finalidad de prestar apoyo para enfrentar las diversas problemáticas psicosociales que se presentan en el transcurso de la vida estudiantil.

                        </p>
                      </div>
                    </Box>
                  </div>
              }
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
                <a style={{ color: 'white' }} href="https://forms.gle/nFShGTzpaBKcvhCX9">
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







      (
      <div className={`container col-12 col-lg-10 align-self-center p-0 ${matches && 'mb-5'}`}>

        {/* <TestCard test={slides} /> */}

        <div>
          <Box sx={{
            // height: '45svh',
            // width: '90svw',
            borderRadius: '32px',
            // padding: '24px 16px',
            textWrap: 'pretty',
            margin: '0 auto'
          }}>
            <div className="row" style={{ margin: 0 }} >
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
                          fontSize: '32px',
                          lineHeight: '40px',
                          fontWeight: 700
                        }}>
                        ¿Qué es el DSME?
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
                        <p>
                          Primero, debes saber que <strong>pedir ayuda no es un signo de debilidad ni un acto egoísta. Sino, todo lo contrario. Pedir ayuda es un acto de valentía y amor propio</strong>. Y para iniciar ese proceso, es importante saber dos cosas: <strong>¿Cuándo y donde pedir ayuda?</strong>
                        </p>
                        <p>
                          Nuestro modelo de intervención se basa en la <strong>Promoción, Prevención, Atención Grupal y Atención Clínica Individual</strong>; con la finalidad de prestar apoyo para enfrentar las diversas problemáticas psicosociales que se presentan en el transcurso de la vida estudiantil.
                        </p>
                      </Typography>
                    </Card>
                  </div>

                  :
                  <div
                    className={`container col-12 ${matches ? 'd-flex' : ''} justify-content-center`}
                    style={{
                      fontSize: '24px',
                      fontWeight: 400,
                      lineHeight: '32px',
                      borderRadius: '12px',
                      padding: 0,
                    }}
                  >
                    <Box sx={{ bgcolor: '#99D6E9', fontFamily: 'sailec', lineHeight: '30px', }}>
                      <div className="media-body sailec" style={{ margin: '0 20px', paddingTop: '10px', fontSize: '20px', fontWeight: 400, lineHeight: '28px' }}>
                        <p className="media-body sailec" style={{ textWrap: 'pretty' }}>
                          Primero, debes saber que <strong>pedir ayuda no es un signo de debilidad ni un acto egoísta. Sino, todo lo contrario. Pedir ayuda es un acto de valentía y amor propio</strong>. Y para iniciar ese proceso, es importante saber dos cosas: <strong>¿Cuándo y donde pedir ayuda?</strong>
                        </p>
                        <p>
                          Nuestro modelo de intervención se basa en la <strong>Promoción, Prevención, Atención Grupal y Atención Clínica Individual</strong>; con la finalidad de prestar apoyo para enfrentar las diversas problemáticas psicosociales que se presentan en el transcurso de la vida estudiantil.

                        </p>
                      </div>
                    </Box>
                  </div>
              }
            </div>
          </Box>
        </div >
      </div >
      )
    </>

  );
}
