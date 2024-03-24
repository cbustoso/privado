'use client'
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Sidebar from '../../../../components/Sidebar';
import Link from 'next/link';
import { DatePicker } from 'antd';
import { TextField, Switch } from '@mui/material';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import { useForm, Controller } from 'react-hook-form'

import { fetchDoctor, fetchSpeciality } from '@/services/DoctorsServices';
import { fetchScheduleByDate, fetchScheduleByUser } from '@/services/SchedulesServices';
import Calender from '../../../calender/page';
import Calendar from 'feather-icons-react/build/IconComponents/Calendar';
import Days from '@/components/Days';

const AddSchedule = ({ params }) => {

  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [profesional, setProfesional] = useState({})
  const onChange = (date, dateString) => {
    // console.log(date, dateString);
  };
  const [selectedOption, setSelectedOption] = useState(null);
  const styleInput = {
    display: 'inline',
    width: '20%'
  }
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  useEffect(() => {
    const fetchProfesional = async () => {
      // const { users } = await fetchDoctor(params.id)
      const { especialidad: user } = await fetchSpeciality(params.id)
      // const resp = await fe
      console.log('especialidad', user[0])
      setProfesional(user[0])
    }
    fetchProfesional()
  }, [])

  const { register, handleSubmit, watch, control,
    formState: { errors }
  } = useForm({
    defaultValues: async () => {
      const { users } = await fetchDoctor(params.id)
      const obj = {
        nombre: `${users[0].nombre} ${users[0].apellido}`,
        especialidad: 'Psicologia',
        id: users[0].id
      }
      setProfesional(obj)
      return obj
    }
  })


  const handleOnSubmit = async (data) => {
    console.log(data)
  }

  const tipo_usuario = ['admin', 'profesional']

  const frecuencia = watch('frecuencia')

  return (
    <div>
      <Sidebar id='menu-item5' id1='menu-items5' activeClassName='add-shedule' />
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="schedule.html">Horario </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <i className="feather-chevron-right">
                        <FeatherIcon icon="chevron-right" />
                      </i>
                    </li>
                    <li className="breadcrumb-item active">Agregar horario</li>
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
                      <div className="row">
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>Profesional</h4>
                          </div>
                        </div>

                        {/* Nombre profesional */}
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Nombre  profesional <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('nombre', {
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
                          </div>
                        </div>
                        {/* Especialidad */}
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Especialidad <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              {...register('especialidad', {
                                required: {
                                  value: true,
                                  message: 'Especialidad es requerido'
                                }
                              })} />

                          </div>
                        </div>

                        {/* <div className="col-12">
                          <div className="form-heading">
                            <h4>Configuración del servicio</h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Duración del servicio <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="number"
                              {...register('bloque_servicio', {
                                required: {
                                  value: true,
                                  message: 'Nombre es requerido'
                                }
                              })}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-6">
                          <div className="form-group local-forms">
                            <label>
                              Duración post servicio <span className="login-danger">*</span>
                            </label>
                            <input
                              className="form-control"
                              type="number"
                              {...register('bloque_post_servicio', {
                                required: {
                                  value: true,
                                  message: 'Nombre es requerido'
                                }
                              })}
                            />
                          </div>
                        </div> */}


                        <div className="col-12">
                          <div className="form-heading">
                            <h4>Disponibilidad</h4>
                          </div>
                        </div>


                        {/* <Days day={'Lunes'} />
                          <Days day={'Martes'} />
                          <Days day={'Miércoles'} />
                          <Days day={'Jueves'} />
                          <Days day={'Viernes'} /> */}

                        {/* 
                          <div className="col-6 col-md-6 col-xl-6">
                            <Switch {...label} defaultChecked /> Lunes
                          </div>
                          <div className="col-6 col-md-6 col-xl-6">
                            <button className="btn cancel-form" disabled>+ Agregar</button>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <label>
                                Desde <span className="login-danger">*</span>
                              </label>
                              <TextField
                                className="form-control"
                                // id="outlined-controlled"
                                type="time"
                                value={startTime}
                                onChange={(event) => {
                                  setStartTime(event.target.value);
                                }}
                                {...register('start_time')}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <label>
                                Hasta <span className="login-danger">*</span>
                              </label>
                              <TextField
                                className="form-control"
                                // id="outlined-controlled"
                                type="time"
                                value={startTime}
                                onChange={(event) => {
                                  setStartTime(event.target.value);
                                }}
                                {...register('start_time')}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <i className="fa fa-trash-alt m-r-5"></i>
                            </div>
                          </div>
                          <div className="col-12 col-md-12 col-xl-12" style={{ marginTop: '-30px' }}  >
                            <div className="form-group local-forms">
                              <small>Total atenciones:</small>
                            </div>
                          </div> */}


                        {/* <div className="col-6 col-md-6 col-xl-6">
                            <Switch {...label} defaultChecked /> Martes
                          </div>
                          <div className="col-6 col-md-6 col-xl-6">
                            <button className="btn cancel-form" disabled>+ Agregar</button>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <label>
                                Desde <span className="login-danger">*</span>
                              </label>
                              <TextField
                                className="form-control"
                                // id="outlined-controlled"
                                type="time"
                                value={startTime}
                                onChange={(event) => {
                                  setStartTime(event.target.value);
                                }}
                                {...register('start_time')}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <label>
                                Hasta <span className="login-danger">*</span>
                              </label>
                              <TextField
                                className="form-control"
                                // id="outlined-controlled"
                                type="time"
                                value={startTime}
                                onChange={(event) => {
                                  setStartTime(event.target.value);
                                }}
                                {...register('start_time')}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <i className="fa fa-trash-alt m-r-5"></i>
                            </div>
                          </div>
                          <div className="col-12 col-md-12 col-xl-12">
                            <div className="form-group local-forms" style={{ marginTop: '-30px' }}>
                              <small>Total atenciones:</small>
                            </div>
                          </div> */}


                        {/* <div className="col-6 col-md-6 col-xl-6">
                            <Switch {...label} defaultChecked /> Miércoles
                          </div>
                          <div className="col-6 col-md-6 col-xl-6">
                            <button className="btn cancel-form" disabled>+ Miércoles</button>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <label>
                                Desde <span className="login-danger">*</span>
                              </label>
                              <TextField
                                className="form-control"
                                // id="outlined-controlled"
                                type="time"
                                value={startTime}
                                onChange={(event) => {
                                  setStartTime(event.target.value);
                                }}
                                {...register('start_time')}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <label>
                                Hasta <span className="login-danger">*</span>
                              </label>
                              <TextField
                                className="form-control"
                                // id="outlined-controlled"
                                type="time"
                                value={startTime}
                                onChange={(event) => {
                                  setStartTime(event.target.value);
                                }}
                                {...register('start_time')}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <i className="fa fa-trash-alt m-r-5"></i>
                            </div>
                          </div>
                          <div className="col-12 col-md-12 col-xl-12">
                            <div className="form-group local-forms" style={{ marginTop: '-30px' }}>
                              <small>Total atenciones:</small>
                            </div>
                          </div> */}



                        {/* 
                          <div className="col-6 col-md-6 col-xl-6">
                            <Switch {...label} defaultChecked /> Jueves
                          </div>
                          <div className="col-6 col-md-6 col-xl-6">
                            <button className="btn cancel-form" disabled>+ Agregar</button>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <label>
                                Desde <span className="login-danger">*</span>
                              </label>
                              <TextField
                                className="form-control"
                                // id="outlined-controlled"
                                type="time"
                                value={startTime}
                                onChange={(event) => {
                                  setStartTime(event.target.value);
                                }}
                                {...register('start_time')}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <label>
                                Hasta <span className="login-danger">*</span>
                              </label>
                              <TextField
                                className="form-control"
                                // id="outlined-controlled"
                                type="time"
                                value={startTime}
                                onChange={(event) => {
                                  setStartTime(event.target.value);
                                }}
                                {...register('start_time')}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <i className="fa fa-trash-alt m-r-5"></i>
                            </div>
                          </div>
                          <div className="col-12 col-md-12 col-xl-12">
                            <div className="form-group local-forms" style={{ marginTop: '-30px' }}>
                              <small>Total atenciones:</small>
                            </div>
                          </div> */}

                        {/* 
                          <div className="col-6 col-md-6 col-xl-6">
                            <Switch {...label} defaultChecked /> Viernes
                          </div>
                          <div className="col-6 col-md-6 col-xl-6">
                            <button className="btn cancel-form" disabled>+ Agregar</button>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <label>
                                Desde <span className="login-danger">*</span>
                              </label>
                              <TextField
                                className="form-control"
                                // id="outlined-controlled"
                                type="time"
                                value={startTime}
                                onChange={(event) => {
                                  setStartTime(event.target.value);
                                }}
                                {...register('start_time')}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <label>
                                Hasta <span className="login-danger">*</span>
                              </label>
                              <TextField
                                className="form-control"
                                // id="outlined-controlled"
                                type="time"
                                value={startTime}
                                onChange={(event) => {
                                  setStartTime(event.target.value);
                                }}
                                {...register('start_time')}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-xl-4">
                            <div className="form-group local-forms">
                              <i className="fa fa-trash-alt m-r-5"></i>
                            </div>
                          </div>
                          <div className="col-12 col-md-12 col-xl-12">
                            <div className="form-group local-forms" style={{ marginTop: '-30px' }}>
                              <small>Total atenciones:</small>
                            </div>
                          </div> */}




                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms ">
                            <label>
                              Días disponibles <span className="login-danger">*</span>
                            </label>
                            <DatePicker
                              multiple
                              onChange={onChange}
                              maxTagCount="responsive"
                              size="large"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Desde <span className="login-danger">*</span>
                            </label>
                            <TextField
                              className="form-control"
                              id="outlined-controlled"
                              type="time"
                              value={startTime}
                              onChange={(event) => {
                                setStartTime(event.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Hasta <span className="login-danger">*</span>
                            </label>
                            <div className="">
                              <TextField
                                className="form-control"
                                id="outlined-controlled"
                                type="time"
                                value={endTime}
                                onChange={(event) => {
                                  setEndTime(event.target.value);
                                }}
                              />
                            </div>
                          </div>
                        </div>


                        <div className="col-12 col-lg-12" >
                          <div className="col-12">
                            <div className="form-heading">
                              <h4>Frecuencia</h4>
                            </div>
                          </div>
                          <div className="form-group select-gender">
                            {/* <label className="gen-label">
                                Frecuencia <span className="login-danger">*</span>
                              </label> */}
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  value="diaria"
                                  name="frecuencia"
                                  className="form-check-input"
                                  {...register('frecuencia')}
                                />
                                Diaria
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  value="semanal"
                                  name="frecuencia"
                                  className="form-check-input"
                                  {...register('frecuencia')}
                                />
                                Semanal
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  value="mensual"
                                  name="frecuencia"
                                  className="form-check-input"
                                  {...register('frecuencia')}
                                />
                                Mensual
                              </label>
                            </div>
                          </div>
                        </div>

                        {
                          frecuencia === 'diaria'
                            ? <div className="col-12 col-lg-10">
                              <div className="form-group select-gender">
                                <div className="form-check">
                                  <label className="form-check-label">
                                    <input
                                      type="radio"
                                      name="diaria"
                                      value="recurrente"
                                      className="form-check-input"
                                      {...register('diaria')}
                                    />
                                    Cada <input
                                      type="number"
                                      name="diaria"
                                      className='ant-pick-selector'
                                      style={styleInput}
                                      {...register('diaria.repetir')}
                                    /> días
                                  </label>
                                  {/* </div>
                              </div>
                              <div className="col-12">
                                <div className="form-check select-gender"> */}
                                  <label className="form-check-label">
                                    <input
                                      type="radio"
                                      name="diaria"
                                      value="diaria"
                                      className="form-check-input"
                                      {...register('diaria')}
                                    />
                                    Todos los días laborales de la semana
                                  </label>
                                </div>
                              </div>
                            </div>

                            : frecuencia === 'semanal'
                              ? <div className="col-12 col-lg-10">
                                <div className="form-group select-gender">
                                  <div className="form-group">
                                    <label className="form-check-label">
                                      Repetir cada <input
                                        type="number"
                                        name="semanal"
                                        style={styleInput}
                                        {...register('semanal.repetir')}
                                      /> semanas el:
                                    </label>
                                  </div>
                                </div>
                                <div className="form-group select-gender">

                                  <div className="form-check-inline">
                                    <label className="form-check-label">
                                      <input
                                        type="radio"
                                        value="lunes"
                                        name="semanal"
                                        className="form-check-input"
                                        {...register('semanal.dia')}
                                      />
                                      Lunes
                                    </label>
                                  </div>
                                  <div className="form-check-inline">
                                    <label className="form-check-label">
                                      <input
                                        type="radio"
                                        value="martes"
                                        name="semanal"
                                        className="form-check-input"
                                        {...register('semanal.dia')}
                                      />
                                      Martes
                                    </label>
                                  </div>
                                  <div className="form-check-inline">
                                    <label className="form-check-label">
                                      <input
                                        type="radio"
                                        value="miércoles"
                                        name="semanal"
                                        className="form-check-input"
                                        {...register('semanal.dia')}
                                      />
                                      Miércoles
                                    </label>
                                  </div>
                                  <div className="form-check-inline">
                                    <label className="form-check-label">
                                      <input
                                        type="radio"
                                        value="jueves"
                                        name="semanal"
                                        className="form-check-input"
                                        {...register('semanal.dia')}
                                      />
                                      Jueves
                                    </label>
                                  </div>
                                  <div className="form-check-inline">
                                    <label className="form-check-label">
                                      <input
                                        type="radio"
                                        value="viernes"
                                        name="semanal"
                                        className="form-check-input"
                                        {...register('semanal.dia')}
                                      />
                                      Viernes
                                    </label>
                                  </div>
                                </div>

                              </div>

                              : frecuencia === 'mensual'
                                ? <div className="col-12 col-lg-10">
                                  <div className="form-group select-gender">
                                    <div className="form-check">
                                      <label className="form-check-label">
                                        <input
                                          type="radio"
                                          value="cardinal"
                                          name="cardinal"
                                          className="form-check-input"
                                          {...register('mensual')}
                                        />
                                        El día <input
                                          type="number"
                                          max={31}
                                          min={1}
                                          // name="cardinal"
                                          {...register('mensual.cardinal-numero')}
                                        /> de cada  <input
                                          type="number"
                                          max={31}
                                          min={1}
                                          // name="cardinal"
                                          {...register('mensual.cardinal-frecuencia')}
                                        /> meses
                                      </label>
                                    </div>
                                  </div>

                                  <div className="col-12 select-gender">
                                    <div className="form-check">
                                      <label className="form-check-label ">
                                        <input
                                          type="radio"
                                          value="ordinal"
                                          name="ordinal"
                                          className="form-check-input"
                                          {...register('mensual')}
                                        />
                                        El <select className="select form-check-label"
                                          {...register('mensual.ordinal-orden')}>
                                          <option name="">... elegir</option>
                                          <option name="primer">primer</option>
                                          <option name="segundo">segundo</option>
                                          <option name="tercer">tercer</option>
                                          <option name="cuarto">cuarto</option>
                                          <option name="ultimo">último</option>
                                        </select>
                                        <select className="select form-check-label"
                                          {...register('mensual.ordinal-dia')}
                                        >
                                          <option name="dia">... día</option>
                                          <option name="lunes">lunes</option>
                                          <option name="martes">martes</option>
                                          <option name="miercoles">miércoles</option>
                                          <option name="jueves">jueves</option>
                                          <option name="viernes">viernes</option>
                                        </select>
                                        de cada   <input
                                          type="number"
                                          max={31}
                                          min={1}
                                          // name="mensual"
                                          {...register('mensual.ordinal-frecuencia')}
                                        /> meses
                                      </label>
                                    </div>
                                  </div>
                                </div>

                                : ""
                          // frecuencia === 'anual'
                          //   ? <div className="col-12 col-lg-10">
                          //     <div className="form-group select-gender">
                          //       <div className="form-check">
                          //         <label className="form-check-label">

                          //           Repetir cada <input
                          //             type="number"
                          //             max={31}
                          //             min={1}
                          //             // name="diaria"
                          //             {...register('anual.frecuencia')}
                          //           /> años

                          //         </label>
                          //       </div>
                          //     </div>
                          //     <div className="col-12 select-gender">
                          //       <div className="form-group">
                          //         <label className="form-check-label ">
                          //           <input
                          //             type="radio"
                          //             value="cardinal"
                          //             name="cardinal"
                          //             className="form-check-input"
                          //             {...register('anual')}
                          //           />
                          //           El <input
                          //             type="number"
                          //             max={31}
                          //             min={1}
                          //             name="cardinal"
                          //             {...register('anual.numero')}
                          //           /> de
                          //           <select
                          //             className="select form-check-label"
                          //             name="cardinal"
                          //             {...register('anual.mes-cardinal')}
                          //           >
                          //             <option>marzo</option>
                          //             <option>abril</option>
                          //             <option>mayo</option>
                          //             <option>junio</option>
                          //             <option>julio</option>
                          //             <option>agosto</option>
                          //             <option>septiembre</option>
                          //             <option>octubre</option>
                          //             <option>noviembre</option>
                          //             <option>diciembre</option>
                          //           </select>
                          //         </label>
                          //       </div>
                          //     </div>

                          //     <div className="col-12 select-gender">
                          //       <div className="form-group">
                          //         <label className="form-check-label ">
                          //           <input
                          //             type="radio"
                          //             value="ordinal"
                          //             name="ordinal"
                          //             className="form-check-input"
                          //             {...register('anual')}
                          //           />
                          //           El <select className="select form-check-label"
                          //             {...register('anual.orden')}
                          //           >
                          //             <option name="primer">primer</option>
                          //             <option name="segundo">segundo</option>
                          //             <option name="tercer">tercer</option>
                          //             <option name="cuarto">cuarto</option>
                          //             <option name="ultimo">último</option>
                          //           </select>
                          //           <select className="select form-check-label"
                          //             {...register('anual.dia')}
                          //           >
                          //             <option name="lunes">lunes</option>
                          //             <option name="martes">martes</option>
                          //             <option name="miercoles">miércoles</option>
                          //             <option name="jueves">jueves</option>
                          //             <option name="viernes">viernes</option>
                          //           </select> de
                          //           <select className="select form-check-label"
                          //             {...register('anual.mes')}
                          //           >
                          //             <option name="marzo">marzo</option>
                          //             <option name="abril">abril</option>
                          //             <option name="mayo">mayo</option>
                          //             <option name="junio">junio</option>
                          //             <option name="julio">julio</option>
                          //             <option name="agosto">agosto</option>
                          //             <option name="septiembre">septiembre</option>
                          //             <option name="octubre">octubre</option>
                          //             <option name="noviembre">noviembre</option>
                          //             <option name="diciembre">diciembre</option>
                          //           </select>
                          //         </label>
                          //       </div>
                          //     </div>
                          //   </div>

                          //   : ""
                        }
                        <div className="col-12">
                          <div className="doctor-submit text-end">
                            {/* <Link href="/addschedule" > */}
                            <button
                              type="button"
                              className="btn btn-primary submit-form me-2"
                              onClick={handleSubmit(handleOnSubmit)}
                            >
                              Agregar horario
                            </button>
                            {/* </Link> */}
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

        </div>
        <Calender id={params.id} />

      </>


    </div >
  )
}

export default AddSchedule;
