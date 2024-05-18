'use client'
/* eslint-disable no-unused-vars */
import React from "react";
import ReserveBtn from "./ReserveBtn";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { logo, logoudp } from "./imagepath";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = [
  { title: 'TÓPICOS', url: '#topicos' },
  { title: 'TEST AUTODIAGNÓSTICO?', url: '#test_autodiagnostico' },
  { title: 'EVENTOS', url: '#eventos' },
  { title: 'PREGUNTAS FRECUENTES', url: '#preguntas_frecuentes' }
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { data: session } = useSession()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar position="sticky" style={{ background: 'white', color: 'black', margin: 0 }}>
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
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a href={page.url} style={{ color: 'black' }}>
                      {page.title}
                    </a>
                  </Typography>
                </MenuItem>
              ))}

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
              if (page.title === 'Recomendaciones') {
                return (
                  <div key={page.title}>
                    <Button
                      className="roboto"
                      id="demo-positioned-button"
                      aria-controls={open ? 'demo-positioned-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                      sx={{ my: 2, color: 'black' }}
                    >
                      {page.title}
                    </Button>
                    <Menu
                      id="demo-positioned-menu"
                      aria-labelledby="demo-positioned-button"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                    >
                      {page.submenu.map(subpage => (
                        <MenuItem onClick={handleClose} key={subpage.title}>
                          <Link style={{ color: 'black' }} href={subpage.url}>
                            {subpage.title}
                          </Link>
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                )
              } else {
                return (
                  <Button
                    className="roboto"
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'black', display: 'block' }}
                  >
                    <a style={{ color: 'black' }} href={page.url}>
                      {page.title}
                    </a>
                  </Button>
                )
              }
            }
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open"> */}
            {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> */}
            {
              !session
                ? <ReserveBtn text={'Reservar'} bgColor={'#FABB00'} color={'#000'} />
                : <button className="btn">
                  <img
                    className="avatar-img rounded-circle"
                    src={session.user.picture}
                    alt="profile image"
                    height={40}
                  />
                  {/* {session.user.name} */}
                </button>
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
