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

import { Alert, TextField } from "@mui/material";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { PlusCircle, ChevronLeft, ChevronRight } from "feather-icons-react/build/IconComponents";

import { fetchDoctors } from "../../../services/DoctorsServices";
import { fetchUsers } from "../../../services/UsersServices";
import { createAppointment, sendEmail } from "../../../services/AppointmentsServices"
import { regiones, comunas, motivo_consulta } from "../../../utils/selects";
import { formatRut } from "@/utils/managedata";
import { fetchScheduleByDate, fetchScheduleByUser, fetchScheduleByAvailability } from "@/services/SchedulesServices";
import DatePick from "@/components/Datepicker";

import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear' // import plugin
import 'dayjs/locale/es-mx'

const AddFirstAppoinments = () => {

  dayjs.extend(isLeapYear) // use plugin
  dayjs.locale('es-mx') // use locale

  const { data: session, loading } = useSession()

  const [isClicked, setIsClicked] = useState(false);
  const [startTime, setStartTime] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const [doctor, setDoctor] = useState([]);
  const [contacts, setContacts] = useState([])
  const [success, setSuccess] = useState('initial')
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false);
  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([])
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')


  const { register, handleSubmit, watch, control,
    formState: { errors }
  } = useForm({
    defaultValues: async () => fetchUsers().then(response => {
      console.log('response', response);
      if (session?.user) {
        // console.log('session?.user', session?.user)
        const patient = response.users.filter(user => user.email === session?.user.email)
        console.log('SESSION async', session);
        const obj = {
          name: patient[0].nombre,
          lastName: patient[0].apellido,
          email: session.user.email,
          birthday: dayjs(patient[0].fecha_nacimiento).format('YYYY-MM-DD'),
          genero: patient[0].genero,
          mobile: patient[0].telefono

        }
        console.log('obj', patient);
        return obj
      } else {
        console.log('No encuentra al usuario')
      }
    })
      .catch(error =>
        console.log('err', error)
      )
  })

  const obtenerDias = (objeto) => {
    const { fechaInicio, fechaFin, ...resto } = objeto.users[0];
    const dias = [];
    let fechaActual = new Date(fechaInicio);

    while (fechaActual <= new Date(fechaFin)) {
      // Agregar día solo si no es sábado (6) ni domingo (0)
      if (fechaActual.getDay() !== 5 && fechaActual.getDay() !== 6) {
        dias.push({ fecha: fechaActual.toISOString().split('T')[0], ...resto });
      }
      fechaActual.setDate(fechaActual.getDate() + 1);
    }

    return dias;
  }

  /* Retorna días disponibles */
  const handleSelectedProfessional = async (e) => {
    console.log(e.id);
    setDays([])
    try {
      const byProf = await fetchScheduleByAvailability(e.id)
      // console.log('byProf', byProf.users[0].fechaInicio, byProf.users[0].fechaFin)
      const bloque = obtenerDias(byProf)
      console.log('bloque', bloque);
      setDays(bloque.slice(0, 5))
    } catch (error) {
      console.log('don error', error)
    }
  }

  // Función para agrupar bloques en bloques de una hora como máximo
  const agruparBloquesPorHora = (bloquesOriginal) => {
    return bloquesOriginal.reduce((agrupados, bloqueActual) => {
      const ultimoBloqueAgrupado = agrupados[agrupados.length - 1];

      if (ultimoBloqueAgrupado && bloqueActual.hora_inicio <= ultimoBloqueAgrupado.hora_fin) {
          // Si el bloque actual comienza dentro del último bloque agrupado, actualizar el último bloque agrupado
          ultimoBloqueAgrupado.hora_fin = bloqueActual.hora_fin;
          ultimoBloqueAgrupado.disponible += bloqueActual.disponible;
      } else {
          // Si el bloque actual no comienza dentro del último bloque agrupado, agregar un nuevo bloque agrupado
          agrupados.push({
              disponible: bloqueActual.disponible,
              hora_inicio: bloqueActual.hora_inicio,
              hora_fin: bloqueActual.hora_fin,
              id_bloque: bloqueActual.id_bloque,
              usuario_id: bloqueActual.usuario_id
          });
      }

      return agrupados;
  }, []);
  }

  const handleDays = async (e, fecha, id) => {
    e.preventDefault()
    console.log('handle.days', fecha, id)
    const fechaMod = dayjs(fecha).format('YYYY-MM-DD')
    console.log('fechamod', fechaMod);
    try {
      const { bloques } = await fetchScheduleByDate(parseInt(id), fechaMod)
      setDate(fechaMod)
      const newBloques = agruparBloquesPorHora(bloques)
      console.log('newBloques', newBloques);
      setHours(newBloques.slice(0, 5))
    } catch (error) {
      console.log(error)
    }
  }

  const handleHours = (e) => {
    e.preventDefault()
    setHours(dayjs(e.id_bloque).format('DD/MM/YYYY'))
  }

  const selectedRegion = watch('region')

  const handleOpen = (e) => {
    e.preventDefault()
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    const { users } = await fetchDoctors()
    const docs = users.map((doc, i) => {
      return {
        value: i + 2,
        label: doc.nombre + ' ' + doc.apellido,
        id: doc.id,
        email: doc.email,
        name: doc.nombre
      }
    })

    console.log('docs', docs);
    setDoctor(docs)
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
    console.log('data', data);
    setSuccess('initial')
    const patientName = watch("name")
    const patientLastname = watch("lastName")
    const patients = await fetchUsers()

    console.log('session.user.email', session.user.email);
    const patient = patients.users.filter(user =>
      user.email === session.user.email
    )
    const body = {
      ...data,
      "patient_id": patient[0].id,
      "fecha": date,
      "hora": time
    }

    try {
      const appointment = await createAppointment(body)
      if (appointment.detalle === 'fail!!!') setSuccess('fail')
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

  const gender = [
    { value: 1, label: "Hombre" },
    { value: 2, label: "Mujer" },
    { value: 3, label: "Hombre trans" },
    { value: 4, label: "Mujer trans" },
    { value: 5, label: "No binarie" }
  ]

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

  const professional = register("professional", { required: true });

  return (
    <div>
      {/* <Header /> */}
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
                            <h4 style={{ margin: 0 }}>Detalles del Paciente</h4>
                            <h5 style={{ fontSize: '12px', margin: '5px 0 25px' }}>Los campos son editables, pero solo afectarán la información en este portal, no para SAP</h5>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Nombre legal <span className="login-danger">*</span>
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
                              Nombre social <span className="login-danger">*</span>
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
                              rules={{
                                required: {
                                  value: true,
                                  message: 'Fecha es requerida',
                                }
                              }}
                              ref={null}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <DatePicker
                                  className="form-control datetimepicker"
                                  onChange={onChange}
                                  // value={value}
                                  onBlur={onBlur}
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
                                  message: 'Carrera es requerido',
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
                            <Controller
                              control={control}
                              name="comuna"
                              {...register('comuna', {
                                required: {
                                  value: true,
                                  message: 'Comuna es requerida',
                                }
                              })}
                              ref={null}
                              render={({ field: { onChange, onBlur, value } }) => (
                                <Select
                                  instanceId="select-region"
                                  defaultValue={selectedOption}
                                  onChange={onChange}
                                  options={comunas[selectedRegion?.name]}
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
                      </div>

                      {/* Datos de contacto de urgencia */}
                      <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '10px', margin: '10px' }}>
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>Datos de contacto en caso de urgencias</h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-xl-12">
                          <h5>Primera Opción <span className="login-danger">*</span> </h5>
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
                              Parentesco o tipo de relación <span className="login-danger">*</span>
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
                              Correo electrónico
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
                                  message: 'Motivo es requerido',
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
                                      zIndex: '90000000'
                                    }),
                                  }}
                                />
                              )}
                            />
                            {errors.motivo && <span><small>{errors.motivo.message}</small></span>}
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>Profesional</label>
                            <Controller
                              control={control}
                              name="professional"
                              {...register('professional')}
                              ref={null}
                              render={({ field: { onChange, onBlur, value, name, ref } }) => {
                                return (<Select
                                  instanceId="professional"
                                  defaultValue={selectedOption}
                                  onChange={(e) => {
                                    onChange(e);
                                    handleSelectedProfessional(e);
                                  }}
                                  getOptionLabel={e => e.label}
                                  options={doctor}
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
                                />)
                              }}
                            />
                            {errors.professional && <span><small>{errors.professional.message}</small></span>}

                          </div>
                        </div>


                        <div className="row">
                          <div className="col-12 col-md-12 col-xl-12">
                            <label>
                              Día de la Cita{" "}
                              <span className="login-danger">*</span>
                            </label>
                            <div className="form-group local-forms">
                              {days.length > 0 && (
                                <>
                                  <button className="btn btn-primary" disabled><ChevronLeft /></button>

                                  {days.map((day, i) => (
                                    <button
                                      className="btn me-2 btn-cancel"
                                      key={`${day.id}${i}days`}
                                      onClick={(e) => handleDays(e, day.fecha, day.id_user)}>
                                      {dayjs(day.fecha).format('ddd DD/MM')}
                                    </button>
                                  )
                                  )}
                                  <button className="btn btn-primary" disabled><ChevronRight /></button>
                                </>)
                              }
                            </div>
                          </div>
                          {/* <DatePick /> */}
                          <div className="col-12 col-md-12 col-xl-12">
                            <label>
                              Hora <span className="login-danger">*</span>
                            </label>
                            <div className="form-group local-forms">
                              {hours.length > 0 && (
                                <>
                                  <button className="btn btn-primary" disabled><ChevronLeft /></button>
                                  {hours.map((hour, i) => {
                                    console.log('hour', hour)
                                    return (
                                    <button
                                      type="button"
                                      className="btn me-2 btn-cancel"
                                      key={`${hour.id}${i}hours`}
                                      onClick={() => { setTime(hour.hora_inicio) }}>
                                      {hour.hora_inicio}
                                    </button>
                                  )}
                                  )}
                                  <button className="btn btn-primary" disabled><ChevronRight /></button>
                                </>)
                              }
                            </div>
                          </div>
                        </div>



                        <div className="col-12">
                          <div className="doctor-submit text-end">
                            <button
                              type="button"
                              className="btn btn-primary submit-form me-2"
                              onClick={(e) => { onSubmit(e) }}
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
