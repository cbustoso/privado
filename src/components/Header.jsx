'use client'
/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import { useSection } from "@/context/SectionContext";
import ReserveBtn from "./ReserveBtn";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { logo, logoudp } from "./imagepath";
import { useMediaQuery } from "@mui/material";

import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import { usePathname } from "next/navigation";
import MenuIcon from '@mui/icons-material/Menu';
import { IoMdLogIn } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const pagesWithEvents = [
  { title: 'TÓPICOS', url: '/#topicos', label: 'topicos' },
  { title: 'TEST AUTODIAGNÓSTICO?', url: '/#test_autodiagnostico', label: 'test_autodiagnostico' },
  { title: 'EVENTOS', url: '/#eventos', label: 'eventos' },
  { title: 'PREGUNTAS FRECUENTES', url: '/#preguntas_frecuentes', label: 'preguntas_frecuentes' },
  { title: 'QUIÉNES SOMOS', url: '/quienes_somos', label: 'quienes_somos' },
  { title: 'MATERIAL DESCARGABLE', url: '/material_descargable', label: 'material_descargable' }
];

const pagesWithoutEvents = [
  { title: 'TÓPICOS', url: '/#topicos', label: 'topicos' },
  { title: 'TEST AUTODIAGNÓSTICO', url: '/#test_autodiagnostico', label: 'test_autodiagnostico' },
  { title: 'PREGUNTAS FRECUENTES', url: '/#preguntas_frecuentes', label: 'preguntas_frecuentes' },
  { title: 'QUIÉNES SOMOS', url: '/quienes_somos', label: 'quienes_somos' },
  { title: 'MATERIAL DESCARGABLE', url: '/material_descargable', label: 'material_descargable' }
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const { activeSection, setActiveSection } = useSection();
  const open = Boolean(anchorEl);
  const { data: session } = useSession()
  const EVENTS = 0;
  const pages = EVENTS !== 0 ? pagesWithEvents : pagesWithoutEvents
  const currentPage = usePathname()
  const divRef = useRef();
  const matches = useMediaQuery('(min-width:600px)');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <AppBar position="fixed" style={{ background: 'white', color: 'black', margin: 0, height: matches ? '112px' : '98px', justifyContent: matches ? 'center' : 'flex-end' }}>
      <Container maxWidth="false" style={{ background: 'white', color: 'black' }}>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', lg: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img
              src={logo.src}
              width={263}
              height={70}
              alt="Logo"
            />{" "}
          </Typography>

          {/*  MENU MOBILE */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', lg: 'none' },
              }}
            >
              {
                pages.map((page) => (
                  <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <a href={page.url} style={{ color: 'black' }}>
                        {page.title}
                      </a>
                    </Typography>
                  </MenuItem>
                ))
              }
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', lg: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={logo.src} width={'180px'} alt="" />{" "}
          </Typography>

          {/* MENU DASHBOARD */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => {
              return (
                <Link style={{ color: 'black' }} href={page.url} key={page.title} >
                  <Button
                    className={`sailec ${activeSection === page.label
                      ? 'active-header'
                      : ''
                      }`}

                    onClick={() => handleNavClick(page.label)}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >

                    {page.title}
                  </Button>
                </Link>
              )
            }
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open"> */}
            {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> */}
            {
              !session
                ? <>
                  <ReserveBtn text={'Reservar'} bgColor={'#FABB00'} color={'#000'} />
                  <Link href="/login#profesionales">
                    <IoMdLogIn style={{ fontSize: '30px', color: '#000' }} />
                  </Link>
                </>
                : session.user.picture ?
                  <button className="btn">
                    <Link href="/citas">
                      <img
                        className="avatar-img rounded-circle"
                        src={session.user.picture}
                        alt="avatar"
                        height={40}
                      />
                    </Link>
                    {/* {session.user.name} */}
                  </button>
                  :
                  <Link href="/citas">
                    <FaUserCircle style={{ height: '40px' }} />
                  </Link>
            }

            {/* </IconButton> */}
            {/* </Tooltip> */}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
