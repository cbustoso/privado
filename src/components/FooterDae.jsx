
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Link from 'next/link';
import { white_logo, white_acreditacion, logo02_white } from './imagepath';
import FacebookIcon from '@mui/icons-material/Facebook';
import { LocationCity } from '@mui/icons-material';
import Map from 'feather-icons-react/build/IconComponents/Map';
import Phone from 'feather-icons-react/build/IconComponents/Phone';
import Mail from 'feather-icons-react/build/IconComponents/Mail';
import { Box, useMediaQuery } from '@mui/material';

import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import ReserveBtn from './ReserveBtn';

const FooterDae = () => {
  const matches = useMediaQuery('(min-width:600px)');

  console.log('MATCHES', matches);
  return (
    <>
      <div className="row d-flex justify-content-center" style={{ backgroundColor: '#2D2D2D', margin: 0 }}>
        <Box className="container col-12 col-lg-10"
          sx={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxWidth: '1294px !important'
          }}>

          <div
            className={`row mb-4 ${matches ? 'justify-content-between' : 'justify-content-center'}`}
            style={{
              padding: '20px 0',
              borderBottom: '1px solid white',
              display: 'flex',
              justifyContent: 'center',
              gap: matches ? '0px' : '20px',
              borderBottom: '1px solid white',
            }}
          >
            <div className={`col-10 col-md-4 ${matches ? '' : 'mt-4'}`}>
              <h4>Salud Mental</h4>
              <p><Map /> Manuel Rodríguez Sur 343</p>
              <p><Mail /> saludmentalestudiantil@mail.udp.cl</p>
              <Link href='/login'>
                <button className='btn btn-secondary '>
                  Acceso profesionales
                </button>
              </Link>
            </div>
            <div className={`col-10 col-md-4 ${matches ? '' : 'mt-4'}`}>
              <h4>Vida Universitaria</h4>
              <p><Map /> Manuel Rodríguez Sur 361</p>
              <p><Phone /> +56 2 2676 2002</p>
              <p><Mail /> vidauniversitaria@mail.udp.cl</p>
            </div>

            {/* BTN RESERVAR */}
            <div className={`col-10 col-md-4 ${matches ? '' : 'mt-4'} d-flex flex-column align-items-center justify-content-center`}
              style={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "16px",
                width: "fit-content"
              }}>
              <p style={{ fontWeight: 700, fontSize: "20px", lineHeight: "28px", margin: "10px 0 0" }}>¿Hablemos?</p>
              <p style={{ fontSize: "14px", lineHeight: "20px", marginBottom: "8px" }}>Si necesitas ayuda, contáctanos y te ayudaremos.</p>
              <ReserveBtn text='Reservar' bgColor="#FABB00" color="#000" />
            </div>
          </div>
          {matches
            ? <>
              <div className="row my-4"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: matches ? '0px' : '20px'
                }}>
                <div className="col-10 col-lg-4 p-0">
                  <Image
                    src={logo02_white}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '285px',
                    }}
                    width={500}
                    height={300}
                    alt=""
                  />
                </div>
                {/* REDES SOCIALES */}
                <div className="col-10 col-lg-2 d-flex flex-column align-items-end ">
                  <p>Síguenos en</p>
                  <div style={{ display: 'inline-flex' }}>
                    <a href="https://www.linkedin.com/company/udiegoportales"
                      style={{
                        width: '30px',
                        height: '30px',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'start',
                      }}>
                      <FaLinkedinIn />
                    </a>
                    <a href="https://www.facebook.com/bienestarestudiantiludp/"
                      style={{
                        width: '30px',
                        height: '30px',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'start',
                      }}>
                      <FaFacebookF />
                    </a>

                    <a href="https://www.instagram.com/daeudp"
                      style={{
                        width: '32px',
                        height: '32px',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'start',
                      }}>
                      <BsInstagram />
                    </a>
                    <a href="https://twitter.com/udp_cl"
                      style={{
                        width: '30px',
                        height: '30px',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'start',
                      }}>

                      <FaTwitter />
                      {/* <BsTwitterX  /> */}
                    </a>
                    <a href="https://www.youtube.com/channel/UCt8RovDPs5pdklo_oBVLuEw"
                      style={{
                        width: '30px',
                        height: '30px',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'start',
                      }}>
                      <FaYoutube />
                    </a>
                  </div>
                </div>
              </div>
            </>
            : <>
              <div className="row my-4"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: matches ? '0px' : '20px'
                }}>

                {/* REDES SOCIALES */}
                <div className="col-10 col-lg-2 d-flex flex-column align-items-center ">
                  <p>Síguenos en</p>
                  <div style={{ display: 'inline-flex' }}>
                    <a href="https://www.linkedin.com/company/udiegoportales"
                      style={{
                        width: '30px',
                        height: '30px',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'start',
                      }}>
                      <FaLinkedinIn />
                    </a>
                    <a href="https://www.facebook.com/bienestarestudiantiludp/"
                      style={{
                        width: '30px',
                        height: '30px',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'start',
                      }}>
                      <FaFacebookF />
                    </a>

                    <a href="https://www.instagram.com/daeudp"
                      style={{
                        width: '32px',
                        height: '32px',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'start',
                      }}>
                      <BsInstagram />
                    </a>
                    <a href="https://twitter.com/udp_cl"
                      style={{
                        width: '30px',
                        height: '30px',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'start',
                      }}>

                      <FaTwitter />
                      {/* <BsTwitterX  /> */}
                    </a>
                    <a href="https://www.youtube.com/channel/UCt8RovDPs5pdklo_oBVLuEw"
                      style={{
                        width: '30px',
                        height: '30px',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'start',
                      }}>
                      <FaYoutube />
                    </a>
                  </div>
                </div>
                <div className="col-10 col-lg-4 p-0 d-flex justify-content-center">
                  <Image
                    src={logo02_white}
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '285px',
                    }}
                    width={500}
                    height={300}
                    alt=""
                  />
                </div>
              </div>
            </>
          }
        </Box>

        {
          matches
            ?
            <>
              <Box className="container col-12 col-lg-10"
                sx={{
                  color: '#000',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  maxWidth: '1294px !important',
                  bgcolor: '#fff'
                }}>
                <div className="row">
                  <div className="col-6" style={{ alignSelf: "center" }}>
                    <p style={{ fontSize: "14px", margin: "0px", padding: "10px 0" }}>
                      Dirección de Asuntos Estudiantiles - Departamento de Salud Mental Estudiantil
                    </p>
                  </div>
                  <div className="col-2" style={{ alignSelf: "center" }}>
                    <p style={{ fontSize: "12px", margin: "0px", padding: "10px 0" }}>
                      · @Daeudp · https://dae.udp.cl
                    </p>
                  </div>
                  <div className="col-4" style={{ alignSelf: "center" }}>
                    <p style={{ fontSize: "12px", margin: "0px", padding: "10px 0" }}>
                      <FaLocationDot /> Av. Manuel Rodríguez 343, Santiago, Región Metropolitana
                    </p>
                  </div>
                </div>
              </Box>
            </>
            :
            <>
              <Box className="container col-10"
                sx={{
                  color: '#000',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  maxWidth: '1294px !important',
                  bgcolor: '#fff',
                  borderRadius: '8px 8px 0 0',
                }}>
                <div className="col-12" style={{ alignSelf: "center" }}>
                  <p style={{ fontSize: "12px", margin: "0px", padding: "10px 0" }}>
                    <FaLocationDot /> Av. Manuel Rodríguez 343, Santiago, Región Metropolitana
                  </p>
                </div>
                <div className="col-12" style={{ alignSelf: "center", borderRadius: '8px 8px 0 0', backgroundColor: '#A6A6A6'  }}>
                  <p style={{ fontSize: "14px", margin: "0px", padding: "10px " }}>
                    Dirección de Asuntos Estudiantiles - Departamento de Salud Mental Estudiantil
                  </p>
                  <p style={{ fontSize: "12px", margin: "0px", padding: "10px " }}>
                    · @Daeudp · https://dae.udp.cl
                  </p>
                </div>

              </Box>
            </>
        }
      </div>
      {/* </div> */}
    </>
  );

}

export default FooterDae;