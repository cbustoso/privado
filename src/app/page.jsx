"use client"
import Image from "next/image";
// import styles from "./page.module.css";
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query';

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

export default function Home() {
  const { isSuccess, isLoading, isError, data: blogs = [] } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const res = await fetchBlogs();
      console.log('RES', res);
      return res;
    }
  })

  const [index, setIndex] = useState(0);

  const matches = useMediaQuery('(min-width:600px)');

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <main >
      {/* <main style={{ backgroundColor: '#fff' }}> */}
        {/* {matches && <Headerudp />} */}
        {blogs.length > 0 && <ImageSlider slides={blogs} matches={matches} />}
        {/* {isLoading && <strong>Cargando...</strong>} */}

        {isError && <p>Ha habido un error</p>}

        {!isError && blogs.length === 0 && <Carrousel />}

        {!matches &&
          <Box sx={{ bgcolor: '#99D6E9', fontFamily: 'sailec', lineHeight: '30px', }}>
            <div className="media-body sailec" style={{ margin: '0 20px', paddingTop: '10px', fontSize: '24px', fontWeight: 400, lineHeight: '32px' }}>
              <p className="media-body sailec" style={{ textWrap: 'pretty' }}>
                Tenemos un espacio pensado para ti, estamos para apoyarte. ¡Compartamos!
              </p>
              <ReserveBtn text={'Reservar aquí'} bgColor={'#FABB00'} color={'#000'} />
            </div>
          </Box>
        }

        <div className="row" style={{ padding: 0, margin: 0 }}>
          <div className="col-sm-12 text-center" style={{ padding: 0, margin: '32px 0 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 400, lineHeight: '40px' }}>Test autodiagnóstico</h2>
          </div>
        </div>

        {blogs.length > 0 && <TestSlider slides={blogs} />}

        <Events />

        <div className="row" style={{ padding: 0, margin: 0 }}>
          <div className="col-sm-12 text-center" style={{ padding: 0, margin: '32px 0 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 400, lineHeight: '40px' }}>Preguntas frecuentes</h2>
          </div>
        </div>
        <FrequentAskedQuestions />
        <Footer />
      </main>
  );
}
