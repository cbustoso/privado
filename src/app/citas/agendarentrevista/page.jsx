'use client'
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { DatePicker, TimePicker } from "antd";
import Select from "react-select";
import Link from "next/link";
import { useForm, Controller } from 'react-hook-form';
import { useSession } from "next-auth/react";

import Sidebar from "../../../components/Sidebar";
import Modal from "../../../components/Modal";
import Contact from "../../../components/Contact"

import { Alert } from "@mui/material";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import PlusCircle from "feather-icons-react/build/IconComponents/PlusCircle";

import { fetchDoctors } from "../../../services/DoctorsServices";
import { fetchUsers } from "../../../services/UsersServices";
import { createAppointment } from "../../../services/AppointmentsServices"
import { regiones, comunas, motivo_consulta, existencia_servicio, quien_derivo, diagnosticos_previos } from "../../../utils/selects";
import { formatRut } from "@/utils/managedata";

import dayjs from 'dayjs';

const AddFirstAppoinments = () => {
  const { data: session } = useSession()
  // console.log(session.user);


  const { register, handleSubmit, watch, control,
    formState: { errors }
  } = useForm({
    defaultValues: async () => fetchUsers().then(response => {
      const patient = response.users.filter(user => user.email === session.user.email)
      const obj = {
        name: patient[0].nombre,
        lastName: patient[0].apellido,
        email: session.user.email,
        birthday: dayjs(patient[0].fecha_nacimiento).format('DD-MM-YYYY'),
        genero: patient[0].genero,
        mobile: patient[0].telefono

      }
      console.log('obj', patient);
      return obj
    })
  })

  const [isClicked, setIsClicked] = useState(false);
  const [startTime, setStartTime] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const [doctor, setDoctor] = useState([]);
  const [contacts, setContacts] = useState([])

  const [success, setSuccess] = useState('initial')
  const [error, setError] = useState('')
  const [allRegions, setAllRegions] = useState(regiones)
  const [selectedCities, setSelectedCities] = useState([])
  const [rut, setRut] = useState('')

  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    e.preventDefault()
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    const { users } = await fetchDoctors()
    // console.log(users);
    const docs  = users.map((doc, i) => {
      return {
        value: i + 2,
        label: doc.nombre + ' ' + doc.apellido,
        id: doc.id,
        email: doc.email
      }
    })
    setDoctor(docs)
    // console.log('users', docs);
  }

  useEffect(() => {
    fetchData()
    fetchDoctors()

  }, [])

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setIsClicked(true);
  };
  const loadFile = (event) => {
    // Handle file loading logic here
  };

  const onSubmit = handleSubmit(async data => {
    setSuccess('initial')
    const patientName = watch("name")
    const patientLastname = watch("lastName")
    const patients = await fetchUsers()

    console.log('data', data);

    const patient = patients.users.filter(user =>
      user.nombre === patientName
      & user.apellido === patientLastname
      & user.tipo_usuario === 'alumno'
      & user.email === session.user.email
    )

    try {
      const appointment = await createAppointment({ 
        ...data, 
        "patient_id": patient[0].id, 
        "fecha": dayjs(patient[0].fecha_nacimiento).format('YYYY-MM-DD') 
      })
      // return bleh
      if(appointment.detalle === 'fail!!!') setSuccess('fail')
      setSuccess('success')

    } catch (err) {
      setSuccess('fail')
      console.log('ERRRR', err.message)
      if (err.message === "Cannot read properties of undefined (reading 'id')") {
        setError(`No se encontró al paciente`);
      }
    } finally {
      setOpen(false)
    }
  })
  const [gender, setGender] = useState([
    { value: 1, label: "Femenino" },
    { value: 2, label: "Masculino" },
    { value: 3, label: "No binario" },
    { value: 4, label: "Otro" },
    { value: 5, label: "Prefiero no decir" }
  ]);

  const career = [
    { value: 2, label: "Antropologia" },
    { value: 3, label: "Arquitectura" },
    { value: 4, label: "Contador" },
    { value: 5, label: "Derecho" },
    { value: 6, label: "Ingenieria" },
  ];

  const handleAddContact = () => {
    const newContact = [
      ...contacts,
      <Contact
        key={contacts.length}
        index={contacts.length}
        deleteContact={() => handleDeleteContact(contacts.length)}
      />
    ];
    setContacts(newContact);
  }

  const handleDeleteContact = (key) => {
    const newArray = contacts.filter((_, i) => i !== key);
    setContacts(newArray)
  }

  const handleFormat = () => {
    const formattedRut = formatRut(e.target.value)
    // setRut(formattedRut)
    console.log(formattedRut)
  }

  return (
    <div>
      {/* <Header /> */}
      {/* <Headerudp /> */}
      <Sidebar
        id="menu-item4"
        id1="menu-items4"
        activeClassName="add-first-appoinment"
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
                      <Link href="#">Agenda </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">Agendar Entrevista</li>
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
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Rut <span className="login-danger">*</span>
                            </label>
                            <input
                              onChange={handleFormat}
                              className="form-control"
                              // value={rut}
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
                                  format={'DD-MM-YYYY'}
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
                                },
                                minLength: {
                                  value: 2,
                                  message: 'Edad debe ser un número válido'
                                }
                              })}
                            />
                            {
                              errors.age && <span><small>{errors.age.message}</small></span>
                            }
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>Género<span className="login-danger">*</span>
                            </label>
                            <Controller
                              control={control}
                              name="genero"
                              {...register('genero', {
                                required: {
                                  value: true,
                                  message: 'Género es requerido',
                                }
                              })}
                              ref={null}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <Select
                                  instanceId="genero"
                                  defaultValue={selectedOption}
                                  onChange={onChange}
                                  options={gender}
                                  // menuPortalTarget={document.body}
                                  styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                  id="genero"
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
                            <label>Carrera<span className="login-danger">*</span>

                            </label>
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
                                  instanceId="career"
                                  defaultValue={selectedOption}
                                  onChange={onChange}
                                  options={career}
                                  // menuPortalTarget={document.body}
                                  styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                  id="career"
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
                              {...register('yearOfAdmission')}
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
                                  name="daytime"
                                  value="diurno"
                                  className="form-check-input"
                                  {...register('daytime')}
                                />
                                Diurno
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="daytime"
                                  value="nocturno"
                                  className="form-check-input"
                                  {...register('daytime')}
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
                            <Controller
                              control={control}
                              name="region"
                              {...register('region', {
                                required: {
                                  value: true,
                                  message: 'Región es requerida',
                                }
                              })}
                              ref={null}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <Select
                                  instanceId="select-region"
                                  defaultValue={selectedOption}
                                  onChange={onChange}
                                  options={regiones}
                                  // menuPortalTarget={document.body}
                                  styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                  id="select-region"
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
                        <div className="col-12 col-md-12 col-xl-12">
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
                              {...register('name_contact')} />
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
                              {...register('relationship_contact')} />
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
                              {...register('phone_contact')} />
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
                              {...register('mobile_contact')} />
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
                              {...register('email_contact')} />
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-xl-12">
                          <h5>Agregar contacto <PlusCircle onClick={() => { handleAddContact() }} /></h5>
                          {contacts.map((item) => item)}
                        </div>
                      </div>

                      {/* Detalles de la cita */}
                      <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '10px', margin: '10px' }}>
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>Detalles de la Cita</h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group select-gender">
                              <label className="gen-label">
                                Indique modalidad de la atención <span className="login-danger">*</span>
                              </label>
                              <div className="form-check-inline">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    name="modalidad"
                                    value="videollamada"
                                    className="form-check-input"
                                    {...register('modalidad')}
                                  />
                                  Videollamada
                                </label>
                              </div>
                              <div className="form-check-inline">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    name="modalidad"
                                    value="presencial"
                                    className="form-check-input"
                                    {...register('modalidad')}
                                  />
                                  Presencial
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-md-12 col-xl-12">
                            <div className="form-group select-gender">
                              <label className="gen-label">
                                Indique lugar de preferencia <span className="login-danger">*</span>
                              </label>
                              <div className="form-check-inline">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    name="campus"
                                    value="centro"
                                    className="form-check-input"
                                    {...register('campus')}
                                  />
                                  Sede Centro - Manuel Rodríguez 343 sur, 2° piso
                                </label>
                              </div>
                              <div className="form-check-inline">
                                <label className="form-check-label">
                                  <input
                                    type="radio"
                                    name="campus"
                                    value="huechuraba"
                                    className="form-check-input"
                                    {...register('campus')}
                                  />
                                  Sede Huechuraba - Av. Sta. Clara 797, Huechuraba
                                </label>
                              </div>

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>Motivo de la consulta</label>
                            <Controller
                              control={control}
                              name="motivo"
                              {...register('motivo', {
                                required: {
                                  value: true,
                                  message: 'Especialista es requerido',
                                }
                              })}
                              ref={null}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <Select
                                  instanceId="motivo"
                                  defaultValue={selectedOption}
                                  onChange={onChange}
                                  options={motivo_consulta}
                                  // menuPortalTarget={document.body}
                                  styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                  id="motivo"
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
                            {errors.motivo && <span><small>{errors.motivo.message}</small></span>}
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-6">
                          <div className="form-group local-forms">
                            <label>¿Cómo se enteró de la existencia del servicio?</label>
                            <Controller
                              control={control}
                              name="como"
                              {...register('como', {
                                required: {
                                  value: true,
                                  message: 'Especialista es requerido',
                                }
                              })}
                              ref={null}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <Select
                                  instanceId="como"
                                  defaultValue={selectedOption}
                                  onChange={onChange}
                                  options={existencia_servicio}
                                  // menuPortalTarget={document.body}
                                  styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                  id="como"
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
                            {errors.como && <span><small>{errors.como.message}</small></span>}
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-6">
                          <div className="form-group local-forms">
                            <label>¿Quién realizó la derivación?</label>
                            <Controller
                              control={control}
                              name="derivado_desde"
                              {...register('derivado_desde', {
                                required: {
                                  value: true,
                                  message: 'Especialista es requerido',
                                }
                              })}
                              ref={null}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <Select
                                  instanceId="who-derived"
                                  defaultValue={selectedOption}
                                  onChange={onChange}
                                  options={quien_derivo}
                                  // menuPortalTarget={document.body}
                                  styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                  id="who-derived"
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
                            {errors.derivado_desde && <span><small>{errors.derivado_desde.message}</small></span>}
                          </div>
                        </div>


                        <div className="form-group select-gender">
                          <label className="gen-label">
                            Tratamientos anteriores en el servicio <span className="login-danger">*</span>
                          </label>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                {...register('tratamiento')}
                              />
                              Sí
                            </label>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>¿Has sido diagnosticado/a por un/a profesional de salud mental en los últimos 2 años?</label>
                            <Controller
                              control={control}
                              name="diagnostico_previo"
                              {...register('diagnostico_previo', {
                                required: {
                                  value: true,
                                  message: 'Especialista es requerido',
                                }
                              })}
                              ref={null}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <Select
                                  instanceId="diagnosis"
                                  defaultValue={selectedOption}
                                  onChange={onChange}
                                  options={diagnosticos_previos}
                                  // menuPortalTarget={document.body}
                                  styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                  id="diagnosis"
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
                            {errors.diagnostico_previo && <span><small>{errors.diagnostico_previo.message}</small></span>}
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>Especialidad </label>
                            <input className="form-control" type="text" {...register('speciality')} />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>Profesional</label>
                            <Controller
                              control={control}
                              name="doctor"
                              {...register('doctor', {
                                required: {
                                  value: true,
                                  message: 'Especialista es requerido',
                                }
                              })}
                              ref={null}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <Select
                                  instanceId="professional"
                                  defaultValue={selectedOption}
                                  onChange={onChange}
                                  options={doctor}
                                  // menuPortalTarget={document.body}
                                  styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                  id="professional"
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
                            {errors.doctor && <span><small>{errors.doctor.message}</small></span>}

                            {/* <select className="form-control select">
                        <option>Select Doctor</option>
                        <option>Dr.Bernardo James</option>
                        <option>Dr.Andrea Lalema</option>
                        <option>Dr.William Stephin</option>
                      </select> */}
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms cal-icon">
                            <label>
                              Día de la Cita{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <Controller
                              control={control}
                              name="appointment_date"
                              {...register('appointment_date', {
                                required: {
                                  value: true,
                                  message: 'Días es requerido',
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
                            {errors.appointment_date && <span><small>{errors.appointment_date.message}</small></span>}

                            {/* <input
                        className="form-control datetimepicker"
                        type="text"
                      /> */}
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Hora <span className="login-danger">*</span>
                            </label>
                            <div className="">
                              <TimePicker
                                className="form-control"
                                // id="outlined-controlled"
                                minuteStep={15} secondStep={10} hourStep={1}
                                // type="time"
                                format='HH:mm'
                                showNow= {false}
                                value={startTime}
                                onChange={(event) => {
                                  setStartTime(event.target.value);
                                }}
                                {...register('start_time', {
                                  required: {
                                    value: true,
                                    message: 'Hora es requerida',
                                  }
                                })}
                              />
                              {errors.start_time && <span><small>{errors.start_time.message}</small></span>}

                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-sm-12">
                          <div className="form-group local-forms">
                            <label>
                              Antecedentes médicos relevantes <span className="login-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              rows={3}
                              cols={30}
                              defaultValue={""}
                              {...register('notas')}
                              style={{ resize: 'none' }}
                            />
                          </div>
                        </div>
                        {/* <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-top-form">
                            <label className="local-top">
                              Avatar <span className="login-danger">*</span>
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
                                Choose File
                              </label>
                            </div>
                          </div>
                        </div> */}
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
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal open={open} handleClose={handleClose} onClick={onSubmit} />
          {/* 
          <div className="notification-box">
            <div className="msg-sidebar notifications msg-noti">
              <div className="topnav-dropdown-header">
                <span>Messages</span>
              </div>
              <div className="drop-scroll msg-list-scroll" id="msg_list">
                <ul className="list-box">
                  <li>
                    <Link href="#">
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
                    <Link href="#">
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
                    <Link href="#">
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
                    <Link href="#">
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
                    <Link href="#">
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
                    <Link href="#">
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
                    <Link href="#">
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
                    <Link href="#">
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
                    <Link href="#">
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
                    <Link href="#">
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
                    <Link href="#">
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
                    <Link href="#">
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
                    <Link href="#">
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
                <Link href="#">See all messages</Link>
              </div>
            </div>
          </div> */}

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
                  La cita se ha creado con éxito.
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

export default AddFirstAppoinments;
