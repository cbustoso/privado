'use client'
import { profesional01, map } from "@/components/imagepath";
import { useMediaQuery } from "@mui/material";
import { Card, CardMedia, Typography } from "@mui/material";
import { } from "@/components/imagepath";
import ReserveBtn from "@/components/ReserveBtn";
import Elevation from "@/components/HowTo"

export default function QuienesSomos() {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div className="row flex-column d-flex align-items-center sailec">
      <div className="col-12" style={{ padding: 0 }}>
        <div>
          <div className="card-body flex-row d-flex mt-4">
            <h3 className={matches ? "blog-title" : "blog-title-sm"} style={{ marginLeft: matches ? '0px' : '0px', fontSize: '48px', lineHeight: '60px', fontWeight: 700, textWrap: 'balance' }}>
              Dirección de Salud Mental de Estudiantes
            </h3>

          </div>
          <h2
            className="sailec"
            style={{ fontWeight: 700, fontSize: '32px', lineHeight: '40px', marginTop: matches ? '20px' : '90px' }}>
            ¿Qué es el DSME?
          </h2>
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
                    margin: '10px 0px'
                  }}
                >
                  <Card
                    className='col-12 col-lg-4'
                    sx={{
                      boxShadow: 0,
                      display: 'inline-block',
                      padding: '0',
                      width: '',
                    }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={"https://github.com/Niennis/imagesudp/blob/main/profesional01.jpg?raw=true"}
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
                      padding: '0 2em',
                    }}>

                    <Typography
                      variant="body2"
                      className="sailec"
                      sx={{
                        color: '#000',
                        textWrap: 'pretty',
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
                        textWrap: 'pretty',
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
            <div className="card-body flex-column d-flex  my-3 ">
              {
                matches
                  ?
                  <>
                    <h2
                      className="sailec"
                      style={{  fontWeight: 700, fontSize: '32px', lineHeight: '40px', marginTop: matches ? '20px' : '90px'  }}>¿Cómo puedo solicitar atención en el DSME?
                    </h2>

                    <Typography
                      variant="body2"
                      className="sailec"
                      sx={{
                        color: '#000',
                        // textWrap: 'balance',
                        fontSize: '20px',
                        lineHeight: '28px'
                      }}>Primero, debes saber que <strong>pedir ayuda no es un signo de debilidad ni un acto egoísta. Sino, todo lo contrario. Pedir ayuda es un acto de valentía y amor propio</strong>. Y para iniciar ese proceso, es importante saber dos cosas: <strong>¿Cuándo y donde pedir ayuda?</strong>
                    </Typography>
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

              <h2 className="sailec" style={{ fontWeight: 700, fontSize: '32px', lineHeight: '40px', marginTop: matches ? '20px' : '90px' }}>¿Tienes preguntas o sugerencias?</h2>
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
                  ? <h2 style={{ fontWeight: 700, fontSize: '32px', lineHeight: '40px', marginTop: matches ? '20px' : '90px' }} className="sailec">¿Dónde se encuentra el <strong>DSME?</strong></h2>
                  : <>
                    <h2 style={{ fontWeight: 700, fontSize: '32px', lineHeight: '40px', marginTop: matches ? '20px' : '90px' }} className="sailec">¿Dónde se encuentra el</h2>
                    <h2 style={{ fontWeight: 700, fontSize: '32px', lineHeight: '40px', marginTop: matches ? '20px' : '90px' }} className="sailec"><strong>DSME?</strong></h2>
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

  );
}
