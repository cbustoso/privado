
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import { white_logo, white_acreditacion } from './imagepath';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Twitter, Instagram, YouTube, Facebook } from '@mui/icons-material';
import Map from 'feather-icons-react/build/IconComponents/Map';
import Phone from 'feather-icons-react/build/IconComponents/Phone';
import Mail from 'feather-icons-react/build/IconComponents/Mail';

import { FaFacebookF } from "react-icons/fa";


const FooterDae = () => {

  return (
    <>
      <div className="page-wrapper" style={{ marginLeft: 0 }}>
        <div className="content"></div>
        <div className="row" style={{ backgroundColor: '#2D2D2D', color: 'white', display: 'flex', justifyContent: 'center' }}>
          <div className="col-12 col-lg-10">
            <div className="row" style={{ margin: '40px auto', padding: '20px 0', borderBottom: '1px solid white', display: 'flex', justifyContent: 'center' }}>
              <div className="col-10 col-lg-4">
                <Image
                  src={white_logo}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '285px'
                  }}
                  width={500}
                  height={300}
                  alt=""
                />
              </div>
              <div className="col-10 col-lg-4 m4">
                <Image
                  src={white_acreditacion}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxWidth: '285px'
                  }}
                  width={500}
                  height={300}
                  alt=""
                />
              </div>
              <div className="col-12 col-sm-10 col-lg-4 d-flex flex-column align-items-left">
                <div style={{ display: 'inline-flex' }}>
                  <a href="" style={{
                    width: '30px',
                    height: '30px',
                    background: '#034285',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '10px'
                  }}>

                    <FaFacebookF />
                  </a>
                  <a href="" style={{
                    width: '30px',
                    height: '30px',
                    background: '#22AADE',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '10px'
                  }}>

                    <Twitter />
                  </a>
                  <a href="" style={{
                    width: '30px',
                    height: '30px',
                    background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '10px'
                  }}>
                    <Instagram />
                  </a>
                  <a href="" style={{
                    width: '30px',
                    height: '30px',
                    background: '#DD231C',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '10px'
                  }}>
                    <YouTube />
                  </a>
                </div>
                <span>
                </span>
                <p>2024 @ UNIVERSIDAD DIEGO PORTALES</p>
              </div>
            </div>
            <Divider style={{ width: '100%' }} flexItem />
            <div className="row justify-content-center">
              <div className="col-12 col-sm-10 col-lg-4 m4">
                <h4>Bienestar Estudiantil</h4>
                <p><Map /> Manuel Rodríguez Sur 343</p>
                <p><Phone /> +56 2 2676 8314</p>
                <p><Mail /> bienestarestudiantil@udp.cl</p>
              </div>
              <div className="col-12 col-sm-10 col-lg-4 m4">
                <h4>Salud Mental</h4>
                <p><Map /> Manuel Rodríguez Sur 343</p>
                <p><Mail /> saludmentalestudiantil@mail.udp.cl</p>
              </div>
              <div className="col-12 col-sm-10 col-lg-4">
                <h4>Vida Universitaria</h4>
                <p><Map /> Manuel Rodríguez Sur 361</p>
                <p><Phone /> +56 2 2676 2002</p>
                <p><Mail /> vidauniversitaria@mail.udp.cl</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* 
      <Box sx={{ width: '90svw', margin: '20px auto', bgcolor: 'background.paper', fontFamily: 'lato' }}>
        <nav aria-label="main mailbox folders" style={{ margin: '20px' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Link 1" />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ border: '1.5px solid #000000', opacity: 1 }} />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Link 2" />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ border: '1.5px solid #000000', opacity: 1 }} />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Link 3" />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ border: '1.5px solid #000000', opacity: 1 }} />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Link 4" />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ border: '1.5px solid #000000', opacity: 1 }} />
          </List>
        </nav>
        <div
          className="content text-center"
          style={{
            borderRadius: '20px',
            background: '#EEE',
            padding: '15px',
            margin: '10px 20px'
          }}
        >
          <h3 style={{ fontFamily: 'sailec', fontWeight: 700, fontSize: '20px', lineHeight: '27.5px' }}>
            ¿Hablemos?
          </h3>
          <p style={{ fontFamily: 'lato', fontWeight: 400, fontSize: '14px', lineHeight: '21px' }}>
            Si necesitas ayuda, contáctanos y te ayudaremos.
          </p>
          <ReserveBtn text={'Reservar'} bgColor={'#FF5253'} color={'#fff'} />
        </div>
        <div className="content text-center" style={{ margin: '20px' }}>
          <div className="row">
            <div className="col-sm-12 patient-visit">
              <LinkedIn sx={{ fontSize: '32px' }} />
              <Facebook sx={{ fontSize: '32px' }} />
              <Instagram sx={{ fontSize: '32px' }} />
              <Twitter sx={{ fontSize: '32px' }} />
              <YouTube sx={{ fontSize: '32px' }} />
            </div>
          </div>
        </div>
        <Divider sx={{ border: '1.5px solid #000000', opacity: 1, width: '80svw' }} />
        <div className="content text-center" style={{ padding: 0, backgroundColor: '#F1F1F1', borderRadius: '8px 8px 0 0', marginTop: '10px' }}>
          <div className="row">
            <div className="col-sm-12 patient-visit">
              <p style={{ fontSize: '14px', lineHeight: '21px', padding: '16px 16px 0 16px' }}>
                <LocationOnSharp /> Av. Manuel Rodríguez 343, Santiago, Región
                Metropolitana
              </p>
              <div
                className="row"
                style={{
                  backgroundColor: '#A6A6A6',
                  padding: '16px 16px 32px 16px',
                  width: '100%',
                  margin: 'auto',
                  borderRadius: '8px 8px 0 0'
                }}
              >
                <div
                  className="col-sm-12 text-center"
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}
                >
                  <p style={{ textWrap: 'balance' }}>
                    Dirección de Asuntos Estudiantiles
                    Departamento de Salud Mental Estudiantil
                  </p>
                  <p style={{ margin: '16px 0 0' }}>@Daeudp . http://dae.udp.cl/</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box> */}
    </>
  );

}

export default FooterDae;