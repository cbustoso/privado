'use client'
import FlipCard from "@/components/FlipCard";
import ImageSlider from "@/components/ImageSlider";
import { blogs } from "@/utils/blogs";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa";
import FooterDae from "@/components/FooterDae";
import SimpleBackdrop from "@/components/Backdrop";

const material_descargable = [
  {
    titulo: 'Estrés Académico',
    descripcion: 'A veces creemos que sentir estrés en la universidad es signo de "debilidad" y muchas veces somos juzgados por lo mismo. ¿Pero sabías que puede ser un sentir propio de una situación nueva y de un proceso de aprendizaje?',
    archivo: 'https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/10/Que-es-el-estres-academico.pdf'
  },
  {
    titulo: 'Estrategias para el Estrés',
    descripcion: 'Aquí encontrarás algunas estrategias de afrontamiento ante situaciones estresantes, que te pueden servir tanto en tu trayectoria universitaria como en tu quehacer diario.',
    archivo: 'https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/10/Como-afrontar-el-estres-academico.pdf'
  },
  {
    titulo: 'Depresión Estudiantil',
    descripcion: '¿Hablemos de depresión?',
    archivo: 'https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/10/hablemos-de-depresion-estudiantil.pdf'
  },
  {
    titulo: 'Alteraciones Psicológicas',
    descripcion: '¿Qué alteraciones y/o manifestaciones psicológicas puedo sentir siendo estudiante universitario?',
    archivo: 'https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/10/%C2%BFQue.pdf'
  },
  {
    titulo: 'Factores Protectores',
    descripcion: 'Poco se habla de esas prácticas que es sano llevar a cabo cuando estamos en un proceso de aprendizaje. Aquí te dejamos algunas de ellas.',
    archivo: 'https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/10/%C2%BFQue.pdf'
  },
  {
    titulo: 'Crisis de Ansiedad',
    descripcion: 'Te ayudamos con una técnica práctica pero esos momentos donde identificas que te puede dar o te está dando una crisis de ansiedad.',
    archivo: 'https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/10/Infografia-Grounding.pdf'
  },
  {
    titulo: 'Manual de Autocuidado',
    descripcion: 'El Departamento de Salud Mental Estudiantil (DSME) creó para la comunidad este Manual de Autocuidado que contiene diversas estrategias que te pueden servir.',
    archivo: 'https://saludmentalestudiantil.udp.cl/wp-content/uploads/2023/11/230905_UDP_ManualAutocuidado-1.pdf'
  },
  {
    titulo: 'Prevensión del suicidio en Universitarios: ¿Qué debes saber?',
    descripcion: 'El Departamento de Salud Mental Estudiantil (DSME) creó para la comunidad este Manual de Autocuidado que contiene diversas estrategias que te pueden servir.',
    archivo: 'https://drive.google.com/file/d/1bSTiIa0hfuxDUBkEdpIESlyevdihrzQW/view'
  },
  {
    titulo: 'Depresión en Universitarios: ¿Qué es?, sintomatología y factores protectores',
    descripcion: 'El Departamento de Salud Mental Estudiantil (DSME) creó para la comunidad este Manual de Autocuidado que contiene diversas estrategias que te pueden servir.',
    archivo: 'https://drive.google.com/file/d/1ipMa0gTHavUkJ3MtsqPrQf3GfrFYxLdj/view'
  },
  {
    titulo: 'Ataques de pánico: ¿Qué hacer?',
    descripcion: 'El Departamento de Salud Mental Estudiantil (DSME) creó para la comunidad este Manual de Autocuidado que contiene diversas estrategias que te pueden servir.',
    archivo: 'https://drive.google.com/file/d/1Ns-c8pRyu1bsgWvNXWB9sdBEo-IX5E5B/view'
  },
]

export default function MaterialDescargable() {
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
  const matches = useMediaQuery('(min-width:600px)');
  const router = useRouter()

  return (
    <>
      {!isSmallDevice && !isMediumDevice && !isLargeDevice && !isExtraLargeDevice
        ?
        <SimpleBackdrop />
        :
        <>
          {blogs.length > 0 && isSmallDevice && <ImageSlider slides={blogs.slice(0, 4)} />}
          {blogs.length > 0 && isExtraLargeDevice && <ImageSlider slides={blogs.slice(0, 4)} />}

          <div className="row flex-column d-flex align-items-center sailec" style={{ marginTop: '10px' }}>
            <div className="col-12 col-lg-10">
              <div className="card" style={{ border: 'none' }}>
                {matches &&
                  <button className='btn mt-4 mb-5'
                    style={{
                      border: '1px solid #A6A6A6',
                      height: '56px',
                      width: '163px',
                      padding: '0px 24px',
                      borderRadius: '100px',
                      marginLeft: '76px'
                    }}
                    onClick={() => router.back()}
                  >
                    <FaArrowLeft /> Volver
                  </button>}
                <div className="card-body flex-row d-flex justify-content-center">
                  <h3 style={{ fontWeight: 600, fontSize: '48px' }}>Material descargable</h3>

                </div>

                <div className="card-body flex-md-column flex-lg-row d-flex align-self-center" style={{ fontSize: '20px', textAlign: 'center' }}>
                  <p>
                    El Departamento de Salud Mental Estudiantil de UDP (DSME) está constantemente elaborando material para poder prevenir y promocionar el bienestar integral de la comunidad educativa. A continuación, te dejamos algunos documentos que pueden servirte a ti o a alguien que conoces.
                  </p>
                </div>

                <div className="row card-body flex-md-column flex-lg-row d-flex justify-content-center align-items-center" style={{ rowGap: '20px' }}>
                  {material_descargable.map(item => (
                    <div className="col-12 col-lg-6" key={item.titulo}>
                      <FlipCard
                        titulo={item.titulo}
                        descripcion={item.descripcion}
                        archivo={item.archivo}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <FooterDae matches={matches} />
        </>}
    </>

  );
}
