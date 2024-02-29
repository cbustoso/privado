/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Headerudp from "../Headerudp";
import Sidebar from "../Sidebar";
import { DatePicker } from "antd";
import Select from "react-select";
import { Link } from 'react-router-dom';
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useForm, Controller } from 'react-hook-form';
import { TextField, Alert } from "@mui/material";

import { addDoctor } from "../../services/DoctorsServices";

const AddDoctor = () => {
  const { register, handleSubmit, watch, control,
    formState: { errors }
  } = useForm()

  const [isClicked, setIsClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [dataDoctor, setDataDoctor] = useState(null)
  const [success, setSuccess] = useState('initial')
  // const [statusPetition, setStatusPetition] = useState({
  //   warning: false,
  //   success: false
  // })
  const [options, setOptions] = useState([
    { value: 1, label: "Select City" },
    { value: 2, label: "Alaska" },
    { value: 3, label: "California" },
  ]);
  const [option, setOption] = useState([
    { value: 1, label: "Select Country" },
    { value: 2, label: "Usa" },
    { value: 3, label: "Uk" },
    { value: 4, label: "Italy" },
  ]);
  const [statevalue, setStateValue] = useState([
    { value: 1, label: "Select City" },
    { value: 2, label: "Alaska" },
    { value: 3, label: "California" },
  ]);
  const [gender, setGender] = useState([
    { value: 1, label: "Femenino" },
    { value: 2, label: "Masculino" },
    { value: 3, label: "No binario" },
    { value: 4, label: "Otro" },
    { value: 5, label: "Prefiero no decir" }
  ]);

  const [department, setDepartment] = useState([
    { value: "Psicopedagogia", label: "Psicopedagogia", name: "speciality" },
    { value: "Psicologia", label: "Psicologia", name: "speciality" },
    { value: "Psiquiatria", label: "Psiquiatria", name: "speciality" },
  ]);

  const onChange = (date, dateString) => {
    // console.log(date, dateString);
    setIsClicked(true);
  };
  const loadFile = (event) => {
    // Handle file loading logic here
  };

  const onSubmit = handleSubmit( async data => {
    setSuccess('initial')
    console.log('error', errors)
    if (data) {
      console.log('data', data)
      // setDataDoctor(data)
      try {
        const response = await addDoctor(data)
        console.log(response)
        // if(response.err) setStatusPetition(prevState => ({...prevState, warning: true}))
        // else setStatusPetition(prevState => ({...prevState, success: true}))
        setSuccess('success')
      } catch(err) {
        console.log('ERR', err)
        setSuccess('fail')
      }
      
    } else {
      console.log('FAIL')
    }
  })

  const onConfirm = async () => {
    const response = await addDoctor(dataDoctor)
    console.log(response)
  }

  return (
    <div>
      <Headerudp />
      <Sidebar id="menu-item1" id1="menu-items1" activeClassName="add-doctor" />
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Profesionales </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">Agregar Profesionales</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <form onSubmit={onSubmit}>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>Detalles del Profesional</h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Nombre <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder=""
                              {...register('name', {
                                required: {
                                  value: true,
                                  message: 'Nombre es requerido'
                                },
                                minLength: {
                                  value: 2,
                                  message: 'Nombre debe tener al menos 2 caracteres'
                                }
                              })}
                            />
                            {
                              errors.name && <span><small>{errors.name.message}</small></span>
                            }
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Apellido <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder=""
                              {...register('lastName', {
                                required: {
                                  value: true,
                                  message: 'Apellido es requerido'
                                },
                                minLength: {
                                  value: 2,
                                  message: 'Apellido debe tener al menos 2 caracteres'
                                }
                              })}
                            />
                            {
                              errors.lastName && <span><small>{errors.lastName.message}</small></span>
                            }
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Teléfono <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder=""
                              {...register('mobile', {
                                required: {
                                  value: true,
                                  message: 'Teléfono es requerido'
                                }
                              })}
                            />
                            {
                              errors.mobile && <span><small>{errors.mobile.message}</small></span>
                            }
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Correo electrónico <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="email"
                              placeholder=""
                              {...register('email', {
                                required: {
                                  value: true,
                                  message: 'Teléfono es requerido'
                                }
                              })}
                            />
                            {
                              errors.email && <span><small>{errors.email.message}</small></span>
                            }
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Contraseña <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              placeholder=""
                              name="password"
                              {...register('password', {
                                required: {
                                  value: true,
                                  message: 'Password es requerida'
                                },
                                minLength: {
                                  value: 6,
                                  message: 'Contraseña debe tener al menos 6 caracteres'
                                }
                              })}
                            />
                            {errors.password && <span><small>{errors.password.message}</small></span>}
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Confirmar contraseña{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              placeholder=""
                              {...register('confirmPassword', {
                                required: {
                                  value: true,
                                  message: 'Confirmación requerida'
                                },
                                validate: value => value === watch('password') || 'Las contraseñas no coinciden'
                              })}
                            />
                            {errors.confirmPassword
                              && <span><small>{errors.confirmPassword.message}</small></span>}
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms cal-icon">
                            <label>
                              Fecha de nacimiento{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <Controller
                              control={control}
                              name="dateOfBirth"
                              {...register('dateOfBirth', {
                                required: {
                                  value: true,
                                  message: 'Fecha es requerida',
                                }
                              })}
                              ref={null}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker
                                  className="form-control datetimepicker"
                                  onChange={onChange}
                                  suffixIcon={null}
                                  style={{
                                    borderColor: isClicked ? '#2E37A4' : '2px solid rgba(46, 55, 164, 0.1)',
                                  }}
                                />
                              )}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group select-gender">
                            <label className="gen-label">
                              Género<span className="login-danger">*</span>
                            </label>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="gender"
                                  value="masculino"
                                  className="form-check-input"
                                  {...register('gender', {
                                    required: {
                                      value: true,
                                      message: 'Género es requerido'
                                    }
                                  })}
                                />
                                Masculino
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="gender"
                                  value="femenino"
                                  className="form-check-input"
                                  {...register('gender', {
                                    required: {
                                      value: true,
                                      message: 'Género es requerido'
                                    }
                                  })}
                                />
                                Femenino
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="gender"
                                  value="otro"
                                  className="form-check-input"
                                  {...register('gender', {
                                    required: {
                                      value: true,
                                      message: 'Género es requerido'
                                    }
                                  })}
                                />
                                Otro
                              </label>
                            </div>
                            {errors.gender && <span><small>{errors.gender.message}</small></span>}
                          </div>
                        </div>
                        {/* <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Especialidad {" "}
                              <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder=""
                            />
                          </div>
                        </div> */}
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Especialidad <span className="login-danger">*</span>
                            </label>
                            <Controller
                              control={control}
                              name="speciality"
                              {...register('speciality', {
                                required: {
                                  value: true,
                                  message: 'Especialidad es requerida',
                                }
                              })}
                              ref={null}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <Select
                                  defaultValue={selectedOption}
                                  onChange={onChange}
                                  options={department}
                                  id="search-commodity"
                                  components={{
                                    IndicatorSeparator: () => null
                                  }}
                                  styles={{
                                    control: (baseStyles, state) => ({
                                      ...baseStyles,
                                      borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1);',
                                      boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
                                      '&:hover': {
                                        borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
                                      },
                                      borderRadius: '10px',
                                      fontSize: "14px",
                                      minHeight: "45px",
                                    }),
                                    dropdownIndicator: (base, state) => ({
                                      ...base,
                                      transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                                      transition: '250ms',
                                      width: '35px',
                                      height: '35px',
                                    }),
                                  }}
                                />
                              )}
                            />
                            {errors.speciality && <span><small>{errors.speciality.message}</small></span>}

                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Campus <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder=""
                              name="campus"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-12">
                          <div className="form-group local-forms">
                            <label>
                              Dirección <span className="login-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              rows={3}
                              cols={30}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Ciudad <span className="login-danger">*</span>
                            </label>
                            <Select
                              menuPosition={'fixed'}
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={options}
                              menuPortalTarget={document.body}
                              styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                              id="search-commodity"
                              components={{
                                IndicatorSeparator: () => null
                              }}

                              styles={{
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                                  borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1);',
                                  boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
                                  '&:hover': {
                                    borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
                                  },
                                  borderRadius: '10px',
                                  fontSize: "14px",
                                  minHeight: "45px",
                                }),
                                dropdownIndicator: (base, state) => ({
                                  ...base,
                                  transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                                  transition: '250ms',
                                  width: '35px',
                                  height: '35px',
                                }),
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              País <span className="login-danger">*</span>
                            </label>
                            <Select
                              menuPosition={'fixed'}
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={option}
                              menuPortalTarget={document.body}
                              styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                              id="search-commodity"
                              components={{
                                IndicatorSeparator: () => null
                              }}

                              styles={{
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                                  borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1);',
                                  boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
                                  '&:hover': {
                                    borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
                                  },
                                  borderRadius: '10px',
                                  fontSize: "14px",
                                  minHeight: "45px",
                                }),
                                dropdownIndicator: (base, state) => ({
                                  ...base,
                                  transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                                  transition: '250ms',
                                  width: '35px',
                                  height: '35px',
                                }),
                              }}
                            />

                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Región {" "}
                              <span className="login-danger">*</span>
                            </label>
                            <Select
                              menuPosition={'fixed'}
                              defaultValue={selectedOption}
                              onChange={setSelectedOption}
                              options={options}
                              menuPortalTarget={document.body}
                              styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                              id="search-commodity"
                              components={{
                                IndicatorSeparator: () => null
                              }}

                              styles={{
                                control: (baseStyles, state) => ({
                                  ...baseStyles,
                                  borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1);',
                                  boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
                                  '&:hover': {
                                    borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
                                  },
                                  borderRadius: '10px',
                                  fontSize: "14px",
                                  minHeight: "45px",
                                }),
                                dropdownIndicator: (base, state) => ({
                                  ...base,
                                  transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                                  transition: '250ms',
                                  width: '35px',
                                  height: '35px',
                                }),
                              }}
                            />

                          </div>
                        </div>
                        {/* <div className="col-12 col-sm-12">
                          <div className="form-group local-forms">
                            <label>
                              Biografía{" "}
                              <span className="login-danger"></span>
                            </label>
                            <textarea
                              className="form-control"
                              rows={3}
                              cols={30}
                              defaultValue={""}
                            />
                          </div>
                        </div> */}
                        {/* <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-top-form"> */}
                            {/* <label className="local-top">
                              Avatar <span className="login-danger"></span>
                            </label>
                            <div className="settings-btn upload-files-avator">
                              <input
                                type="file"
                                accept="image/*"
                                name="image"
                                id="file"
                                onChange={loadFile}
                                className="hide-input"
                              />
                              <label htmlFor="file" className="upload">
                                Elegir imagen
                              </label>
                            </div> */}
                            {/* <div className="settings-btn upload-files-avator">
                              <input
                                type="file"
                                accept="image/*"
                                name="image"
                                id="file"
                                onchange="loadFile(event)"
                                className="hide-input"
                              />
                              <label htmlFor="file" className="upload">
                                Choose File
                              </label>
                            </div> */}
                          {/* </div>
                        </div> */}
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group select-gender">
                            <label className="gen-label">
                              Estado <span className="login-danger">*</span>
                            </label>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  value="activo"
                                  className="form-check-input"
                                  {...register('status', {
                                    required: {
                                      value: true,
                                      message: 'Estado es requerido'
                                    }
                                  })}
                                />
                                Activo
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  value="inactivo"
                                  className="form-check-input"
                                  {...register('status', {
                                    required: {
                                      value: true,
                                      message: 'Estado es requerido'
                                    }
                                  })}
                                />
                                Inactivo
                              </label>
                            </div>
                            {errors.status && <span><small>{errors.status.message}</small></span>}
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="doctor-submit text-end">

                            {/* 
                          <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_patient">
                  <i className="fa fa-trash-alt m-r-5"></i> Eliminar </Link> */}

                            {/* {dataDoctor
                              ? <button
                                type="submit"
                                className="btn btn-primary submit-form me-2"
                                data-bs-target="#delete_patient"
                                data-bs-toggle="modal"
                              >
                                Enviar
                              </button>
                              :  */}
                            <button
                              type="submit"
                              className="btn btn-primary submit-form me-2"
                            >
                              Enviar
                            </button>
                            {/* } */}
                            <button
                              type="submit"
                              className="btn btn-primary cancel-form"
                            >
                              Cancelar
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="notification-box">
            <div className="msg-sidebar notifications msg-noti">
              <div className="topnav-dropdown-header">
                <span>Messages</span>
              </div>
              <div className="drop-scroll msg-list-scroll" id="msg_list">
                <ul className="list-box">
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">R</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Richard Miles </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item new-message">
                        <div className="list-left">
                          <span className="avatar">J</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">John Doe</span>
                          <span className="message-time">1 Aug</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">T</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Tarah Shropshire{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">M</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Mike Litorus</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">C</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Catherine Manseau{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">D</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Domenic Houston{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">B</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Buster Wigton{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">R</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            {" "}
                            Rolland Webber{" "}
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">C</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author"> Claire Mapes </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">M</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Melita Faucher</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">J</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Jeffery Lalor</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">L</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">Loren Gatlin</span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <div className="list-item">
                        <div className="list-left">
                          <span className="avatar">T</span>
                        </div>
                        <div className="list-body">
                          <span className="message-author">
                            Tarah Shropshire
                          </span>
                          <span className="message-time">12:28 AM</span>
                          <div className="clearfix" />
                          <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <Link to="#">See all messages</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              {success === 'success'
                ?
                <Alert
                  severity="success"
                  onClose={() => { setSuccess('initial') }}
                  sx={{
                    zIndex: 'tooltip',
                    position: 'absolute',
                    bottom: -10,
                    left: '10%',
                    width: '80%'
                  }}
                  spacing={2}
                >
                  El paciente se ha ingresado exitosamente.
                </Alert>

                : success === 'fail'
                  ?
                  <Alert
                    severity="error"
                    onClose={() => { setSuccess('initial') }}
                    sx={{
                      zIndex: 'tooltip',
                      position: 'absolute',
                      bottom: -10,
                      left: '10%',
                      width: '80%'
                    }}
                    spacing={2}
                  >
                    Ha ocurrido un problema. {error}
                  </Alert>
                  : ''
              }
            </div>
          </div>
        </div>
        {/* <div className="card-box">
         { statusPetition.warning && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            Un <Link to="#" className="alert-link">problema</Link> ha ocurrido mientras se enviaba la información.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true"> </span>
            </button>
          </div>}
          {statusPetition.success && <div className="alert alert-success alert-dismissible fade show" role="alert">
            El <Link to="#" className="alert-link">usuario</Link> ha sido creado.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
              <span aria-hidden="true"> </span>
            </button>
          </div>}
        </div> */}
        {/* {dataDoctor && <div id="delete_patient" className="modal fade delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={imagesend} alt="#" width={50} height={46} />
                <h3>Are you sure want to delete this ?</h3>
                <div className="m-t-20">
                  {" "}
                  <Link to="#" className="btn btn-white me-2 w-25 " data-bs-dismiss="modal">
                    Cerrar
                  </Link>
                  <button
                    type="submit"
                    className="text-white btn btn-primary me-2 submit-form w-25 "
                    onClick={onConfirm}
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>} */}
      </>
    </div>
  );
};

export default AddDoctor;
