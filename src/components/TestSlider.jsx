import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CircleRounded, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Grid, Box, Card } from "@mui/material";
// import TestCard from './Card'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from "@mui/material";

const TestSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = slides.length;
  const timeoutRef = useRef(null);
  const matches = useMediaQuery('(min-width:600px)');

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

  const cardContainerStyles = {
    display: 'flex',
    gap: '20px',
    overflow: 'hidden',
  };

  const arrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    zIndex: 2,
    color: '#A6A6A6',
    fontSize: '40px',
    backgroundColor: 'white',
    borderRadius: '72px'
  };

  const leftArrowStyles = {
    ...arrowStyles,
    left: '10%'
  };

  const rightArrowStyles = {
    ...arrowStyles,
    right: '10%'
  };


  const nextSlide = () => {
    if (currentIndex + 1 < slides.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex - 1 > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(slides.length - 1)
    }
  };

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
  }

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides),
      5500 // Cambiar el slide cada 3 segundos
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, totalSlides]);


  return (
    <div className='container col-12 align-self-center' style={{ padding: '0px', margin: '0px', maxWidth: '100vw' }} id="test_autodiagnostico">
      {
        matches
          ? <div style={sliderStyles}>
            {slides.length >= 2 && <ChevronLeft sx={leftArrowStyles} onClick={prevSlide} />}
            <Box sx={{ textWrap: 'pretty', margin: '0 auto' }}>
              <div className="row" style={{ backgroundColor: '#F1F1F1', padding: '32px 0' }}>
                <h2
                  className="sailec"
                  style={{ fontWeight: 700, fontSize: '32px', lineHeight: '40px', textAlign: 'center' }}>
                  Test autodiagnóstico
                </h2>
                <div style={{ ...cardContainerStyles, justifyContent: 'center' }}>
                  {[0, 1].map(offset => {
                    const slideIndex = currentIndex + offset;
                    if (slideIndex < slides.length) {
                      const slide = slides[slideIndex];
                      return (
                        <div key={slideIndex} className="col-4 sailec" style={{ fontSize: '24px', fontWeight: 400, lineHeight: '32px' }}>
                          <Card sx={{ boxShadow: 0, border: '1px solid #A6A6A6', borderRadius: '12px', width: '100%', margin: 'auto' }}>
                            <CardMedia component="img" height="320" image={slide.imagen} alt="Slide image" />
                            <CardContent>
                              <Typography variant="body2" color="text.secondary" sx={{ color: 'black' }}>{slide.titulo}</Typography>
                              <Typography variant="body2" color="text.secondary">{slide.bajada}</Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                              <Grid container direction="row" justifyContent="flex-start" alignItems="baseline">
                                <Link href={slide.url} target="_blank" >
                                  <button className="btn submit-form me-2" style={{ backgroundColor: '#4054B2', color: 'white', border: '1px solid #A6A6A6', borderRadius: '100px' }}>Realizar Test</button>
                                </Link>
                              </Grid>
                            </CardActions>
                          </Card>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </Box>
            {slides.length >= 2 && <ChevronRight sx={rightArrowStyles} onClick={nextSlide} />}
            {slides.length >= 2 && <div style={matches && { ...dotsContainerStyles, backgroundColor: '#F1F1F1' }}>
              {Array(Math.ceil(slides.length)).fill().map((_, dotIndex) => (
                <div key={dotIndex} style={dotStyles} onClick={() => goToSlide(dotIndex)}>
                  <CircleRounded sx={{ fontSize: '16px', margin: '24px 0', color: dotIndex === currentIndex ? '#4054B2' : '#3886FF' }} />
                </div>
              ))}
            </div>}
          </div>
          : <div style={sliderStyles}>
            <Box sx={{ textWrap: 'pretty', margin: '0 auto' }}>
              <div className="row" style={{ paddingTop: '32px', margin: 0 }}>
                <h2
                  className="sailec"
                  style={{ fontWeight: 700, fontSize: '32px', lineHeight: '40px', textAlign: 'center' }}>
                  Test autodiagnóstico
                </h2>
                <div style={cardContainerStyles}>
                  {slides.map((slide, slideIndex) => {
                    return (
                      <div key={slideIndex} className="col-4 sailec" style={{ fontSize: '24px', fontWeight: 400, lineHeight: '32px', width: '100%' }}>
                        <Card sx={{ boxShadow: 0, border: '1px solid #A6A6A6', borderRadius: '12px', width: '90%', margin: 'auto' }}>
                          <CardMedia component="img" height="320" image={slides[currentIndex].imagen} alt="Slide image" />
                          <CardContent>
                            <Typography variant="body2" color="text.secondary" sx={{ color: 'black' }}>{slide.titulo}</Typography>
                            <Typography variant="body2" color="text.secondary">{slide.bajada}</Typography>
                          </CardContent>
                          <CardActions disableSpacing>
                            <Grid container direction="row" justifyContent="flex-start" alignItems="baseline">
                              <Link href={slide.url} target="_blank">
                                <button
                                  className="btn submit-form me-2"
                                  style={{
                                    backgroundColor: '#4054B2',
                                    color: 'white',
                                    border: '1px solid #A6A6A6',
                                    borderRadius: '100px'
                                  }}>
                                  Realizar Test
                                </button>
                              </Link>
                            </Grid>
                          </CardActions>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Box>
            {slides.length >= 2 && <div style={dotsContainerStyles}>
              {Array(Math.ceil(slides.length)).fill().map((_, dotIndex) => (
                <div key={dotIndex} style={dotStyles} onClick={() => goToSlide(dotIndex)}>
                  <CircleRounded sx={{ fontSize: '16px', margin: '24px 0', color: dotIndex === currentIndex ? '#4054B2' : '#3886FF' }} />
                </div>
              ))}
            </div>}
          </div>
      }

    </div>
  );

}

export default TestSlider;