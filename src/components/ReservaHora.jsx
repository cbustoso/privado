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
          <div className="row" style={{margin: 0}} >
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
                        Reserva tu hora
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
                        Si necesitas ayuda psicológica, reserva una hora con un psicólogo.
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
                        Un psicólogo puede ayudarte a mejorar tu salud mental y emocional. Reservar una hora es fácil y cómodo.
                    </Typography>
                    <CardActions sx={{ padding: '0px' }}>
                      <Typography size="medium" sx={{ padding: '0 5px', color: '#000' }}>
                        <ReserveBtn text={'Reservar'} bgColor={'#FABB00'} color={'#000'} />
                      </Typography>
                    </CardActions>
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
                    padding:0,
                  }}
                >
                  <Box sx={{ bgcolor: '#99D6E9', fontFamily: 'sailec', lineHeight: '30px', }}>
                    <div className="media-body sailec" style={{ margin: '0 20px', paddingTop: '10px', fontSize: '20px', fontWeight: 400, lineHeight: '28px' }}>
                      <p className="media-body sailec" style={{ textWrap: 'pretty' }}>
                        Si necesitas ayuda psicológica, reserva una hora con un psicólogo.
                      </p>
                      <p>
                        Un psicólogo puede ayudarte a mejorar tu salud mental y emocional. Reservar una hora es fácil y cómodo.

                      </p>
                      <ReserveBtn text={'Reservar'} bgColor={'#FABB00'} color={'#000'} />
                    </div>
                  </Box>
                </div>
            }
          </div>
        </Box>
      </div >
    </div >
  )
}

export default TestContainer;