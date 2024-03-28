import { useState } from "react";
import Link from "next/link";
import { CircleRounded } from "@mui/icons-material";
import { ChevronLeftRounded, ChevronRightOutlined } from "@mui/icons-material";
import { Grid, Box } from "@mui/material";

const ImageSlider = ({ slides, matches }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [title, setTitle] = useState(slides[0].titulo)
  const [content, setContent] = useState(slides[0].texto)
  const [idBlog, setIdBlog] = useState(slides[0].id)

  const sliderStyles = {
    // height: '85svh',
    position: 'relative',
    margin: 0,
    padding: 0,
    backgroundColor: "#fff"
  }

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].imagen})`,
    width: '100svw',
    height: 384,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  const leftArrowStyles = {
    position: 'absolute',
    top: '200px',
    transform: 'translate(0, -50%)',
    left: '32px',
    color: 'white',
    zIndex: 1,
    cursor: 'pointer',
    border: '1px solid white',
    borderRadius: '50%',
    backgroundColor: "#fff4"
  }

  const righttArrowStyles = {
    position: 'absolute',
    top: '200px',
    transform: 'translate(0, -50%)',
    right: '32px',
    color: 'white',
    zIndex: 1,
    cursor: 'pointer',
    border: '1px solid white',
    borderRadius: '50%',
    backgroundColor: "#fff4"
  }

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
  }

  const dotStyles = {
    margin: '0 8px',
    cursor: 'pointer',
    // color: '#fff'
  }

  // setTimeout(() => {
  //   goToPrevious()
  // }, 3000)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setTitle(slides[newIndex].titulo)
    setContent(slides[newIndex].texto)
    setIdBlog(slides[newIndex].id)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setTitle(slides[newIndex].titulo)
    setContent(slides[newIndex].texto)
    setIdBlog(slides[newIndex].id)
  }

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
    setTitle(slides[slideIndex].titulo)
    setContent(slides[slideIndex].texto)
    setIdBlog(slides[slideIndex].id)
  }

  const boxStyleDesktop = {
    border: '1px solid #333',
    width: '85svw',
    borderRadius: '20px',
    padding: '24px 16px',
    textWrap: 'pretty',
    margin: '-270px auto 30px',
    backgroundColor: '#ffffff',
    opacity: 0.75
  }
  
  const boxStyleMobile = {
    border: '1px solid #333',
    width: '90svw',
    borderRadius: '32px',
    padding: '24px 16px',
    textWrap: 'pretty',
    margin: '36px auto'
  }

  return (
    <div style={sliderStyles}>
      {matches && <div style={leftArrowStyles} onClick={goToPrevious}> <ChevronLeftRounded /></div>}
      {matches && <div style={righttArrowStyles} onClick={goToNext}> <ChevronRightOutlined /></div>}
      <div style={slideStyles}></div>
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
      <Box sx={ matches ? boxStyleDesktop : boxStyleMobile}>
        <div className="row" >
          <div className="col-sm-12 sailec">
            <h2 style={{fontSize: '30px', fontWeight:700, lineHeight:'40px'}}>{title}</h2>
            <p style={{fontSize: '20px', fontWeight:400, lineHeight:'32px'}}>{content.slice(0, 205)}</p>
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
                    backgroundColor: 'white',
                    border: '1px solid #A6A6A6',
                    borderRadius: '100px'
                  }}> Ver más + </button>
              </Link>
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
            <CircleRounded sx={{ fontSize: '16px', margin:'40px 0 0 0', color: slideIndex === currentIndex ? '#B82925' : '#FF5253' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider;