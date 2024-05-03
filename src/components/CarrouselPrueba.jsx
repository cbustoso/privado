import React, { useState, useEffect } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Carousel.css'; // Estilos CSS para el carrusel
import { ChevronLeftRounded, ChevronRightOutlined } from "@mui/icons-material";

// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CarouselPrueba = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next');

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection('next');
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Cambiar cada 5 segundos

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setSlideDirection('next');
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideDirection('prev');
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ backgroundImage: `url(${slides[currentSlide].imagen.src})` }}>
        <div className="overlay"></div>
        <div className={`slide-content ${slideDirection}`}>
          <h2 className="slide-text">{slides[currentSlide].texto}</h2>
        </div>
      </div>
      <div className="navigation">
        <ChevronLeftRounded className="arrow left-arrow" onClick={prevSlide} />
        <ChevronRightOutlined className="arrow right-arrow" onClick={nextSlide} />
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? 'dot active' : 'dot'}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarouselPrueba;
