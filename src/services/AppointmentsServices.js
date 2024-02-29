// import { fetchUser } from './UsersServices'

// const formatDate = (date) => {
//   const day = date.getDate()
//   const month = date.getMonth() + 1
//   const year = date.getFullYear()
//   return `${year}-${month}-${day}`
// }

// export const fetchAppointments = async (callback) => {
//   // const APPOINMENT_URL = process.env.VITE_APPOINTMENTS_API + `/api/appointments`
//   // const data = await fetch(APPOINMENT_URL, {
//   //   headers: {
//   //     'content-type': 'application/json',
//   //     'access-control-allow-origin': '*',
//   //     'ngrok-skip-browser-warning': 'any'
//   //   }
//   // })

//   // const response = await data.json()
//   // response['response'].forEach(element => {
//   //   element['fecha_cita'] = element['fecha_cita'].slice(0, 10)
//   // });
//   // return response
//   try {
//     const data = await fetch(process.env.VITE_APPOINTMENTS_API + '/api/appintsimple')
//     const response = await data.json()
//     response.forEach(element => {
//       element['fecha_cita'] = element['fecha_cita'].slice(0, 10)
//     });

//     const obj = response.map(async date => {
//       const fetchDoctor = await fetchUser(date.id_professional)
//       const fetchPatient = await fetchUser(date.id_patient)
//       return {
//         ...date,
//         nombre_alumno: fetchPatient.nombre + ' ' + fetchPatient.apellido,
//         nombre_profesional: fetchDoctor.nombre + ' ' + fetchDoctor.apellido,
//         telefono_alumno: fetchPatient.telefono,
//         mail_alumno: fetchPatient.email,
//         genero_alumno: fetchPatient.genero
//       }
//     })
//     return Promise.all(obj).then(resp => callback(resp))
//   } catch (err) {
//     console.log(err)
//   }
// }

// export const fetchAppointment = async (id) => {
//   const data = await fetch(process.env.VITE_APPOINTMENTS_API + `/api/appintsimple/${id}`)
//   try {
//     const response = await data.json()
//     const fetchDoctor = await fetchUser(response.id_professional)
//     const fetchPatient = await fetchUser(response.id_patient)
//     return {
//       ...response,
//       nombre_alumno: fetchPatient.nombre,
//       apellido_alumno: fetchPatient.apellido,
//       nombre_profesional: fetchDoctor.nombre + ' ' + fetchDoctor.apellido,
//       telefono_alumno: fetchPatient.telefono,
//       mail_alumno: fetchPatient.email,
//     }
//   } catch (err) {
//     console.log(err)
//   }
// }

// export const createAppointment = async (appointment) => {
//   const APPOINMENT_URL = process.env.VITE_APPOINTMENTS_API + `/api/appointments`
//   try {
//     const body = {
//       profesional_id: appointment.doctor.id,
//       alumno_id: appointment.patient_id,
//       fecha: formatDate(appointment.appointment_date.$d),
//       hora: appointment.start_time.concat(':00'),
//       estado: "pendiente"
//     }

//     const data = await fetch(APPOINMENT_URL, {
//       method: "POST",
//       cors: "no-cors",
//       headers: {
//         'content-type': 'application/json',
//         'access-control-allow-origin': '*',
//         'ngrok-skip-browser-warning': 'any'
//       },
//       body: JSON.stringify(body)
//     })

//     return data.json()
//   } catch (err) {
//     console.log(err)
//   }
// }

// export const updateAppointment = async (appointment, id) => {
//   const APPOINMENT_URL = process.env.VITE_APPOINTMENTS_API + `/api/appointments/${id}`

//   try {
//     const body = {
//       "profesional_id": appointment.selected_doctor.id,
//       "alumno_id": appointment.patient_id,
//       "fecha": formatDate(appointment.appointment_date.$d),
//       "hora": appointment.start_time,
//       "estado": "pendiente"
//     }
//     const data = await fetch(APPOINMENT_URL, {
//       method: "PUT",
//       headers: {
//         'content-type': 'application/json',
//         'access-control-allow-origin': '*',
//         'ngrok-skip-browser-warning': 'any'
//       },
//       body: JSON.stringify(body)
//     })
//     return data
//   } catch (err) {
//     console.log(err)
//   }
// }

// // export const cancelAppointment = async (appointment, id) => {
// //   const APPOINMENT_URL = process.env.VITE_APPOINTMENTS_API + `/api/appointments/${id}`

// //   const body = {
// //     "profesional_id": appointment.selected_doctor.id,
// //     "alumno_id": appointment.patient_id,
// //     "fecha": formatDate(appointment.appointment_date.$d),
// //     "hora": appointment.start_time,
// //     "estado": "cancelada"
// //   }

// //   try {
// //     await fetch(APPOINMENT_URL, {
// //       method: 'PUT',
// //       headers: {
// //         'content-type': 'application/json',
// //         'access-control-allow-origin': '*',
// //         'ngrok-skip-browser-warning': 'any'
// //       },
// //       body: JSON.stringify(body)
// //     })
// //   } catch (err) {
// //     console.log(err)
// //   }
// // }

// export const changeStatusAppointment = async (id, status) => {
//   const APPOINMENT_URL = process.env.VITE_APPOINTMENTS_API + `/api/appointments/${id}`

//   try {
//     await fetch(APPOINMENT_URL, {
//       method: 'PATCH',
//       headers: {
//         'content-type': 'application/json',
//         'access-control-allow-origin': '*',
//         'ngrok-skip-browser-warning': 'any'
//       },
//       body: JSON.stringify({
//         "estado": status
//       })
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }

// export const search = (data, query) =>
//   data.filter(obj => JSON.stringify(obj).toLowerCase().includes(query.toLowerCase()))



// export const fetchAppointments = async (url) => {
//   try {
//     const data = await fetch(url, {
//       headers: {
//         'content-type': 'application/json',
//         'access-control-allow-origin': '*',
//         'ngrok-skip-browser-warning': 'any'
//       }
//     })
//     const response = await data.json()
//     return response
//   } catch (err) {
//     console.log(err)
//   }
// }

// export const fetchAppointment = async (id) => {
//   const APPOINMENT_API = process.env.VITE_APPOINTMENTS_API + `/api/appointments/${id}`

//   const data = await fetch(APPOINMENT_API, {
//     headers: {
//       'content-type': 'application/json',
//       'access-control-allow-origin': '*',
//       'ngrok-skip-browser-warning': 'any'
//     }
//   })
//   const response = await data.json()
//   return response
// }

  
import { fetchUser } from './UsersServices'
import { fetchDoctor } from './DoctorsServices';
import dayjs from 'dayjs';

export const createAppointment = async (appointment) => {
  const APPOINMENT_API = process.env.NEXT_PUBLIC_APPOINTMENTS_API
console.log('DAYSJS', dayjs(appointment.appointment_date.$d).format('YYYY-MM-DD'));
  const body = {
    profesional_id: appointment.doctor.id,
    alumno_id: appointment.patient_id,
    fecha: dayjs(appointment.appointment_date.$d).format('YYYY-MM-DD'),
    hora: appointment.start_time.concat(':00'),
    hora_fin: appointment.end_time.concat(':00'),
    estado: "pendiente"
  }

  try {
    const data = await fetch(APPOINMENT_API + '/api/appointments', {
      method: "POST",
      cors: "no-cors",
      headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
        'ngrok-skip-browser-warning': 'any'
      },
      body: JSON.stringify(body)
    })
    console.log(data)
    return data.json()
  } catch (err) {
    console.log(err)
  }
}

export const updateAppointment = async (appointment, id) => {
  const APPOINTMENT_API = process.env.NEXT_PUBLIC_APPOINTMENTS_API
console.log(appointment.appointment_date);
  const body = {
    "profesional_id": appointment.selected_doctor.id,
    "alumno_id": appointment.patient_id,
    "fecha": dayjs(appointment.appointment_date.$d).format('YYYY-MM-DD'),
    "hora": appointment.start_time,
    "hora_fin": appointment.end_time.concat(':00'),
    "estado": "pendiente"
  }
  try {
    const data = await fetch(APPOINTMENT_API + `/api/appointments/${id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
        'ngrok-skip-browser-warning': 'any'
      },
      body: JSON.stringify(body)
    })
    return data
  } catch (err) {
    console.log('ERROR', err)
  }
}

export const changeStatusAppointment = async (id, status) => {
  const APPOINMENT_API = process.env.NEXT_PUBLIC_APPOINTMENTS_API
  try {
    await fetch(APPOINMENT_API + `/api/appointments/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
        'ngrok-skip-browser-warning': 'any'
      },
      body: JSON.stringify({
        "estado": status
      })
    })
  } catch (err) {
    console.log(err)
  }
}

export const fetchAppointments = async (callback) => {
  try {
    const data = await fetch(process.env.NEXT_PUBLIC_APPOINTMENTS_API + '/api/appintsimple')
    // const data = await fetch(process.env.VITE_SHOW_APPOINTMENTS)
    const response = await data.json()
    response.forEach(element => {
      element['fecha_cita'] = element['fecha_cita'].slice(0, 10)
    });

    const obj = response.map(async date => {
      const doctor = await fetchDoctor(date.id_professional)
      const fetchPatient = await fetchUser(date.id_patient)
      return {
        ...date,
        nombre_alumno: fetchPatient.users[0].nombre + ' ' + fetchPatient.users[0].apellido,
        nombre_profesional: doctor.users[0].nombre + ' ' + doctor.users[0].apellido,
        telefono_alumno: fetchPatient.users[0].telefono,
        mail_alumno: fetchPatient.users[0].email,
        genero_alumno: fetchPatient.users[0].genero
      }
    })
    return Promise.all(obj).then(resp => callback(resp))
  } catch (err) {
    console.log(err)
  }
}

export const fetchAppointment = async (id) => {
  try {
    const data = await fetch(process.env.NEXT_PUBLIC_APPOINTMENTS_API + `/api/appintsimple/${id}`)
    const response = await data.json()
    const fetchDoctor = await fetchUser(response.id_professional)
    const fetchPatient = await fetchUser(response.id_patient)
    return {
      ...response,
      nombre_alumno: fetchPatient.nombre,
      apellido_alumno: fetchPatient.apellido,
      nombre_profesional: fetchDoctor.nombre + ' ' + fetchDoctor.apellido,
      telefono_alumno: fetchPatient.telefono,
      mail_alumno: fetchPatient.email,
    }
  } catch (err) {
    console.log(err)
  }
}

export const search = (data, query) => data.filter(obj => JSON.stringify(obj).toLowerCase().includes(query.toLowerCase()))