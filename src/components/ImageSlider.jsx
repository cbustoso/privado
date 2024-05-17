'use client'
import { useState } from "react";
import Link from "next/link";
import { CircleRounded } from "@mui/icons-material";
import { Grid, Box, Typography, Tab, Tabs, useMediaQuery } from "@mui/material";
import { banner04, banner05, banner06, banner07 } from "./imagepath";
import Image from "next/image";

const slides = [
  {
    id: 0,
    key: 'banner01',
    titulo: 'La ansiedad y la educación',
    tiempo: '5 min. aprox',
    bajada: 'Conoce los diferentes factores que pueden estar afectando tu vida Universitaria.',
    img: banner04,
    color: '#3886FF',
    border: '#A5C8FF',
  },
  {
    id: 1,
    key: 'banner02',
    titulo: 'Vida universitaria',
    tiempo: '5 min. aprox',
    bajada: 'Conoce los diferentes factores que pueden estar afectando tu vida Universitaria.',
    img: banner05,
    color: '#FABB00',
    border: '#FFCB7E',
  },
  {
    id: 2,
    key: 'banner03',
    titulo: 'Biblioteca viva',
    tiempo: '5 min. aprox',
    bajada: 'Conoce los diferentes factores que pueden estar afectando tu vida Universitaria.',
    img: banner06,
    color: '#1ABC9C',
    border: '#73CDCD',
  },
  {
    id: 3,
    key: 'banner04',
    titulo: 'Distracción positiva',
    tiempo: '5 min. aprox',
    bajada: 'Conoce los diferentes factores que pueden estar afectando tu vida Universitaria.',
    img: banner07,
    color: '#B82925',
    border: '#FF5253',
  },

]

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ImageSlider = ({ }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [title, setTitle] = useState(slides[0].titulo)
  const [content, setContent] = useState(slides[0].bajada)
  const [color, setColor] = useState(slides[0].color)
  const [idBlog, setIdBlog] = useState(slides[0].id)
  const matches = useMediaQuery('(min-width:600px)');

  const [lasSlides, setLasSlides] = useState(slides[0])
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const imgHeightMobile = '72vh'
  const imgHeightDesktop = '90vh'

  const sliderStyles = {
    position: 'relative',
    margin: 0,
    padding: 0,
    width: '100%',
  }

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].img.src})`,
    width: '100%',
    height: matches ? imgHeightDesktop : imgHeightMobile,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  const slideStylesMobile = {
    backgroundColor: lasSlides.color,
    width: '100%',
    height: matches ? imgHeightDesktop : imgHeightMobile,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
  }

  const dotStyles = {
    margin: '-60px 8px',
    cursor: 'pointer',
    // color: '#fff'
  }

  const truncarPalabras = (texto, num) => {
    // const textoParrafo = texto.match(/<p>(.*?)<\/p>/);
    const aux = texto[0].split('');
    if (aux.length > num) {
      const sliced = aux.slice(0, num)
      const indexLastBlankSpace = sliced.lastIndexOf(' ')
      return (aux.slice(3, indexLastBlankSpace).join('') + '...')
    } else {
      return texto;
    }
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setTitle(slides[newIndex].titulo)
    setContent(truncarPalabras(slides[newIndex].bajada, 205))
    setColor(slides[newIndex].color)
    setIdBlog(slides[newIndex].id)
    setLasSlides(slides[newIndex])
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setTitle(slides[newIndex].titulo)
    setContent(truncarPalabras(slides[newIndex].bajada, 205))
    setColor(slides[newIndex].color)
    setIdBlog(slides[newIndex].id)
    setLasSlides(slides[newIndex])
  }

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
    setTitle(slides[slideIndex].titulo)
    setContent(truncarPalabras(slides[slideIndex].bajada, 205))
    setColor(slides[slideIndex].color)
    setIdBlog(slides[slideIndex].id)
    setLasSlides(slides[slideIndex])
  }

  const boxStyleDesktop = {
    padding: '32px 0 32px 0',
    textWrap: 'pretty',
    margin: `calc(-${imgHeightDesktop} - 50px) auto 0px`,
    backgroundColor: '#00000089',
    height: imgHeightDesktop,
    display: 'flex',
    alignItems: 'flex-start',
    paddingTop: '150px',
    width: '100%',
  }

  const boxStyleMobile = {
    padding: '24px 16px',
    textWrap: 'pretty',
    margin: `-${imgHeightMobile} auto 0px`,
    // padding: '24px ',
    height: imgHeightMobile,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  }

  // setTimeout(() => {
  //   goToNext()
  // }, 5500);

  return (
    <div style={matches ? {...sliderStyles, height: imgHeightDesktop} : sliderStyles }>
      <div style={matches ? slideStyles : {}}></div>

      {matches ?
        <>
          <Box sx={boxStyleDesktop}>
            <div className="row" >
              <div className="col-sm-12 sailec" style={{
                width: `${matches ? '840px' : '100%'}`,
                // margin: '40px'
              }}>
                <div className="d-flex">
                  <h2
                    className="sailec"
                    style={{
                      color: 'white',
                      fontSize: '96px',
                      fontWeight: 700,
                      lineHeight: '116px',
                    }}>
                    {lasSlides.titulo}
                  </h2>
                </div>
                <Grid
                  container
                  direction="row"
                >
                  <Link href={`/blog/${idBlog}`}>
                    <button
                      className="btn submit-form me-2"
                      style={{
                        backgroundColor: lasSlides.color,
                        border: `1px solid ${lasSlides.border}`,
                        borderRadius: '100px',
                        color: '#fff'
                      }}> Ver más + </button>
                  </Link>
                </Grid>
              </div>
            </div>
          </Box>
          <div
            key={lasSlides.key}
            className="col col-3"
            style={{
              borderBottom: '1px solid white',
              height: '200px',
              marginTop: '-240px',
              marginLeft: `calc((25vw * ${lasSlides.id}) - (${lasSlides.id} * 4px) )`,
              backgroundColor: lasSlides.color,
              color: "#fff",
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '28px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CustomTabPanel
              value={lasSlides.key}
              index={lasSlides.key}
            >
              {lasSlides.bajada}
            </CustomTabPanel>
          </div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            // textColor="secondary"
            indicatorColor="white"
          >
            {slides.map((slide, slideIndex) => (
              <Tab
                key={slideIndex}
                className="col-3 sailec"
                onClick={() => goToSlide(slideIndex)}
                sx={{
                  height: '97px',
                  bgcolor: slide.color,
                  color: '#fff',
                  textTransform: 'capitalize',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '32px',
                  maxWidth: 'unset',
                  alignItems: 'baseline',
                }}
                label={slide.titulo}
                {...a11yProps(slideIndex)}
              />
            ))}
          </Tabs>
        </> :
        <>
          <div style={slideStylesMobile}></div>
          <div style={dotsContainerStyles}>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                style={dotStyles}
                onClick={() => goToSlide(slideIndex)}
              >
              </div>
            ))}
          </div>
          <Box sx={matches ? boxStyleDesktop : boxStyleMobile}>
            <div className="row" >
              <div className="col-sm-12 sailec">
                <div style={{ minHeight: '2rem' }}>
                  <h2 style={{ color: 'white', fontSize: '30px', fontWeight: 700, lineHeight: '40px' }}>{title}</h2>
                  <p style={{ color: 'white', fontSize: '20px', fontWeight: 400, lineHeight: '32px' }}>{content.slice(0, 205)}</p>
                </div>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="baseline"
                >
                  <Link href={`/blog/${idBlog}`}>
                    {console.log('IDBLOG', idBlog)}
                    <button
                      className="btn submit-form me-2"
                      style={{
                        backgroundColor: 'transparent',
                        border: '1px solid #FFF',
                        borderRadius: '100px',
                        color: '#FFF',
                        width: '116px',
                        height: '40px',
                        margin: '8px'
                      }}> Ver más + </button>
                  </Link>
                  <img
                    src={lasSlides.img.src}
                    alt=""
                    width={'90%'}
                    height={250}
                    style={{
                      overflow: 'hidden',
                      margin: 'auto',
                      borderRadius: '8px',
                      webkitBoxShadow: '12px 12px 0px 0px rgba(166,166,166,1)',
                      mozBoxShadow: '12px 12px 0px 0px rgba(166,166,166,1)',
                      boxShadow: '12px 12px 0px 0px rgba(166,166,166,1)',
                    }}
                  />

                </Grid>
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
                <CircleRounded sx={{ fontSize: '16px', color: slideIndex === currentIndex ? '#A6A6A6' : '#FFF' }} />
              </div>
            ))}
          </div>

        </>
      }
    </div>
  )
}

export default ImageSlider;