"use client"
import Image from "next/image";
// import styles from "./page.module.css";
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query';

// import Header from "@/components/Header";
import { fetchBlogs } from '../services/BlogServices';
import ImageSlider from '../components/ImageSlider';
import TestSlider from '../components/TestSlider';
import Events from '../components/Events';
import FrequentAskedQuestions from '../components/FAQ';
import Footer from '../components/Footer';
import ReserveBtn from '../components/ReserveBtn'

import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Carrousel from "@/components/skeletons/Carrousel";
import FooterDae from "@/components/FooterDae";
import { saludMental01, saludMental02, saludMental03 } from '@/components/imagepath'
import TestContainer from "@/components/TestsContainer";

const blogs = [
  {
    id: '1',
    titulo: 'Titulo 01',
    texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem molestias eos. Ullam nihil quis inventore. Dolore, perspiciatis culpa quisquam, eligendi dolorum magnam, aliquid ipsam eos unde expedita eveniet tempore.',
    imagen: saludMental01.src
  },
  {
    id: '2',
    titulo: 'Titulo 02',
    texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem molestias eos. Ullam nihil quis inventore. Dolore, perspiciatis culpa quisquam, eligendi dolorum magnam, aliquid ipsam eos unde expedita eveniet tempore.',
    imagen: saludMental02.src
  },
  {
    id: '3',
    titulo: 'Titulo 03',
    texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem molestias eos. Ullam nihil quis inventore. Dolore, perspiciatis culpa quisquam, eligendi dolorum magnam, aliquid ipsam eos unde expedita eveniet tempore.',
    imagen: saludMental03.src
  }
]
// console.log(blogs);

export default function Home() {
  // const { isSuccess, isLoading, isError, data: blogs = [] } = useQuery({
  //   queryKey: ['blogs'],
  //   queryFn: async () => {
  //     const res = await fetchBlogs();
  //     console.log('RES', res);
  //     return res;
  //   }
  // })

  const [index, setIndex] = useState(0);

  const matches = useMediaQuery('(min-width:600px)');

  console.log('MATCHES APP PAGE', matches);
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

  return (
    <>
      {/* <Header /> */}
      <main >
        {/* <main style={{ backgroundColor: '#fff' }}> */}
        {/* {matches && <Headerudp />} */}
        {/* {blogs.length > 0 && <ImageSlider slides={blogs.slice(0,5)} />} */}
        {/* {isLoading && <strong>Cargando...</strong>} */}

        {/* {isError && <p>Ha habido un error</p>} */}

        {/* {!isError && blogs.length === 0 && <Carrousel />} */}

        {!matches &&
          <Box sx={{ bgcolor: '#99D6E9', fontFamily: 'roboto', lineHeight: '30px', }}>
            <div className="media-body roboto" style={{ margin: '0 20px', paddingTop: '10px', fontSize: '24px', fontWeight: 400, lineHeight: '32px' }}>
              <p className="media-body roboto" style={{ textWrap: 'pretty' }}>
                Tenemos un espacio pensado para ti, estamos para apoyarte. ¡Compartamos!
              </p>
              <ReserveBtn text={'Reservar aquí'} bgColor={'#FABB00'} color={'#000'} />
            </div>
          </Box>
        }

        {blogs.length > 0 && <TestContainer slides={blogs.slice(0, 5)} />}
        {/* {blogs.length > 0 && <TestSlider slides={blogs.slice(0, 5)} />} */}

        <Events matches={matches} />

        <div className="row" style={{ padding: 0, margin: 0 }}>
          <div className="col-sm-12 text-center" style={{ padding: 0, margin: '32px 0 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 400, lineHeight: '40px' }}>Preguntas frecuentes</h2>
          </div>
        </div>
        <FrequentAskedQuestions />

        <FooterDae matches={matches} />
      </main>
    </>

  );
}
