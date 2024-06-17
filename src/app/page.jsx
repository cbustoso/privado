"use client"
import Image from "next/image";
import { useState, useRef, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query';
import { useSection } from "@/context/SectionContext";

import { fetchBlogs } from '../services/BlogServices';
import ImageSlider from '../components/ImageSlider';
import TestSlider from '../components/TestSlider';
import Events from '../components/Events';
import FrequentAskedQuestions from '../components/FAQ';

import useMediaQuery from '@mui/material/useMediaQuery';
import FooterDae from "@/components/FooterDae";
import { saludMental01, saludMental02, saludMental03, saludMental05 } from '@/components/imagepath'
import ReservaTuHora from "@/components/ReservaHora";
import SimpleBackdrop from "@/components/Backdrop";

import { blogs } from "@/utils/blogs";

const events = [
    {
      title: "Salud Mental",
      address: "Av. Portugal 782, Santiago",
      date: "2024/02/18",
      time: "09:00",
      campus: "Sede Santiago",
      location: "Auditorio",
      image: 'https://posgrados.udp.cl/wp/wp-content/uploads/2023/12/MBA-UDP-92-scaled-1.jpg',
      highlight: false,
    },
    {
      title: "Salud Mental",
      address: "Av. Portugal 782, Santiago",
      date: "2024/02/18",
      time: "09:00",
      campus: "Sede Centro",
      location: "Auditorio",
      image: 'https://posgrados.udp.cl/wp/wp-content/uploads/2023/12/MBA-UDP-92-scaled-1.jpg',
      highlight: true,
    },
    {
      title: "Salud Mental",
      address: "Av. Portugal 782, Santiago",
      date: "2024/03/18",
      time: "09:00",
      campus: "Sede Santiago",
      location: "Auditorio",
      image: 'https://posgrados.udp.cl/wp/wp-content/uploads/2023/12/MBA-UDP-92-scaled-1.jpg',
      highlight: false,
    },
    {
      title: "Salud Mental",
      address: "Av. Portugal 782, Santiago",
      date: "2024/02/18",
      time: "09:00",
      campus: "Sede Santiago",
      location: "Auditorio",
      image: 'https://posgrados.udp.cl/wp/wp-content/uploads/2023/12/MBA-UDP-92-scaled-1.jpg',
      highlight: false,
    }
]

const tests = [

  {
    id: '0',
    titulo: 'Test de ansiedad de Beck',
    bajada: 'El test puede ser evaluado por un profesional y/o por ti mismo. Lo anterior, no implica que puedas realizar un diagnóstico, pero sí puede entregarte claridad respecto a las acciones a realizar.',
    url: '/tests/test_de_ansiedad',
    imagen: saludMental05.src,
  },
  {
    id: '0',
    titulo: 'Test de depresión',
    bajada: 'El test puede ser evaluado por un profesional y/o por ti mismo. Lo anterior, no implica que puedas realizar un diagnóstico, pero sí puede entregarte claridad respecto a las acciones a realizar.',
    url: '/tests/test_de_depresion',
    imagen: saludMental01.src,
  },
]

const sortedEvents = [...events].sort((a, b) => {
  // Primero, compara el campo highlight
  if (a.highlight && !b.highlight) {
    return -1;
  } else if (!a.highlight && b.highlight) {
    return 1;
  } else {
    // Si ambos tienen el mismo valor de highlight, compara las fechas
    return new Date(a.date) - new Date(b.date);
  }
});

export default function Home() {
  // const { isSuccess, isLoading, isError, data: blogs = [] } = useQuery({
  //   queryKey: ['blogs'],
  //   queryFn: async () => {
  //     const res = await fetchBlogs();
  //     console.log('RES', res);
  //     return res;
  //   }
  // })
  const { setActiveSection } = useSection();
  const sectionRefs = useRef([]);
  const isSmallDevice = useMediaQuery(
    "only screen and (max-width : 640px)"
  );
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 641px) and (max-width : 768px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 1024px)"
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1025px)"
  );

  const [index, setIndex] = useState(0);

  const matches = useMediaQuery('(min-width:600px)');

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const truncarPalabras = (texto, num) => {
    const aux = texto.split(' ');

    if (aux.length > num) {
      return aux.slice(0, num).join(' ') + '...';
    } else {
      return texto;
    }
  }
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [setActiveSection]);
// console.log('BLOGS', blogs.slice(-4 ))

  return (
    <>
      <main >
        {!isSmallDevice && !isMediumDevice && !isLargeDevice && !isExtraLargeDevice
          ?
          <SimpleBackdrop />
          :
          <>
            {blogs.length > 0 && isSmallDevice && <ImageSlider slides={blogs.slice(-4 )} innerRef={el => sectionRefs.current[0] = el} style={{ height: '100vh', padding: '1rem' }}/>}
            {blogs.length > 0 && isExtraLargeDevice && <ImageSlider slides={blogs.slice(-4)} innerRef={el => sectionRefs.current[0] = el} style={{ height: '100vh', padding: '1rem' }}/>}
            {/* {isLoading && <strong>Cargando...</strong>} */}
            {/* {isError && <p>Ha habido un error</p>} */}
            {/* {!isError && blogs.length === 0 && <Carrousel />} */}

            {blogs.length > 0 && <ReservaTuHora slides={blogs.slice(0, 5)} innerRef={el => sectionRefs.current[0] = el} style={{ height: '100vh', padding: '1rem' }}/>}
            {blogs.length > 0 && <TestSlider slides={tests.slice(0, 4)}  innerRef={el => sectionRefs.current[0] = el} style={{ height: '100vh', padding: '1rem' }}/>}

            {events.length !== 0 && <Events events={sortedEvents} matches={matches} innerRef={el => sectionRefs.current[0] = el} style={{ height: '100vh', padding: '1rem' }}/>}

            <div className="row" style={{ padding: 0, margin: 0 }}>
              <div className="col-sm-12 text-center" style={{ padding: 0, margin: '32px 0 0' }}>
                <h2 style={{ fontSize: '32px', fontWeight: 400, lineHeight: '40px' }}>Preguntas frecuentes</h2>
              </div>
            </div>
            <FrequentAskedQuestions innerRef={el => sectionRefs.current[0] = el} style={{ height: '100vh', padding: '1rem' }}/>
            <FooterDae matches={matches} />
          </>
        }
      </main>
    </>

  );
}
