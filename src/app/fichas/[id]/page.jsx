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

  
  const estdo_atencion = [
    { value: 2, label: "Reagendada" },
    { value: 3, label: "Realizada" },
    { value: 4, label: "Cancelada" }
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
                    <li className="breadcrumb-item active">Registrar atención</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <h4>Registrar atención</h4>
                    <form>
                      {/* Detalles del paciente */}
                      <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '10px', margin: '10px' }}>
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>Detalles del Paciente</h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>Estado atención</label>
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
                                  options={estdo_atencion}
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
                                      zIndex: 1000
                                    }),
                                  }}
                                />
                              )}
                            />
                            {errors.doctor && <span><small>{errors.doctor.message}</small></span>}

                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Nombres
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
                              Rut
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
                              Edad
                            </label>
                            <input
                              className="form-control"
                              // value={rut}
                              type="text"
                              {...register('edad')}
                            />
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Carrera
                            </label>
                            <input
                              className="form-control"
                              // value={rut}
                              type="text"
                              {...register('carrera')}
                            />
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Email
                            </label>
                            <input
                              className="form-control"
                              type="number"
                              {...register('email')}
                            />
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>Año de ingreso</label>
                            <input
                              className="form-control"
                              type="number"
                              {...register('admision')}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Teléfono
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('mobile')}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-4">
                          <div className="form-group local-forms">
                            <label>
                              Comuna
                            </label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('address')} />
                          </div>
                        </div>
                      </div>

                      {/* Detalles de la cita */}
                      <div className="row" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '10px', margin: '10px' }}>
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>Observaciones</h4>
                          </div>
                        </div>

                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>Motivo de la consulta</label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('motivo_consulta')} />
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-xl-6">
                          <div className="form-group local-forms">
                            <label>¿Cómo se enteró de la existencia del servicio?</label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('existencia_servicio')} />
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-xl-6">
                          <div className="form-group local-forms">
                            <label>¿Quién realizó la derivación?</label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('quien_derivo')} />
                          </div>
                        </div>
                        <div className="form-group select-gender">
                          <label className="gen-label">
                            Tratamientos anteriores en el servicio
                          </label>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="checkbox"
                                name="gender"
                                value="male"
                                className="form-check-input"
                                {...register('gender')}
                              />
                              Sí
                            </label>
                          </div>
                        </div>
                        <div className="col-12 col-md-12 col-xl-12">
                          <div className="form-group local-forms">
                            <label>¿Has sido diagnosticado/a por un/a profesional de salud mental en los últimos 2 años?</label>
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('diagnosticos_previos')} />
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
                            
                            <input
                              className="form-control" type="text"
                              defaultValue={""}
                              {...register('profesional')} />

                          </div>
                        </div>
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

        </div>
      </>
    </div>
  );
};

export default AddFirstAppoinments;
