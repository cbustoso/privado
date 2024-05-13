"use client"
import Carrousel from '@/components/Carrousel';
import useMediaQuery from '@mui/material/useMediaQuery';
import { carrousel01, carrousel02, carrousel03, carrousel04 } from "@/components/imagepath";
import { Button, Stack } from '@mui/material';

export default function Noticias() {
  const blogs = [
    {
      imagen: carrousel01,
      titulo: 'Stand de Salud Mental',
      texto: 'El Departamento de Salud Mental acompaña de múltiples maneras a la comunidad estudiantil. Una de ellas, es a través del Stand de Salud Mental, donde podrás encontrar entretenidas actividades e información.',
      id: '01',
    },
    {
      imagen: carrousel02,
      titulo: 'Talleres y Charlas',
      texto: 'El DSME cuenta con talleres de diversas temáticas, relacionadas con salud mental, para toda la comunidad. Estos talleres permiten poder apoyar el proceso académico desde el área socioemocional.',
      id: '02',
    },
    {
      imagen: carrousel03,
      titulo: 'Conversatorios y Diálogos',
      texto: 'Para el DSME es muy importante escuchar las demandas y sugerencias de la comunidad estudiantil, por lo que generamos espacios de conversación donde podemos levantar información y a su vez, validar sus distintas opiniones.',
      id: '03',
    },
    {
      imagen: carrousel04,
      titulo: 'Premios, concursos y mucho más...',
      texto: 'En el DSME contamos con elementos y herramientas que nos gusta compartir con ustedes, por eso cada vez que presentamos nuestro stand, les damos la posibilidad de que al participar se lleven un premio y/o regalo, relacionado con salud mental.',
      id: '04',
    },
  ]

  const matches = useMediaQuery('(min-width:600px)');


  return (
    <>
     {/*  <div className="row flex-column d-flex align-items-center roboto">
        <div className="col-12 col-lg-10">
          <div className="card">
            <div className="card-body flex-row d-flex justify-content-center">
              <h3>Noticias</h3>
            </div>

            <div className="card-body flex-md-column flex-lg-row d-flex justify-content-center">

              <Carrousel slides={blogs.slice(0, 5)} matches={matches} parentWidth={1200} />
            </div>
          </div>
        </div>
      </div> */}
      <div className="row flex-column d-flex align-items-center roboto">
        <div className="col-12 col-lg-10">
          <div className="card">
            <div className="card-body flex-lg-row flex-column d-flex justify-content-center align-items-center" style={{ margin: '20px' }}>
              <div className="col-12 col-lg-6" style={{ fontSize: '50px', textWrap: 'pretty' }}>
                <p>El DSME tiene una Playlist en Spotify para ti: "Respiro Musical".</p>
              </div>
              <div className="col-12 col-lg-6">

                <Stack
                  spacing={2}
                  direction="column"
                  alignItems="center"
                >
                  <Button variant="contained" sx={{ backgroundColor: '#61AACE' }}>
                    <a href="https://open.spotify.com/playlist/6hs32eFJp6S9Ht1rNU5zKy?si=df639df3920b4084">
                      Haz click aquí para escuchar la Playlist: "Respiro Musical" 🎵.
                    </a>
                  </Button>
                  <Button variant="contained" sx={{ backgroundColor: '#61CE70' }}>
                    <a href="https://forms.gle/SXugHQstcyLceLT66">
                      Haz click aquí para agregar canciones a la Playlist: "Respiro musical" 🎵.
                    </a>
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
