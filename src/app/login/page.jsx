"use client"
import { useState, useEffect } from "react";
// import { Link, redirect, Navigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { redirect } from "next/navigation";
import Link from "next/link";
import { AuthData } from "../../providers/AuthWrapper";

import { fetchUserMailAndPass } from "../../services/UsersServices";

import { logo } from "../../components/imagepath";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import { Eye, EyeOff } from "feather-icons-react/build/IconComponents";

import { signIn } from "next-auth/react"

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [isInvalid, setIsInvalid] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { register, handleSubmit, watch,
    formState: { errors }
  } = useForm()
  const { login } = AuthData()

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleOnSubmit = handleSubmit(async (data) => {
    console.log('DATA', data);
    try {
      const res = await login(data)
      console.log(res);
      if (res.validacion === false) {
        setIsInvalid(true)
      } else {
        setIsInvalid(false)
        setIsLoggedIn(true)
      }
    } catch (err) {
      console.log(err)
    }
  })

  // if(isLoggedIn) return <Navigate to={'/appoinmentlist'}/>

  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper login-body">
        <div className="container-fluid px-0">
          <div className="row">
            {/* Login logo */}
            <div className="col-lg-6 login-wrap" style={{
              backgroundImage: 'url(https://dae.udp.cl/cms/wp-content/uploads/2022/05/136.jpg)',
              backgroundSize: 'cover',
              backgroundPositionX: 'center'
            }}>
              <div className="login-sec">
                <div className="log-img" >
                  {/* <img
                    className="img-fluid"
                    src="https://dae.udp.cl/cms/wp-content/uploads/2022/05/136.jpg"
                    alt="#"
                  /> */}
                </div>
              </div>
            </div>
            {/* /Login logo */}
            {/* Login Content */}
            <div className="col-lg-6 login-wrap-bg">
              <div className="login-wrapper">
                <div className="loginbox">
                  <div className="login-right">
                    <div className="login-right-wrap">
                      <div className="account-logo">
                        <Link href="/admin-dashboard">
                          <img src={logo.src} width={380} alt="logo" />
                        </Link>
                      </div>
                      <h2>Login</h2>
                      {/* Form */}
                      <form >
                        <div className="form-group">
                          <label>
                            Correo electrónico <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            {...register('email', {
                              required: {
                                value: true,
                                message: 'Correo es requerido'
                              },
                              pattern: {
                                value: /^[A-Za-z0-9._%+-]+@gmail\.com$/,
                                message: 'Correo no es válido'
                              }
                            })}
                          />
                          {errors.email && <span><small>{errors.email.message}</small></span>}

                        </div>
                        <div className="form-group">
                          <label>
                            Contraseña <span className="login-danger">*</span>
                          </label>
                          <input
                            className="form-control pass-input"
                            type={passwordVisible ? 'password' : ''}
                            {...register('password', {
                              required: {
                                value: true,
                                message: 'Contraseña es requerida'
                              },
                              minLength: {
                                value: 6,
                                message: 'Contraseña incorrecta'
                              }
                            })}
                          />
                          {
                            errors.password && <span><small>{errors.password.message}</small></span>
                          }

                          <span
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                          >
                            {passwordVisible ? <EyeOff className="react-feather-custom" /> : <Eye className="react-feather-custom" />}
                          </span>
                        </div>

                        <div className="forgotpass">
                          {/* <div className="remember-me">
                            <label className="custom_check mr-2 mb-0 d-inline-flex remember-me">
                              {" "}
                              Remember me
                              <input type="checkbox" name="radio" />
                              <span className="checkmark" />
                            </label>
                          </div>
                          <Link href="/forgotpassword">¿Olvidaste la contraseña?</Link> */}
                        </div>
                        <div>
                          {isInvalid && <span style={{ color: 'red' }}><small>Usuario no encontrado</small></span>}
                        </div>
                        <div className="form-group login-btn">
                          <button
                            className="btn btn-primary btn-block"
                            onClick={handleOnSubmit}
                          >
                            Iniciar sesión
                          </button>
                        </div>
                      </form>
                      {/* /Form */}
                      <div className="next-sign">
                        <p className="account-subtitle">
                          {/* ¿No tienes una cuenta? <Link href="/signup">Regístrate</Link> */}
                        </p>
                        {/* Social Login */}
                        <div className="social-login">
                          {/* <div id='signInDiv'></div> */}
                          {/* <button
                            onClick={() => signIn()}
                            className='btn btn-rounded seilac'
                            style={{ margin: '16px 0' }}
                          // onClick={handleOpen}
                          >
                            Login
                          </button> */}
                        </div>
                        {/* /Social Login */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Login Content */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
