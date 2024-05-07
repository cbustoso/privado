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

const TestSlider = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [title, setTitle] = useState(slides[0].title)
  const [content, setContent] = useState(slides[0].content)
  const [idBlog, setIdBlog] = useState(slides[0].id)
  const [selectedSlide, setSelectedSlide] = useState(slides[0])
  const sliderStyles = {
    // height: '85svh',
    position: 'relative',
    margin: 0,
    padding: 0,
    backgroundColor: "#fff"
  }

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].image})`,
    width: '100svw',
    height: 300,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center'
  }

  const dotStyles = {
    margin: '0 8px',
    cursor: 'pointer'
    // color: '#fff'
  }

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
    setTitle(slides[slideIndex].title)
    setContent(slides[slideIndex].content)
    setIdBlog(slides[slideIndex].id)
    const newSlide = slides[slideIndex]
    setSelectedSlide(newSlide)
  }

  return (
    <div className='container col-12 col-lg-10 align-self-center'>

      {/* <TestCard test={slides} /> */}
      <div style={sliderStyles}>
        <Box sx={{
          // height: '45svh',
          // width: '90svw',
          borderRadius: '32px',
          // padding: '24px 16px',
          textWrap: 'pretty',
          margin: '0 auto'
        }}>
          <div className="row" >
            <div className="col-sm-12 sailec" style={{ fontSize: '24px', fontWeight: 400, lineHeight: '32px' }}>
              <Card sx={{ boxShadow: 0, border: '1px solid #A6A6A6', borderRadius: '12px', width: '100%', margin: 0 }}>
                <CardHeader
                  title={selectedSlide.titulo}
                  subheader={
                    <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                      Psicología
                    </Typography>
                  }
                  sx={{ bgcolor: '#FF5253', color: 'white' }}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={selectedSlide.imagen}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {(selectedSlide.texto).slice(0, 60)}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="baseline"
                  >
                    <Link href={`/blog/${idBlog}`}>
                      <button
                        className="btn submit-form me-2"
                        style={{
                          backgroundColor: '#FF5253',
                          color: 'white',
                          border: '1px solid #A6A6A6',
                          borderRadius: '100px'
                        }}> Realizar Test </button>
                    </Link>
                  </Grid>
                </CardActions>
              </Card>
            </div>
          </div>
        </Box>
        <div style={dotsContainerStyles}>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              style={dotStyles}
              onClick={() => goToSlide(slideIndex)}
            >
              <CircleRounded sx={{ fontSize: '16px', margin:'24px 0', color: slideIndex === currentIndex ? '#B82925' : '#FF5253' }} />
            </div>
          ))}
        </div>
      </div >
    </div >
  )
}

export default TestSlider;