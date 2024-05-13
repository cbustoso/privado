import { useState } from "react";
import Link from "next/link";
import { CircleRounded } from "@mui/icons-material";
import { Grid, Box, Card } from "@mui/material";
// import TestCard from './Card'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import ReserveBtn from "./ReserveBtn";
import useMediaQuery from '@mui/material/useMediaQuery';
import { profesional01 } from "./imagepath";

const TestContainer = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [title, setTitle] = useState(slides[0].title)
  const [content, setContent] = useState(slides[0].content)
  const [idBlog, setIdBlog] = useState(slides[0].id)
  const [selectedSlide, setSelectedSlide] = useState(slides[0])
  const matches = useMediaQuery('(min-width:600px)');


  return (
    <div className='container col-12 col-lg-10 align-self-center mb-5'>

      {/* <TestCard test={slides} /> */}
      <div className="row" style={{ padding: 0, margin: 0 }}>
        <div className="col-sm-12 text-center" style={{ padding: 0, margin: '32px 0' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 400, lineHeight: '40px' }}>
            ¡Estamos para ayudarte!
          </h2>
          <h4 style={{textWrap: 'balance'}}>
            Si tienes ansiedad, completa un formulario autodiagnóstico y reserva una hora con un psicólogo. Estas son dos formas de mejorar tu salud mental y emocional.
          </h4>
        </div>
      </div>
      <div>
        <Box sx={{
          // height: '45svh',
          // width: '90svw',
          borderRadius: '32px',
          // padding: '24px 16px',
          textWrap: 'pretty',
          margin: '0 auto'
        }}>
          <div className="row" >
            <div
              className={`container col-12 ${matches ? 'd-flex' : ''} justify-content-center`}
              style={{
                fontSize: '24px',
                fontWeight: 400,
                lineHeight: '32px',
                border: '2px solid #FF5253',
                borderRadius: '12px',
                padding: '10px',
              }}
            >
              <Card
                className='col-12 col-lg-4'
                sx={{
                  // maxWidth: '25svw',
                  boxShadow: 0,
                  display: 'inline-block',
                  padding: '0 10px'
                }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={profesional01.src}
                />
              </Card>

              <Card
                className='col-12 col-lg-4'
                sx={{
                  // maxWidth: '25svw',
                  boxShadow: 0,
                  display: 'inline-block',
                  padding: '0 10px',
                  height: matches ? "100%" : "fit-content",
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#000',
                    textWrap: 'balance',
                  }}>
                  Si sufres de ansiedad, te invitamos a realizar un test autodiagnóstico para la ansiedad. Este test es una forma rápida y fácil de conocer tu nivel de ansiedad y los factores que la originan. Solo tienes que responder unas preguntas sencillas y honestas sobre cómo te sientes y cómo reaccionas ante ciertas situaciones.
                </Typography>
                <CardActions sx={{ borderBottom: '1px solid #A6A6A6', marginBottom: '10px' }}>
                  <Typography size="medium" sx={{ padding: '0 5px', color: '#000' }}>
                    <Link href={'https://cetep.cl/test_salud_mental/test-de-ansiedad-de-beck/'}>
                      <button
                        className="btn submit-form me-2"
                        style={{
                          backgroundColor: '#FF5253',
                          color: 'white',
                          border: '1px solid #A6A6A6',
                          borderRadius: '100px', 
                          margin: '10px 0',
                        }}> Realizar Test </button>
                    </Link>
                  </Typography>
                </CardActions>
              </Card>

              <Card
                className='col-12 col-lg-4'
                sx={{
                  // maxWidth: '25svw',
                  boxShadow: 0,
                  display: 'inline-block',
                  padding: '0 10px',
                  height: matches ? "100%" : "fit-content",
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  paddingBottom: '10px',
                }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#000',
                    textWrap: 'balance',
                  }}>
                  Si necesitas ayuda psicológica, reserva una hora con un psicólogo. Un psicólogo puede ayudarte a mejorar tu salud mental y emocional. Reservar una hora es fácil y cómodo. Solo tienes que ingresar a nuestra página web y elegir el día, la hora y el psicólogo que prefieras. No dejes pasar esta oportunidad de sentirte mejor. ¡Reserva tu hora hoy mismo!
                </Typography>
                <CardActions sx={{ borderBottom: '1px solid #A6A6A6', padding: '0px' }}>
                  <Typography size="medium" sx={{ padding: '0 5px', color: '#000' }}>
                    <ReserveBtn text={'Reservar'} bgColor={'#FF5253'} color={'#fff'} />
                  </Typography>
                </CardActions>
              </Card>
            </div>
          </div>
        </Box>
      </div >
    </div >
  )
}

export default TestContainer;