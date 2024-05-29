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
import ReservaTuHora from "@/components/ReservaHora";
import { saludMental05 } from '@/components/imagepath';
import SimpleBackdrop from "@/components/Backdrop";

import { blogs } from "@/utils/blogs";
const events = [
  /*   {
      title: "Salud Mental",
      address: "Av. Portugal 782, Santiago",
      date: "2024/02/18",
      time: "09:00",
      campus: "Sede Santiago",
      location: "Auditorio",
      image: 'https://posgrados.udp.cl/wp/wp-content/uploads/2023/12/MBA-UDP-92-scaled-1.jpg'
    },
    {
      title: "Salud Mental",
      address: "Av. Portugal 782, Santiago",
      date: "2024/02/18",
      time: "09:00",
      campus: "Sede Centro",
      location: "Auditorio",
      image: 'https://posgrados.udp.cl/wp/wp-content/uploads/2023/12/MBA-UDP-92-scaled-1.jpg'
    },
    {
      title: "Salud Mental",
      address: "Av. Portugal 782, Santiago",
      date: "2024/02/18",
      time: "09:00",
      campus: "Sede Santiago",
      location: "Auditorio",
      image: 'https://posgrados.udp.cl/wp/wp-content/uploads/2023/12/MBA-UDP-92-scaled-1.jpg'
    },
    {
      title: "Salud Mental",
      address: "Av. Portugal 782, Santiago",
      date: "2024/02/18",
      time: "09:00",
      campus: "Sede Santiago",
      location: "Auditorio",
      image: 'https://posgrados.udp.cl/wp/wp-content/uploads/2023/12/MBA-UDP-92-scaled-1.jpg'
    } */
]

const tests = [

  {
    id: '0',
    titulo: 'Test de ansiedad de Beck',
    texto: '',
    url: 'https://cetep.cl/test_salud_mental/test-de-ansiedad-de-beck/',
    imagen: saludMental05.src,
  },
]

export default function Home() {
  // const { isSuccess, isLoading, isError, data: blogs = [] } = useQuery({
  //   queryKey: ['blogs'],
  //   queryFn: async () => {
  //     const res = await fetchBlogs();
  //     console.log('RES', res);
  //     return res;
  //   }
  // })
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

  return (
    <>
      {/* <Header /> */}
      <main >
        {/* <main style={{ backgroundColor: '#fff' }}> */}
        {/* {matches && <Headerudp />} */}
        {console.log('LENGHT', blogs.length)}
        {console.log('isSmallDevice', isSmallDevice)}
        {console.log('isMediumDevice', isMediumDevice)}
        {console.log('isLargeDevice', isLargeDevice)}
        {console.log('isExtraLargeDevice', isExtraLargeDevice)}

        {!isSmallDevice && !isMediumDevice && !isLargeDevice && !isExtraLargeDevice
          ?
          <SimpleBackdrop />
          :
          <>


            {blogs.length > 0 && isSmallDevice && <ImageSlider slides={blogs.slice(0, 4)} />}
            {blogs.length > 0 && isExtraLargeDevice && <ImageSlider slides={blogs.slice(0, 4)} />}
            {/* {isLoading && <strong>Cargando...</strong>} */}

            {/* {isError && <p>Ha habido un error</p>} */}

            {/* {!isError && blogs.length === 0 && <Carrousel />} */}

            {blogs.length > 0 && <ReservaTuHora slides={blogs.slice(0, 5)} />}
            {blogs.length > 0 && <TestSlider slides={tests.slice(0, 4)} />}

            {events.length !== 0 && <Events events={events} matches={matches} />}

            <div className="row" style={{ padding: 0, margin: 0 }}>
              <div className="col-sm-12 text-center" style={{ padding: 0, margin: '32px 0 0' }}>
                <h2 style={{ fontSize: '32px', fontWeight: 400, lineHeight: '40px' }}>Preguntas frecuentes</h2>
              </div>
            </div>
            <FrequentAskedQuestions />

            <FooterDae matches={matches} />

          </>
        }
      </main>
    </>

  );
}
