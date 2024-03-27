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
import { fetchScheduleByDate, fetchScheduleByUser, createSchedule } from '@/services/SchedulesServices';
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
      // const { users } = await fetchDoctor(params.id)
      const { especialidad: user } = await fetchSpeciality(params.id)
      console.log('user', user);
      const obj = {
        nombre: `${user[0].nombre} ${user[0].apellido}`,
        especialidad: user[0].especialidad,
        id: user[0].id,
        horaIni: '00:00:00',
        semanal: { dia: [] }
      }
      setProfesional(obj)
      return obj
    }
  })

  const onSubmit = handleSubmit(data => {
    console.log('DAta', data)
    createSchedule({ ...data, id_user: params.id })
  })

  const tipo_usuario = ['admin', 'profesional']

  const frecuencia = watch('frecuencia')

  return (
    <>
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
                                  message: 'Especialidad es requerida'
                                }
                              })} />
                          </div>
                        </div>


                        {/* TIPO DE CITA */}
                        <div className="col-12 col-lg-12" >
                          <div className="col-12">
                            <div className="form-heading">
                              <h4>Tipo de cita</h4>
                            </div>
                          </div>
                          <div className="form-group select-gender">
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  value="individual"
                                  name="tipo_cita"
                                  className="form-check-input"
                                  {...register('tipo_cita')}
                                />
                                Individual
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  value="grupal"
                                  name="tipo_cita"
                                  className="form-check-input"
                                  {...register('tipo_cita')}
                                />
                                Grupal
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  value="mixta"
                                  name="tipo_cita"
                                  className="form-check-input"
                                  {...register('tipo_cita')}
                                />
                                Mixta
                              </label>
                            </div>
                          </div>
                        </div>



                        {/* MODALIDAD */}
                        <div className="col-12 col-lg-12" >
                          <div className="col-12">
                            <div className="form-heading">
                              <h4>Modalidad</h4>
                            </div>
                          </div>
                          <div className="form-group select-gender">
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  value="videollamada"
                                  name="modalidad"
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
                                  value="presencial"
                                  name="modalidad"
                                  className="form-check-input"
                                  {...register('modalidad')}
                                />
                                Presencial
                              </label>
                            </div>
                            <div className="form-check-inline">
                              <label className="form-check-label">
                                <input
                                  type="radio"
                                  value="ambas"
                                  name="modalidad"
                                  className="form-check-input"
                                  {...register('modalidad')}
                                />
                                Ambas
                              </label>
                            </div>
                          </div>
                        </div>




                        {/* HORARIOS */}
                        <div className="col-12">
                          <div className="form-heading">
                            <h4>Disponibilidad</h4>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Desde <span className="login-danger">*</span>
                            </label>
                            <Controller
                              control={control}
                              defaultValue='00:00:00'
                              render={({ field: { onChange, onBlur, value } }) => (
                                <TextField
                                  className="form-control"
                                  // id="outlined-controlled"
                                  type="time"
                                  onBlur={onBlur}
                                  onChange={onChange}
                                  value={value}
                                />
                              )}
                              name="horaIni"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="form-group local-forms">
                            <label>
                              Hasta <span className="login-danger">*</span>
                            </label>
                            <div className="">
                              <Controller
                                control={control}
                                defaultValue='00:00:00'
                                render={({ field: { onChange, onBlur, value } }) => (
                                  <TextField
                                    className="form-control"
                                    // id="outlined-controlled"
                                    type="time"
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value}
                                  />
                                )}
                                name="horaFin"
                              />
                            </div>
                          </div>
                        </div>


                        {/* <div className="row">
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
                          </div>
                        </div> */}

                        {/* <div className="col-12 col-md-6 col-xl-4">
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
                        </div> */}


                        {/* FRECUENCIAS */}

                        <div className="col-12 col-lg-12" >
                          <div className="col-12">
                            <div className="form-heading">
                              <h4>Frecuencia</h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 col-lg-2" >
                              <div className="form-group select-gender">
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
                                ? <div className="col-12 col-lg-6" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '20px' }}>
                                  <div className="form-group select-gender">
                                    <div className="form-check">
                                      <label className="form-check-label">
                                        <input
                                          type="radio"
                                          name="diaria"
                                          value="recurrente"
                                          className="form-check-input"
                                          {...register('diaria.tipo')}
                                        />
                                        Cada <input
                                          type="number"
                                          name="diaria"
                                          className='ant-pick-selector'
                                          style={styleInput}
                                          {...register('diaria.recurrencia')}
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
                                          {...register('diaria.tipo')}
                                        />
                                        Todos los días laborales de la semana
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                : frecuencia === 'semanal'
                                  ? <div className="col-12 col-lg-6" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '20px' }}>
                                    <div className="form-group select-gender">
                                      <div className="form-group">
                                        <label className="form-check-label">
                                          Repeticiones cada <input
                                            type="number"
                                            name="semanal"
                                            style={styleInput}
                                            {...register('semanal.recurrencia')}
                                          /> semanas el:
                                        </label>
                                      </div>
                                    </div>
                                    <div className="form-group select-gender">

                                      <div className="form-check-inline">
                                        <label className="form-check-label">
                                          <input
                                            type="checkbox"
                                            value="lunes"
                                            name="semanal"
                                            className="form-check-input"
                                            {...register('semanal.dia')}
                                          />
                                          Lunes
                                        </label>
                                        {/* </div>
                                  <div className="form-check-inline"> */}
                                        <label className="form-check-label">
                                          <input
                                            type="checkbox"
                                            value="martes"
                                            name="semanal"
                                            className="form-check-input"
                                            {...register('semanal.dia')}
                                          />
                                          Martes
                                        </label>
                                        {/* </div>
                                  <div className="form-check-inline"> */}
                                        <label className="form-check-label">
                                          <input
                                            type="checkbox"
                                            value="miércoles"
                                            name="semanal"
                                            className="form-check-input"
                                            {...register('semanal.dia')}
                                          />
                                          Miércoles
                                        </label>
                                        {/* </div>
                                  <div className="form-check-inline"> */}
                                        <label className="form-check-label">
                                          <input
                                            type="checkbox"
                                            value="jueves"
                                            name="semanal"
                                            className="form-check-input"
                                            {...register('semanal.dia')}
                                          />
                                          Jueves
                                        </label>
                                        {/* </div>
                                  <div className="form-check-inline"> */}
                                        <label className="form-check-label">
                                          <input
                                            type="checkbox"
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
                                    ? <div className="col-12 col-lg-6" style={{ border: '1px solid lightgrey', borderRadius: '8px', padding: '20px' }}>
                                      <div className="form-group select-gender">
                                        <div className="form-check">
                                          <label className="form-check-label">
                                            <input
                                              type="radio"
                                              value="cardinal"
                                              name="cardinal"
                                              className="form-check-input"
                                              {...register('mensual.tipo')}
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
                                              {...register('mensual.tipo')}
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
                            }
                          </div>
                        </div>

                        {/* REPETICIONES */}
                        <div className="col-12 col-md-6 col-xl-12">
                          <div className="col-12">
                            <div className="form-heading">
                              <h4>Rango de repetición</h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 col-md-6 col-xl-4">
                              <div className="form-group local-forms">
                                Comienza el{" "}
                                <span className="login-danger">*</span>
                                <input
                                  className="form-control datetimepicker"
                                  type="date"
                                  placeholder=""
                                  {...register('fechaInicio', {
                                    required: {
                                      value: true,
                                      message: 'Fecha de inicio es requerida'
                                    }
                                  })}
                                />
                                {errors.fechaInicio && <span><small>{errors.fechaInicio.message}</small></span>}
                              </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-4">
                              <div className="form-group local-forms">
                                Finaliza el{" "}
                                <span className="login-danger">*</span>
                                <input
                                  className="form-control datetimepicker"
                                  type="date"
                                  placeholder=""
                                  {...register('fechaFin', {
                                    required: {
                                      value: true,
                                      message: 'Fecha de finalización es requerida'
                                    }
                                  })}
                                />
                                {errors.fechaFin && <span><small>{errors.fechaFin.message}</small></span>}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="doctor-submit text-end">
                            {/* <Link href="/addschedule" > */}
                            <button
                              type="button"
                              className="btn btn-primary submit-form me-2"
                              onClick={onSubmit}
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


    </>
  )
}

export default AddSchedule;
