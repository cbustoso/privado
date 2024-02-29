/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Headerudp from "../Headerudp";
import Sidebar from "../Sidebar";
import { DatePicker } from "antd";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Select from "react-select";
import { Link } from 'react-router-dom';

import Modal from "../Modal";
import { useForm, Controller } from 'react-hook-form';
import { TextField, Alert } from "@mui/material";

import { addUsers } from "../../services/UsersServices";

const AddPatients = () => {
  const { register, handleSubmit, watch, control,
    formState: { errors }
  } = useForm()

  const [selectedOption, setSelectedOption] = useState(null);
  const [option, setOption] = useState([
    { value: 1, label: "Select City" },
    { value: 2, label: "Alaska" },
    { value: 3, label: "California" },
  ]);
  const [options, setOptions] = useState([
    { value: 1, label: "Select Country" },
    { value: 2, label: "Usa" },
    { value: 3, label: "Uk" },
    { value: 4, label: "Italy" },
  ]);
  const [gender, setGender] = useState([
    { value: 1, label: "Femenino" },
    { value: 2, label: "Masculino" },
    { value: 3, label: "No binario" },
    { value: 4, label: "Otro" },
    { value: 5, label: "Prefiero no decir" }
  ]);
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const [department, setDepartment] = useState([
    { value: 2, label: "Médico general" },
    { value: 3, label: "Psiquiatría" },
    { value: 4, label: "Psicología" },
  ]);
  const [career, setCareer] = useState([
    { value: 2, label: "Antropologia" },
    { value: 3, label: "Arquitectura" },
    { value: 4, label: "Contador" },
    { value: 5, label: "Derecho" },
    { value: 6, label: "Ingenieria" },
  ]);
  const loadFile = (event) => {
    // Handle file loading logic here
  };

  const onSubmit = handleSubmit(async data => {
    setSuccess('initial')

    console.log('enviadoo', data)
    try {
      const resp = await addUsers(data)
      console.log('RESP', resp);
      setSuccess('success')
    } catch (error) {
      setSuccess('fail')
      console.log('ERR', error);
    }
  })

  const [isClicked, setIsClicked] = useState(false);
  const [startTime, setStartTime] = useState();
  const [doctor, setDoctor] = useState([]);

  const [success, setSuccess] = useState('initial')
  const [error, setError] = useState('')

  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    e.preventDefault()
    setOpen(true)
  };
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Headerudp />
      <Sidebar
        id="menu-item2"
        id1="menu-items2"
        activeClassName="add-patient"
      />

      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="#">Agenda </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">Agregar Paciente</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <form>
                      {/* Detalles del paciente */}
                      <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '10px', margin: '10px' }}>
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>Detalles del Paciente</h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Nombres <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
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
                              Apellidos <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('lastName', {
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
                              errors.lastName && <span><small>{errors.lastName.message}</small></span>
                            }
                          </div>
                        </div>
                        {/* <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Contraseña <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              placeholder=""
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
                              Confirmar Contraseña{" "}
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
                            {errors.confirmPassword && <span><small>{errors.confirmPassword.message}</small></span>}
                          </div>
                        </div> */}
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Rut <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('rut', {
                                required: {
                                  value: true,
                                  message: 'Rut es requerido'
                                },
                                minLength: {
                                  value: 2,
                                  message: 'Rut debe ser un número válido'
                                }
                              })}
                            />
                            {
                              errors.rut && <span><small>{errors.rut.message}</small></span>
                            }
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms cal-icon">
                            <label>
                              Fecha de nacimiento {" "}
                              <span className="login-danger">*</span>
                            </label>
                            <Controller
                              control={control}
                              name="birthday"
                              {...register('birthday', {
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
                                  format={'YYYY-MM-DD'}
                                  style={{
                                    control: (baseStyles, state) => ({
                                      ...baseStyles,
                                      borderColor: isClicked ? '#2E37A4' : '2px solid rgba(46, 55, 164, 0.1)',
                                      '&:hover': {
                                        borderColor: state.isFocused ? 'none' : 'none',
                                      },
                                    })
                                  }}
                                />
                              )}
                            />
                            {errors.birthday && <span><small>{errors.birthday.message}</small></span>}


                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Edad <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="number"
                              {...register('age', {
                                required: {
                                  value: true,
                                  message: 'Edad es requerida'
                                }
                              })}
                            />
                            {
                              errors.age && <span><small>{errors.age.message}</small></span>
                            }
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group select-gender">
                            <label className="gen-label">
                              Género <span className="login-danger">*</span>
                            </label>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="gender"
                                  value="male"
                                  className="form-check-input"
                                  {...register('gender')}
                                />
                                Masculino
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="gender"
                                  value="female"
                                  className="form-check-input"
                                  {...register('gender')}
                                />
                                Femenino
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="gender"
                                  value="other"
                                  className="form-check-input"
                                  {...register('gender')}
                                />
                                Otro
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
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
                                  value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                                  message: 'Correo no es válido'
                                }
                              })}
                            />
                            {errors.email && <span><small>{errors.email.message}</small></span>}

                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Teléfono <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('mobile')}
                            />
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>Carrera</label>
                            <Controller
                              control={control}
                              name="career"
                              {...register('career', {
                                required: {
                                  value: true,
                                  message: 'Especialista es requerido',
                                }
                              })}
                              ref={null}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <Select
                                  defaultValue={selectedOption}
                                  onChange={onChange}
                                  options={career}
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
                              )}
                            />
                            {errors.career && <span><small>{errors.career.message}</small></span>}

                            {/* <select className="form-control select">
                        <option>Select Doctor</option>
                        <option>Dr.Bernardo James</option>
                        <option>Dr.Andrea Lalema</option>
                        <option>Dr.William Stephin</option>
                      </select> */}
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="form-group local-forms">
                            <label>
                              Año de ingreso <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="number"
                              {...register('yearofentry')}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3">
                          <div className="form-group select-gender">
                            <label className="gen-label">
                              Horario <span className="login-danger">*</span>
                            </label>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="jornada"
                                  value="diurno"
                                  className="form-check-input"
                                  {...register('jornada')}
                                />
                                Diurno
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="jornada"
                                  value="nocturno"
                                  className="form-check-input"
                                  {...register('jornada')}
                                />
                                Nocturno
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-sm-12">
                          <div className="form-group local-forms">
                            <label>
                              Dirección <span className="login-danger">*</span>
                            </label>
                            {/* <textarea
                              className="form-control"
                              rows={3}
                              cols={30}
                            /> */}

                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('address')} />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group local-forms">
                            <label>
                              Región <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('region')} />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group local-forms">
                            <label>
                              Comuna <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('city')} />
                          </div>
                        </div>
                      </div>

                      {/* Datos de contacto de urgencia */}
                      <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '10px', margin: '10px' }}>
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>Datos de contacto en caso de urgencias</h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-12">
                          <h5>Primera Opción (debe ser familiar)</h5>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group local-forms">
                            <label>
                              Nombres y apellidos <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              // {...register('address')} 
                              />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group local-forms">
                            <label>
                              Parentesco <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              // {...register('address')} 
                              />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group local-forms">
                            <label>
                              Fono domicilio <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control" type="tel"
                              defaultValue={""}
                              // {...register('address')} 
                              />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group local-forms">
                            <label>
                              Celular <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control" type="tel"
                              defaultValue={""}
                              placeholder="+56"
                              // {...register('address')} 
                              />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group local-forms">
                            <label>
                              Correo electrónico <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              // {...register('address')} 
                              />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-12">
                          <h5>Segunda Opción</h5>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group local-forms">
                            <label>
                              Nombres y apellidos <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              // {...register('address')} 
                              />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group local-forms">
                            <label>
                              Parentesco <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              // {...register('address')} 
                              />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group local-forms">
                            <label>
                              Fono domicilio <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control" type="tel"
                              defaultValue={""}
                              // {...register('address')} 
                              />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group local-forms">
                            <label>
                              Celular <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control" type="tel"
                              defaultValue={""}
                              placeholder="+56"
                              // {...register('address')} 
                              />
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group local-forms">
                            <label>
                              Correo electrónico <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              // {...register('address')} 
                              />
                          </div>
                        </div>
                      </div>

                      {/* Antecedentes sociales */}
                      <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '10px', margin: '10px' }}>
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>Antecedentes Sociales</h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-12">
                          <div className="form-group select-gender">
                            <label className="gen-label">
                              Previsión <span className="login-danger">*</span>
                            </label>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  value="male"
                                  className="form-check-input"
                                  // {...register('prevision')}
                                />
                                Isapre
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  value="female"
                                  className="form-check-input"
                                  // {...register('prevision')}
                                />
                                Fonasa
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  value="female"
                                  className="form-check-input"
                                  // {...register('prevision')}
                                />
                                Otro
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>Financiamiento</label>
                            <Controller
                              control={control}
                              name="doctor"
                              // {...register('financiamiento', {
                              //   required: {
                              //     value: true,
                              //     message: 'Especialista es requerido',
                              //   }
                              // })}
                              ref={null}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <Select
                                  defaultValue={selectedOption}
                                  onChange={onChange}
                                  options={doctor}
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
                              )}
                            />
                            {/* {errors.doctor && <span><small>{errors.doctor.message}</small></span>} */}
                          </div>
                        </div>
                        <div className="form-group select-gender">
                          <label className="gen-label">
                            Trabaja <span className="login-danger">*</span>
                          </label>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                name="gender"
                                value="male"
                                className="form-check-input"
                                // {...register('gender')}
                              />
                              Sí
                            </label>
                          </div>
                        </div>


                      </div>
                      <div className="col-12">
                        <div className="doctor-submit text-end">
                          <button
                            // type="submit"
                            className="btn btn-primary submit-form me-2"
                            onClick={handleOpen}
                          >
                            Enviar
                          </button>
                          <button
                            // type="submit"
                            className="btn btn-primary cancel-form"
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal open={open} handleClose={handleClose} onClick={onSubmit} />

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
      </>

    </div>
  );
};

export default AddPatients;


// <>
//       <div className="page-wrapper">
//         <div className="content">
//           {/* Page Header */}
//           <div className="page-header">
//             <div className="row">
//               <div className="col-sm-12">
//                 <ul className="breadcrumb">
//                   <li className="breadcrumb-item">
//                     <Link to="#">Pacientes </Link>
//                   </li>
//                   <li className="breadcrumb-item">
//                     <i className="feather-chevron-right">
//                       <FeatherIcon icon="chevron-right" />
//                     </i>
//                   </li>
//                   <li className="breadcrumb-item active">Agregar Paciente</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           {/* /Page Header */}
//           <div className="row">
//             <div className="col-sm-12">
//               <div className="card">
//                 <div className="card-body">
//                   <form>
//                     <div className="row">
//                       <div className="col-12">
//                         <div className="form-heading">
//                           <h4>Detalles pacientes</h4>
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-6">
//                         <div className="form-group local-forms">
//                           <label>
//                             Nombre <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             placeholder=""
//                             {...register('name', {
//                               required: {
//                                 value: true,
//                                 message: 'Nombre es requerido'
//                               },
//                               minLength: {
//                                 value: 2,
//                                 message: 'Nombre debe tener al menos 2 caracteres'
//                               }
//                             })}
//                           />
//                           {
//                             errors.name && <span><small>{errors.name.message}</small></span>
//                           }
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-6">
//                         <div className="form-group local-forms">
//                           <label>
//                             Apellidos <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             placeholder=""
//                             {...register('lastName')}
//                           />
//                         </div>
//                       </div>
//                       {/* <div className="col-12 col-md-6 col-xl-4">
//                         <div className="form-group local-forms">
//                           <label>
//                             Nombre de usuario <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             placeholder=""
//                             {...register('userName')}
//                           />
//                         </div>
//                       </div> */}
//                       <div className="col-12 col-md-6 col-xl-6">
//                         <div className="form-group local-forms">
//                           <label>
//                             Teléfono <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             placeholder=""
//                             {...register('mobile')}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-6">
//                         <div className="form-group local-forms">
//                           <label>
//                             Correo electrónico <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="email"
//                             placeholder=""
//                             autoComplete="username"
//                             {...register('email', {
//                               required: {
//                                 value: true,
//                                 message: 'Correo es requerido'
//                               },
//                               // pattern: {
//                               //   value: /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/,
//                               //   message: 'Correo no es válido'
//                               // }
//                             })}
//                           />
//                           {errors.email && <span><small>{errors.email.message}</small></span>}
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-6">
//                         <div className="form-group local-forms">
//                           <label>
//                             Contraseña <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="password"
//                             placeholder=""
//                             autoComplete="new-password"
//                             {...register('password', {
//                               required: {
//                                 value: true,
//                                 message: 'Password es requerida'
//                               },
//                               minLength: {
//                                 value: 6,
//                                 message: 'Contraseña debe tener al menos 6 caracteres'
//                               }
//                             })}
//                           />
//                           {errors.password && <span><small>{errors.password.message}</small></span>}
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-6">
//                         <div className="form-group local-forms">
//                           <label>
//                             Confirmar contraseña{" "}
//                             <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="password"
//                             placeholder=""
//                             autoComplete="new-password"
//                             {...register('confirmPassword', {
//                               required: {
//                                 value: true,
//                                 message: 'Confirmación requerida'
//                               },
//                               validate: value => value === watch('password') || 'Las contraseñas no coinciden'
//                             })}
//                           />
//                           {errors.confirmPassword && <span><small>{errors.confirmPassword.message}</small></span>}
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-6">
//                         <div className="form-group local-forms">
//                           <label>
//                             Fecha de nacimiento{" "}
//                             <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control datetimepicker"
//                             type="date"
//                             placeholder=""
//                             {...register('date', {
//                               required: {
//                                 value: true,
//                                 message: 'Fecha de nacimiento es requerida'
//                               }
//                             })}
//                           />
//                           {errors.date && <span><small>{errors.date.message}</small></span>}
//                           {/* <DatePicker
//                             className="form-control datetimepicker"
//                             onChange={onChange}
//                             suffixIcon={null}
//                             {...register('date')}
//                           /> */}
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-6">
//                         <div className="form-group select-gender">
//                           <label className="gen-label">
//                             Género <span className="login-danger">*</span>
//                           </label>
//                           <div className="form-check-inline">
//                             <label className="form-check-label">
//                               <input
//                                 type="radio"
//                                 name="gender"
//                                 className="form-check-input"
//                                 {...register('male')}
//                               />
//                               Masculino
//                             </label>
//                           </div>
//                           <div className="form-check-inline">
//                             <label className="form-check-label">
//                               <input
//                                 type="radio"
//                                 name="gender"
//                                 className="form-check-input"
//                                 {...register('female')}
//                               />
//                               Femenino
//                             </label>
//                           </div>
//                           <div className="form-check-inline">
//                             <label className="form-check-label">
//                               <input
//                                 type="radio"
//                                 name="gender"
//                                 className="form-check-input"
//                                 {...register('other')}
//                               />
//                               Otro
//                             </label>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-4">
//                         <div className="form-group local-forms">
//                           <label>
//                             Educación <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             placeholder=""
//                             {...register('education')}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-4">
//                         <div className="form-group local-forms">
//                           <label>
//                             Designación {" "}
//                             <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             placeholder=""
//                             {...register('designation')}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-4">
//                         <div className="form-group local-forms">
//                           <label>
//                             Departmento <span className="login-danger">*</span>
//                           </label>
//                           <Select
//                             placeholder={'Selecciona...'}
//                             defaultValue={selectedOption}
//                             onChange={setSelectedOption}
//                             options={department}
//                             id="search-commodity"
//                             components={{
//                               IndicatorSeparator: () => null
//                             }}
//                             styles={{
//                               control: (baseStyles, state) => ({
//                                 ...baseStyles,
//                                 borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1);',
//                                 boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
//                                 '&:hover': {
//                                   borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
//                                 },
//                                 borderRadius: '10px',
//                                 fontSize: "14px",
//                                 minHeight: "45px",
//                               }),
//                               dropdownIndicator: (base, state) => ({
//                                 ...base,
//                                 transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
//                                 transition: '250ms',
//                                 width: '35px',
//                                 height: '35px',
//                               }),
//                             }}
//                           />

//                         </div>
//                       </div>
//                       <div className="col-12 col-sm-12">
//                         <div className="form-group local-forms">
//                           <label>
//                             Dirección <span className="login-danger">*</span>
//                           </label>
//                           <textarea
//                             className="form-control"
//                             rows={3}
//                             cols={30}
//                             defaultValue={""}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-4">
//                         <div className="form-group local-forms">
//                           <label>
//                             Ciudad <span className="login-danger">*</span>
//                           </label>
//                           <Select
//                             placeholder={'Selecciona...'}
//                             menuPortalTarget={document.body}
//                             styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
//                             defaultValue={selectedOption}
//                             onChange={setSelectedOption}
//                             options={option}
//                             id="search-commodity"
//                             components={{
//                               IndicatorSeparator: () => null
//                             }}
//                             styles={{
//                               control: (baseStyles, state) => ({
//                                 ...baseStyles,
//                                 borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1);',
//                                 boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
//                                 '&:hover': {
//                                   borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
//                                 },
//                                 borderRadius: '10px',
//                                 fontSize: "14px",
//                                 minHeight: "45px",
//                               }),
//                               dropdownIndicator: (base, state) => ({
//                                 ...base,
//                                 transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
//                                 transition: '250ms',
//                                 width: '35px',
//                                 height: '35px',
//                               }),
//                             }}
//                           />

//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-4">
//                         <div className="form-group local-forms">
//                           <label>
//                             País <span className="login-danger">*</span>
//                           </label>
//                           <Select
//                             placeholder= {'Selecciona...'}
//                             menuPortalTarget={document.body}
//                             styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
//                             defaultValue={selectedOption}
//                             onChange={setSelectedOption}
//                             options={options}
//                             id="search-commodity"
//                             components={{
//                               IndicatorSeparator: () => null
//                             }}
//                             styles={{
//                               control: (baseStyles, state) => ({
//                                 ...baseStyles,
//                                 borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1);',
//                                 boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
//                                 '&:hover': {
//                                   borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
//                                 },
//                                 borderRadius: '10px',
//                                 fontSize: "14px",
//                                 minHeight: "45px",
//                               }),
//                               dropdownIndicator: (base, state) => ({
//                                 ...base,
//                                 transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
//                                 transition: '250ms',
//                                 width: '35px',
//                                 height: '35px',
//                               }),
//                             }}
//                           />

//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-4">
//                         <div className="form-group local-forms">
//                           <label>
//                             Región {" "}
//                             <span className="login-danger">*</span>
//                           </label>
//                           <Select
//                             placeholder= {'Selecciona...'}
//                             defaultValue={selectedOption}
//                             onChange={setSelectedOption}
//                             options={option}
//                             menuPortalTarget={document.body}
//                             styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
//                             id="search-commodity"
//                             components={{
//                               IndicatorSeparator: () => null
//                             }}
//                             styles={{
//                               control: (baseStyles, state) => ({
//                                 ...baseStyles,
//                                 borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1);',
//                                 boxShadow: state.isFocused ? '0 0 0 1px #2e37a4' : 'none',
//                                 '&:hover': {
//                                   borderColor: state.isFocused ? 'none' : '2px solid rgba(46, 55, 164, 0.1)',
//                                 },
//                                 borderRadius: '10px',
//                                 fontSize: "14px",
//                                 minHeight: "45px",
//                               }),
//                               dropdownIndicator: (base, state) => ({
//                                 ...base,
//                                 transform: state.selectProps.menuIsOpen ? 'rotate(-180deg)' : 'rotate(0)',
//                                 transition: '250ms',
//                                 width: '35px',
//                                 height: '35px',
//                               }),
//                             }}
//                           />

//                         </div>
//                       </div>
//                       {/* <div className="col-12 col-md-6 col-xl-3">
//                         <div className="form-group local-forms">
//                           <label>
//                             Postal Code{" "}
//                             <span className="login-danger">*</span>
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             placeholder=""
//                           />
//                         </div>
//                       </div> */}
//                       <div className="col-12 col-sm-12">
//                         <div className="form-group local-forms">
//                           <label>
//                             Biografía{" "}
//                             <span className="login-danger">*</span>
//                           </label>
//                           <textarea
//                             className="form-control"
//                             rows={3}
//                             cols={30}
//                             defaultValue={""}
//                             {...register('biography')}
//                           />
//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-6">
//                         <div className="form-group local-top-form">
//                           <label className="local-top">
//                             Avatar <span className="login-danger">*</span>
//                           </label>
//                           <div className="settings-btn upload-files-avator">
//                             <input
//                               type="file"
//                               accept="image/*"
//                               name="image"
//                               id="file"
//                               onChange={loadFile}
//                               className="hide-input"
//                               {...register('img')}
//                             />
//                             <label htmlFor="file" className="upload">
//                               Seleccionar imagen
//                             </label>
//                           </div>

//                         </div>
//                       </div>
//                       <div className="col-12 col-md-6 col-xl-6">
//                         <div className="form-group select-gender">
//                           <label className="gen-label">
//                             Estado <span className="login-danger">*</span>
//                           </label>
//                           <div className="form-check-inline">
//                             <label className="form-check-label">
//                               <input
//                                 type="radio"
//                                 name="gender"
//                                 className="form-check-input"
//                                 {...register('active')}
//                               />
//                               Activo
//                             </label>
//                           </div>
//                           <div className="form-check-inline">
//                             <label className="form-check-label">
//                               <input
//                                 type="radio"
//                                 name="gender"
//                                 className="form-check-input"
//                                 {...register('inactive')}
//                               />
//                               Inactivo
//                             </label>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-12">
//                         <div className="doctor-submit text-end">
//                           <button
//                             // type="submit"
//                             className="btn btn-primary submit-form me-2"
//                             onClick={onSubmit}
//                           >
//                             Enviar
//                           </button>
//                           <button
//                             // type="submit"
//                             className="btn btn-primary cancel-form"
//                           >
//                             Cancelar
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="notification-box">
//           <div className="msg-sidebar notifications msg-noti">
//             <div className="topnav-dropdown-header">
//               <span>Messages</span>
//             </div>
//             <div className="drop-scroll msg-list-scroll" id="msg_list">
//               <ul className="list-box">
//                 <li>
//                   <Link to="#">
//                     <div className="list-item">
//                       <div className="list-left">
//                         <span className="avatar">R</span>
//                       </div>
//                       <div className="list-body">
//                         <span className="message-author">Richard Miles </span>
//                         <span className="message-time">12:28 AM</span>
//                         <div className="clearfix" />
//                         <span className="message-content">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#">
//                     <div className="list-item new-message">
//                       <div className="list-left">
//                         <span className="avatar">J</span>
//                       </div>
//                       <div className="list-body">
//                         <span className="message-author">John Doe</span>
//                         <span className="message-time">1 Aug</span>
//                         <div className="clearfix" />
//                         <span className="message-content">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#">
//                     <div className="list-item">
//                       <div className="list-left">
//                         <span className="avatar">T</span>
//                       </div>
//                       <div className="list-body">
//                         <span className="message-author">
//                           {" "}
//                           Tarah Shropshire{" "}
//                         </span>
//                         <span className="message-time">12:28 AM</span>
//                         <div className="clearfix" />
//                         <span className="message-content">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#">
//                     <div className="list-item">
//                       <div className="list-left">
//                         <span className="avatar">M</span>
//                       </div>
//                       <div className="list-body">
//                         <span className="message-author">Mike Litorus</span>
//                         <span className="message-time">12:28 AM</span>
//                         <div className="clearfix" />
//                         <span className="message-content">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#">
//                     <div className="list-item">
//                       <div className="list-left">
//                         <span className="avatar">C</span>
//                       </div>
//                       <div className="list-body">
//                         <span className="message-author">
//                           {" "}
//                           Catherine Manseau{" "}
//                         </span>
//                         <span className="message-time">12:28 AM</span>
//                         <div className="clearfix" />
//                         <span className="message-content">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#">
//                     <div className="list-item">
//                       <div className="list-left">
//                         <span className="avatar">D</span>
//                       </div>
//                       <div className="list-body">
//                         <span className="message-author">
//                           {" "}
//                           Domenic Houston{" "}
//                         </span>
//                         <span className="message-time">12:28 AM</span>
//                         <div className="clearfix" />
//                         <span className="message-content">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#">
//                     <div className="list-item">
//                       <div className="list-left">
//                         <span className="avatar">B</span>
//                       </div>
//                       <div className="list-body">
//                         <span className="message-author">
//                           {" "}
//                           Buster Wigton{" "}
//                         </span>
//                         <span className="message-time">12:28 AM</span>
//                         <div className="clearfix" />
//                         <span className="message-content">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#">
//                     <div className="list-item">
//                       <div className="list-left">
//                         <span className="avatar">R</span>
//                       </div>
//                       <div className="list-body">
//                         <span className="message-author">
//                           {" "}
//                           Rolland Webber{" "}
//                         </span>
//                         <span className="message-time">12:28 AM</span>
//                         <div className="clearfix" />
//                         <span className="message-content">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#">
//                     <div className="list-item">
//                       <div className="list-left">
//                         <span className="avatar">C</span>
//                       </div>
//                       <div className="list-body">
//                         <span className="message-author"> Claire Mapes </span>
//                         <span className="message-time">12:28 AM</span>
//                         <div className="clearfix" />
//                         <span className="message-content">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#">
//                     <div className="list-item">
//                       <div className="list-left">
//                         <span className="avatar">M</span>
//                       </div>
//                       <div className="list-body">
//                         <span className="message-author">Melita Faucher</span>
//                         <span className="message-time">12:28 AM</span>
//                         <div className="clearfix" />
//                         <span className="message-content">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#">
//                     <div className="list-item">
//                       <div className="list-left">
//                         <span className="avatar">J</span>
//                       </div>
//                       <div className="list-body">
//                         <span className="message-author">Jeffery Lalor</span>
//                         <span className="message-time">12:28 AM</span>
//                         <div className="clearfix" />
//                         <span className="message-content">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#">
//                     <div className="list-item">
//                       <div className="list-left">
//                         <span className="avatar">L</span>
//                       </div>
//                       <div className="list-body">
//                         <span className="message-author">Loren Gatlin</span>
//                         <span className="message-time">12:28 AM</span>
//                         <div className="clearfix" />
//                         <span className="message-content">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#">
//                     <div className="list-item">
//                       <div className="list-left">
//                         <span className="avatar">T</span>
//                       </div>
//                       <div className="list-body">
//                         <span className="message-author">
//                           Tarah Shropshire
//                         </span>
//                         <span className="message-time">12:28 AM</span>
//                         <div className="clearfix" />
//                         <span className="message-content">
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                         </span>
//                       </div>
//                     </div>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="topnav-dropdown-footer">
//               <Link to="#">See all messages</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>

