'use client'
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useId } from "react";
import { DatePicker } from "antd";
import Select from "react-select";
import Link from "next/link";
import { useForm, Controller } from 'react-hook-form';

import Sidebar from "../../../components/Sidebar";

import { TextField, Alert } from "@mui/material";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

import { fetchDoctors } from "../../../services/DoctorsServices";
import { fetchUsers } from "../../../services/UsersServices";
import { createAppointment } from "../../../services/AppointmentsServices"
import Contact from "../../../components/Contact"
import { regiones, comunas, motivo_consulta, existencia_servicio, quien_derivo, diagnosticos_previos } from "../../../utils/selects";
import { formatRut } from "@/utils/managedata";

const AddFirstAppoinments = () => {
  const { register, handleSubmit, watch, control,
    formState: { errors }
  } = useForm()

  const [isClicked, setIsClicked] = useState(false);
  const [startTime, setStartTime] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const [doctor, setDoctor] = useState([]);
  const [contacts, setContacts] = useState([])

  const [success, setSuccess] = useState('initial')
  const [error, setError] = useState('')
  // const [allRegions, setAllRegions] = useState(regiones)
  // const [selectedCities, setSelectedCities] = useState([])
  // const [rut, setRut] = useState('')

  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    e.preventDefault()
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    const { users } = await fetchDoctors()
    // console.log(users);
    const { docs } = users.map((doc, i) => {
      return {
        value: i + 2,
        label: doc.nombre + ' ' + doc.apellido,
        id: doc.id
      }
    })
    setDoctor(docs)
  }

  useEffect(() => {
    fetchData()
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

    const patient = patients.filter(user =>
      user.nombre === patientName
      & user.apellido === patientLastname
      & user.tipo_usuario === 'alumno'
    )
    try {
      const appointment = await createAppointment({ ...data, "patient_id": patient[0].id })
      console.log('appointment', appointment)
      // return bleh
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

  const tipo_apoyo = [
    { value: 2, label: "Emocional" },
    { value: 3, label: "Familiar" },
    { value: 4, label: "Amoroso" },
    { value: 5, label: "Profesional" },
    { value: 6, label: "Académico" },
    { value: 7, label: "Económico" },
    { value: 8, label: "Pares" },
    { value: 9, label: "Otro" }
  ];


  const modalidad = [
    { value: 2, label: "Atención psicológica breve" },
    { value: 3, label: "Orientación/Consejería" },
    { value: 4, label: "Atención psicopedagógica" },
    { value: 5, label: "Orientación psicopedagógica" },
    { value: 6, label: "Grupo Psicoterapéutico" },
    { value: 7, label: "Grupo Psicopedagógico" },
    { value: 8, label: "Grupo de acompañamiento" },
    { value: 9, label: "Derivación externa" },
    { value: 10, label: "Derivación Psiquiatra" }
  ];

  const estdo_atencion = [
    { value: 2, label: "Reagendada" },
    { value: 3, label: "Realizada" },
    { value: 4, label: "Cancelada" }
  ];


  const area_atencion = [
    { value: 2, label: "Psicológica" },
    { value: 3, label: "Psicopedagógica" },
    { value: 4, label: "Psiquiátrica" },
    { value: 4, label: "Grupal" }
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
        activeClassName="add-medical-record"
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
                      <Link href="#">Ficha </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">Entrevista de evaluación</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <h4>Entrevista de evaluación</h4>
                    <form>
                      {/* Detalles de la cita */}

                      <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '20px 0 0 0', margin: '10px' }}>
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Profesional que realiza evaluación
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('name')}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Fecha
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('rut')}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Número de ficha
                            </label>
                            <input
                              className="form-control"
                              // value={rut}
                              type="text"
                              {...register('edad')}
                            />
                          </div>
                        </div>
                      </div>

                      {/* 1. Datos de identificación */}
                      <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '10px', margin: '10px' }}>
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>1. Datos de identificación</h4>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>Nombre completo</label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('nombr_completo')} />
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>Rut</label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('rut')} />
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>Carrera</label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('carrera')} />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>Año de ingreso</label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('ingreso')} />
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>Fecha de nacimiento</label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('nacimiento')} />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>Edad</label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('edad')} />
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>Dirección</label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('direccion')} />
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>Correo electrónico</label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('email')} />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>Teléfono</label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('telefono')} />
                          </div>
                        </div>
                      </div>

                      {/* 2. Datos de contactos de urgencia */}
                      <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '20px 0 0 0', margin: '10px' }}>
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>2. Datos de contactos de urgencia</h4>
                          </div>
                        </div>

                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Nombre y apellido
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('contacto_uno_nombre')}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Parentesco o relación
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('contacto_uno_relacion')}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Teléfono
                            </label>
                            <input
                              className="form-control"
                              // value={rut}
                              type="text"
                              {...register('contacto_uno_telefono')}
                            />
                          </div>
                        </div>


                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Nombre y apellido
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('contacto_dos_nombre')}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Parentesco o relación
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('contacto_dos_relacion')}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Teléfono
                            </label>
                            <input
                              className="form-control"
                              // value={rut}
                              type="text"
                              {...register('contacto_dos_telefono')}
                            />
                          </div>
                        </div>
                      </div>

                      {/* 3. Antecedentes sociales y familiares */}
                      <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '20px 0 0 0', margin: '10px' }}>
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>3. Antecedentes sociales y familiares</h4>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group select-gender">
                            <label>Previsión de salud </label>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('isapre')}
                                />
                                Isapre
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('fonasa')}
                                />
                                Fonasa
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('otro')}
                                />
                                Otro
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group select-gender">
                            <label>Financiamiento carrera </label>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="financiamiento"
                                  className="form-check-input"
                                  {...register('gratuidad')}
                                />
                                Gratuidad
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="financiamiento"
                                  className="form-check-input"
                                  {...register('beca')}
                                />
                                Beca
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="financiamiento"
                                  className="form-check-input"
                                  {...register('credito')}
                                />
                                Crédito
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="financiamiento"
                                  className="form-check-input"
                                  {...register('sin_beneficio')}
                                />
                                Sin beneficio
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>¿Dónde y con quién vives? Relación que tienes con ellos. ¿cómo te llevas con ellos?</label>

                            <textarea
                              className="form-control"
                              rows={3}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                              {...register('vive_con')}
                            />
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>¿Dónde y con quién vives? Relación que tienes con ellos. ¿cómo te llevas con ellos?</label>

                            <textarea
                              className="form-control"
                              rows={3}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                              {...register('tipo_de_relacion')}
                            />
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>¿Tienes labores de cuidador? ¿A quién cuidas?</label>

                            <textarea
                              className="form-control"
                              rows={3}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                              {...register('es_cuidador')}
                            />
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>¿De qué manera financias tus gastos personales?</label>
                            <textarea
                              className="form-control"
                              rows={3}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                              {...register('gastos_personales')}
                            />
                          </div>
                        </div>


                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>En caso de que tuvieses que costear tratamiento externo, quién/es podrían apoyarte económicamente?</label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('apoyo_economico')} />
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>¿Cuánto crees que podrías pagar para acceder a tratamiento semanalmente?</label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('disponibilidad_economica')} />
                          </div>
                        </div>

                      </div>

                      {/*  <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '20px 0 0 0', margin: '10px' }}>

                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms cal-icon">
                            <label>
                              Día de la Cita{" "}
                            </label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('fecha')} />
                          </div>
                        </div>

                        <div className="col-12 col-sm-12">
                          <div className="form-group local-forms">
                            <label>
                              Antecedentes médicos relevantes
                            </label>
                            <textarea
                              className="form-control"
                              rows={3}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                            />
                          </div>
                        </div>


                        <div className="col-12 col-sm-12">
                          <div className="form-group local-forms">
                            <label>
                              Descripción sintomatología <span className="login-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              rows={3}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                            />
                          </div>
                        </div>

                        <div className="col-12 col-sm-12">
                          <div className="form-group local-forms">
                            <label>
                              Expectativas <span className="login-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              rows={3}
                              cols={30}
                              defaultValue={""}
                              {...register('expectativas')}
                              style={{ resize: 'none' }}
                            />
                          </div>
                        </div>


                        <div className="col-12 col-sm-12">
                          <div className="form-group local-forms">
                            <label>
                              Impresión diagnóstica <span className="login-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              rows={3}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                            />
                          </div>
                        </div>

                        <div className="col-12 col-sm-12">
                          <div className="form-group local-forms">
                            <label>
                              Acuerdos <span className="login-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              rows={3}
                              cols={30}
                              defaultValue={""}
                              {...register('acuerdos')}
                              style={{ resize: 'none' }}
                            />
                          </div>
                        </div>

                        <div className="col-12 col-sm-12">
                          <div className="form-group local-forms">
                            <label>
                              Observaciones <span className="login-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              rows={3}
                              cols={30}
                              defaultValue={""}
                              {...register('notes')}
                              style={{ resize: 'none' }}
                            />
                          </div>
                        </div>


                      </div> */}

                      {/* 4. Antecedentes de salud */}
                      <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '20px 0 0 0', margin: '10px' }}>
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>4. Antecedentes de salud</h4>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <label>¿Te has realizado chequeos de salud durante el último año?  </label>
                          <div className="form-group select-gender">
                            <div className="form-check-inline col-2 col-md-1 col-xl-1">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                Si
                              </label>
                            </div>
                            <div className="form-check-inline col-6 col-md-2 col-xl-2">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                No / No recuerdo
                              </label>
                            </div>
                            <div className="form-check-inline col-8" style={{ display: 'inline-flex' }} >
                              <label className="form-check-label">
                                Motivo
                              </label>
                              <textarea
                                className="form-control"
                                rows={1}
                                cols={30}
                                defaultValue={""}
                                style={{ resize: 'none' }}
                                {...register('chequeos_salud_motivo')}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <label>¿Tienes alguna enfermedad de salud física?</label>
                          <div className="form-group select-gender">
                            <div className="form-check-inline col-2 col-md-1 col-xl-1">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                Si
                              </label>
                            </div>
                            <div className="form-check-inline col-6 col-md-2 col-xl-2">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                No / No sé
                              </label>
                            </div>
                            <div className="form-check-inline col-8" style={{ display: 'inline-flex' }} >
                              <label className="form-check-label">
                                ¿Cuál?
                              </label>
                              <textarea
                                className="form-control"
                                rows={1}
                                cols={30}
                                defaultValue={""}
                                style={{ resize: 'none' }}
                                {...register('chequeos_salud_motivo')}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <label>¿Tienes algún diagnóstico de salud mental?</label>
                          <div className="form-group select-gender">
                            <div className="form-check-inline col-2 col-md-1 col-xl-1">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                Si
                              </label>
                            </div>
                            <div className="form-check-inline col-6 col-md-2 col-xl-2">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                No
                              </label>
                            </div>
                            <div className="form-check-inline col-8" style={{ display: 'inline-flex' }} >
                              <label className="form-check-label">
                                ¿Cuál?
                              </label>
                              <textarea
                                className="form-control"
                                rows={1}
                                cols={30}
                                defaultValue={""}
                                style={{ resize: 'none' }}
                                {...register('chequeos_salud_motivo')}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <label>¿Tomas alguna medicación de manera permanente? (salud física y/o salud mental)</label>
                          <div className="form-group select-gender">
                            <div className="form-check-inline col-2 col-md-1 col-xl-1">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                Si
                              </label>
                            </div>
                            <div className="form-check-inline col-6 col-md-2 col-xl-2">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                No
                              </label>
                            </div>
                            <div className="form-check-inline col-8" style={{ display: 'inline-flex' }} >
                              <label className="form-check-label">
                                ¿Cuál/es?
                              </label>
                              <textarea
                                className="form-control"
                                rows={1}
                                cols={30}
                                defaultValue={""}
                                style={{ resize: 'none' }}
                                {...register('chequeos_salud_motivo')}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <label>¿Tienes atenciones previas en el departamento de salud mental?</label>
                          <div className="form-group select-gender">
                            <div className="form-check-inline col-2 col-md-1 col-xl-1">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                Si
                              </label>
                            </div>
                            <div className="form-check-inline col-6 col-md-2 col-xl-2">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                No
                              </label>
                            </div>
                            <div className="form-check-inline col-8" style={{ display: 'inline-flex' }} >
                              <label className="form-check-label">
                                Describe
                              </label>
                              <textarea
                                className="form-control"
                                rows={1}
                                cols={30}
                                defaultValue={""}
                                style={{ resize: 'none' }}
                                {...register('chequeos_salud_motivo')}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <label>¿Has estado en tratamientos previos en salud mental? ¿Cuánto tiempo y de qué tipo?</label>
                          <div className="form-group select-gender">
                            <div className="form-check-inline col-2 col-md-1 col-xl-1">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                Si
                              </label>
                            </div>
                            <div className="form-check-inline col-6 col-md-2 col-xl-2">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                No
                              </label>
                            </div>
                            <div className="form-check-inline col-8" style={{ display: 'inline-flex' }} >
                              <label className="form-check-label">
                                Describe
                              </label>
                              <textarea
                                className="form-control"
                                rows={1}
                                cols={30}
                                defaultValue={""}
                                style={{ resize: 'none' }}
                                {...register('chequeos_salud_motivo')}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <label>¿Actualmente estás con algún tratamiento en salud mental?</label>
                          <div className="form-group select-gender">
                            <div className="form-check-inline col-2 col-md-1 col-xl-1">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                Si
                              </label>
                            </div>
                            <div className="form-check-inline col-6 col-md-2 col-xl-2">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                No
                              </label>
                            </div>
                            <div className="form-check-inline col-8" style={{ display: 'inline-flex' }} >
                              <label className="form-check-label">
                                ¿De qué tipo?
                              </label>
                              <textarea
                                className="form-control"
                                rows={1}
                                cols={30}
                                defaultValue={""}
                                style={{ resize: 'none' }}
                                {...register('chequeos_salud_motivo')}
                              />
                            </div>
                          </div>
                        </div>


                        {/* Consumo de alcohol y/o drogas */}
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>a) Consumo de alcohol y/o drogas</h4>
                          </div>
                        </div>

                        {/* Consumo de alcohol */}

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group select-gender">
                            <label>¿Consumes alcohol?</label>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="alcohol"
                                  className="form-check-input"
                                  {...register('alcohol_si')}
                                />
                                Si
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="alcohol"
                                  className="form-check-input"
                                  {...register('alcohol_no')}
                                />
                                No
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="alcohol"
                                  className="form-check-input"
                                  {...register('alcohol_ocasional')}
                                />
                                Ocasional
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              ¿Qué tipo?
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('contacto_uno_nombre')}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Frecuencia en que consumes
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('contacto_uno_nombre')}
                            />
                          </div>
                        </div>

                        {/* Consumo de drogas */}
                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group select-gender">
                            <label>¿Consumes drogas? </label>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="drogas"
                                  className="form-check-input"
                                  {...register('drogas_si')}
                                />
                                Si
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="drogas"
                                  className="form-check-input"
                                  {...register('drogas_no')}
                                />
                                No
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="drogas"
                                  className="form-check-input"
                                  {...register('drogas_ocasional')}
                                />
                                Ocasional
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              ¿Qué tipo?
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('contacto_uno_nombre')}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Frecuencia en que consumes
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('contacto_uno_nombre')}
                            />
                          </div>
                        </div>

                        {/* Riesgo suicida */}
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>b) Riesgo suicida</h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>
                              Aplicar escala riesgo suicida
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('riesgo_suicida')}
                            />
                          </div>
                        </div>


                        {/*  <div className="col-12 col-md-4 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Nombre y apellido
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('contacto_uno_nombre')}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Parentesco o relación
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('contacto_uno_relacion')}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Teléfono
                            </label>
                            <input
                              className="form-control"
                              // value={rut}
                              type="text"
                              {...register('contacto_uno_telefono')}
                            />
                          </div>
                        </div>


                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Nombre y apellido
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('contacto_dos_nombre')}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Parentesco o relación
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('contacto_dos_relacion')}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Teléfono
                            </label>
                            <input
                              className="form-control"
                              // value={rut}
                              type="text"
                              {...register('contacto_dos_telefono')}
                            />
                          </div>
                        </div> */}
                      </div>

                      {/* 5. Motivo de consulta */}
                      <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '20px 0 0 0', margin: '10px' }}>
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>5. Motivo de consulta</h4>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>
                              Descripción motivo de consulta
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('contacto_uno_nombre')}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>
                              Sintomatología asociada al motivo de consulta
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('contacto_uno_relacion')}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>
                              ¿Cuál es tu expectativa con respecto a la atención en nuestro departamento?
                            </label>
                            <input
                              className="form-control"
                              // value={rut}
                              type="text"
                              {...register('contacto_uno_telefono')}
                            />
                          </div>
                          <div className="col-12 col-md-12 col-xl-12">
                            <div className="form-group local-forms">
                              <label>Área de atención de preferencia del/la estudiante<span className="login-danger">*</span>
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
                                    options={area_atencion}
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
                        </div>


                      </div>

                      {/* 6. Antecedentes académicos */}
                      <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '20px 0 0 0', margin: '10px' }}>
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>6. Antecedentes académicos</h4>
                          </div>
                        </div>


                        <div className="col-12 col-md-12 col-xl-12">
                          <label>¿Es tu primera carrera?</label>
                          <div className="form-group select-gender">
                            <div className="form-check-inline col-2 col-md-1 col-xl-1">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                Si
                              </label>
                            </div>
                            <div className="form-check-inline col-6 col-md-2 col-xl-2">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                No
                              </label>
                            </div>
                            <div className="form-check-inline col-8" style={{ display: 'inline-flex' }} >
                              <label className="form-check-label">
                                Si es no, ¿qué estudiaste antes?
                              </label>
                              <textarea
                                className="form-control"
                                rows={1}
                                cols={30}
                                defaultValue={""}
                                style={{ resize: 'none' }}
                                {...register('chequeos_salud_motivo')}
                              />
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-md-12 col-xl-12">
                          <label>¿Te sientes satisfecho/a con tu decisión de carrera actual?</label>
                          <div className="form-group select-gender">
                            <div className="form-check-inline col-2 col-md-1 col-xl-1">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                Si
                              </label>
                            </div>
                            <div className="form-check-inline col-6 col-md-2 col-xl-2">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                No
                              </label>
                            </div>
                            <div className="form-check-inline col-6 col-md-2 col-xl-2">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                Aún no lo sé
                              </label>
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-md-12 col-xl-12">
                          <label>¿Cómo consideras que ha sido tu desempeño hasta ahora?</label>
                          <div className="form-group select-gender">
                            <div className="form-check-inline col-2 col-md-1 col-xl-1">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                Bueno
                              </label>
                            </div>
                            <div className="form-check-inline col-6 col-md-2 col-xl-2">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                Malo
                              </label>
                            </div>
                            <div className="form-check-inline col-6 col-md-2 col-xl-2">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  name="prevision"
                                  className="form-check-input"
                                  {...register('chequeos_salud')}
                                />
                                Regular
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <label>
                            ¿Cuál ha sido el principal desafío al que te has enfrentado en la universidad?
                          </label>
                          <div className="form-group local-forms">

                            <textarea
                              className="form-control"
                              rows={2}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                              {...register('personas_significativas')}
                            />
                          </div>
                        </div>

                      </div>

                      {/* 7. Redes de apoyo disponibles */}
                      <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '20px 0 0 0', margin: '10px' }}>
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>7. Redes de apoyo disponibles</h4>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>
                              ¿Cuentas con personas significativas que te apoyen hoy en día? ¿Quiénes son?
                            </label>

                            <textarea
                              className="form-control"
                              rows={2}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                              {...register('personas_significativas')}
                            />
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>Área de atención de preferencia del/la estudiante<span className="login-danger">*</span>
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
                                  isMulti
                                  instanceId="genero"
                                  defaultValue={selectedOption}
                                  onChange={onChange}
                                  options={tipo_apoyo}
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

                      </div>

                      {/* 8. Intereses y autocuidado */}
                      <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '20px 0 0 0', margin: '10px' }}>
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>8. Intereses y autocuidado </h4>
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>
                              ¿Qué tipo de actividades te gusta realizar? ¿Les dedicas tiempo?
                            </label>
                            <textarea
                              className="form-control"
                              rows={2}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                              {...register('personas_significativas')}
                            />
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>
                              ¿Tienes espacios de autocuidado? ¿Cómo cuáles?
                            </label>
                            <textarea
                              className="form-control"
                              rows={2}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                              {...register('personas_significativas')}
                            />
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>
                              ¿Dedicas tiempo para descansar? Promedio de horas dedicadas a dormir
                            </label>
                            <textarea
                              className="form-control"
                              rows={2}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                              {...register('personas_significativas')}
                            />
                          </div>
                        </div>

                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>
                              ¿Cómo te alimentas? Describe un día de alimentación habitual
                            </label>
                            <textarea
                              className="form-control"
                              rows={2}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                              {...register('personas_significativas')}
                            />
                          </div>
                        </div>


                      </div>

                      {/* Evaluación profesional */}
                      <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '20px 0 0 0', margin: '10px' }}>
                        <h4>Evaluación profesional (se completa luego de la entrevista) </h4>

                        <div className="col-12 col-md-12 col-xl-12">
                          <label>Modalidad de atención a la cual accede según evaluación</label>
                          <div className="form-group local-forms">
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
                                  isMulti
                                  instanceId="genero"
                                  defaultValue={selectedOption}
                                  onChange={onChange}
                                  options={modalidad}
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

                        <div className="col-12 col-md-12 col-xl-12">
                          <label>
                            Estado de ánimo/ Afectividad (presencia o no de sintomatología asociada a ansiedad/ depresión/ manía, entre otras)
                          </label>
                          <div className="form-group local-forms">
                            <textarea
                              className="form-control"
                              rows={2}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                              {...register('animo_afectividad')}
                            />
                          </div>
                        </div>


                        <div className="col-12 col-md-12 col-xl-12">
                          <label>
                            Tipo de pensamiento observado (organizado, desorganizado, obsesivo, entre otros)
                          </label>
                          <div className="form-group local-forms">
                            <textarea
                              className="form-control"
                              rows={2}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                              {...register('tipo_pensamiento')}
                            />
                          </div>
                        </div>


                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>
                              Detección de posibles condiciones asociadas a déficit cognitivo (TEA, TDHA)
                            </label>
                            <textarea
                              className="form-control"
                              rows={2}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                              {...register('condiciones_deficit_cognitivo')}
                            />
                          </div>
                        </div>


                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>
                              Consciencia de realidad (presencia de delirios, percepción alterada)
                            </label>
                            <textarea
                              className="form-control"
                              rows={2}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                              {...register('consciencia_de_realidad')}
                            />
                          </div>
                        </div>


                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>
                              Autoconcepto y autoestima
                            </label>
                            <textarea
                              className="form-control"
                              rows={2}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                              {...register('autoconcepto_autoestima')}
                            />
                          </div>
                        </div>


                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>
                              Situaciones de riesgo a nivel relacional
                            </label>
                            <textarea
                              className="form-control"
                              rows={2}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                              {...register('riesgo_nivel_relacional')}
                            />
                          </div>
                        </div>


                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>
                              Situaciones de riesgo a nivel personal
                            </label>
                            <textarea
                              className="form-control"
                              rows={2}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                              {...register('riesgo_nivel_personal')}
                            />
                          </div>
                        </div>



                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>
                              Observaciones
                            </label>
                            <textarea
                              className="form-control"
                              rows={4}
                              cols={30}
                              defaultValue={""}
                              style={{ resize: 'none' }}
                              {...register('observaciones')}
                            />
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

        </div>
      </>
    </div>
  );
};

export default AddFirstAppoinments;
