// import { fetchUsers } from "./UsersServices"

// const doctorList = arr => arr.map(user => user.id)

export const fetchSchedules = async () => {
  const SCHEDULES_URL = process.env.NEXT_PUBLIC_SCHEDULES_API + `/api/schedules`
  // const doctors = await fetchUsers(SCHEDULES_URL)

  // const docList = doctorList(doctors)
  // console.log('doclist', docList);

  const fetchData = await fetch(SCHEDULES_URL, {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })

  const data = await fetchData.json()

  return data
}

export const fetchSchedule = async (id) => {
  const SCHEDULES_URL = process.env.NEXT_PUBLIC_SCHEDULES_API + `/api/schedules/${id}`

  const data = await fetch(SCHEDULES_URL, {
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })
  return data.json()
}


export const fetchScheduleByUser = async (id) => {
  const SCHEDULES_URL = process.env.NEXT_PUBLIC_SHOW_30_DAYS
  const body = {
    usuario_id: id
  }
  const data = await fetch(SCHEDULES_URL, {
    method: "POST",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
    },
    body: JSON.stringify(body)
  })
  return data.json()
}

export const fetchScheduleByDate = async (id, date) => {
  const SCHEDULES_URL = process.env.NEXT_PUBLIC_SHOW_SCHEDULE_BY_DATE;
  const body = {
    usuario_id: id,
    fecha: date
  }
  const data = await fetch(SCHEDULES_URL, {
    method: "POST",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*'
    },
    body: JSON.stringify(body)
  })
  return data.json()
}

export const fetchScheduleByAvailability = async (id) => {
  const SCHEDULES_URL = process.env.NEXT_PUBLIC_SHOW_DISPONIBILIDADES;
  const body = {
    id_user: id
  }
  console.log('body', body);
  const data = await fetch(SCHEDULES_URL, {
    method: "POST",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*'
    },
    body: JSON.stringify(body)
  })
   const response = await data.json()
   return response
}

const recurrencia = (obj) => {
  if (obj.frecuencia === "diaria") {
    if (obj.diaria.tipo === "recurrente") {
      return obj.diaria.recurrencia
    } else {
      return "1"
    }
  } else if (obj.frecuencia === "semanal") {
    return obj.semanal.recurrencia
  } else if (obj.frecuencia === "mensual") {
    if (obj.mensual.tipo === "cardinal") {
      return obj.mensual["cardinal-frecuencia"]
    } else {
      return obj.mensual["ordinal-frecuencia"]
    }
  } else {
    return ""
  }
}

export const createSchedule = (schedule) => {
  // const SCHEDULES_URL = process.env.NEXT_PUBLIC_SCHEDULES_API + `/api/schedules`
  const body = {
    'tipo': 'profesional',
    'día': schedule.frecuencia === "semanal" ? schedule.semanal.dia
      : schedule.frecuencia === "mensual" ? schedule.mensual["ordinal-dia"]
        : " ",
    'fechaInicio': schedule.fechaInicio,
    'fechaFin': schedule.fechaFin,
    'repeticiones': schedule.repeticiones,
    'horaIni': schedule.horaIni,
    'horaFin': schedule.horaFin,
    'modalidad': schedule.modalidad,
    'frecuencia': schedule.frecuencia,
    "recurrencia": recurrencia(schedule),
    'id_user': schedule.id_user,
    "orden": schedule?.mensual?.["ordinal-orden"] || " "
  }

  console.log('BODY', body)
  // const data = await fetch(SCHEDULES_URL, {
  //   method: "POST",
  //   cors: "no-cors",
  //   headers: {
  //     'content-type': 'application/json',
  //     'access-control-allow-origin': '*',
  //     'ngrok-skip-browser-warning': 'any'
  //   },
  //   body: JSON.stringify({
  //     "usuario_id": schedule.user_id,
  //     "dia_semana": schedule.day,
  //     "hora_inicio": schedule.start_time,
  //     "hora_fin": schedule.end_time
  //   })
  // })

  // return data.json()
}

export const updateSchedule = async (schedule, id) => {
  const SCHEDULES_URL = process.env.NEXT_PUBLIC_SCHEDULES_API + `/api/schedules/${id}`

  const data = await fetch(SCHEDULES_URL, {
    method: "PUT",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    },
    body: JSON.stringify({
      "usuario_id": schedule.user_id,
      "dia_semana": schedule.day,
      "hora_inicio": schedule.start_time,
      "hora_fin": schedule.end_time
    })
  })
  return data
}


export const deleteSchedule = async (id) => {
  const SCHEDULES_URL = process.env.NEXT_PUBLIC_SCHEDULES_API + `/api/schedules/${id}`
  const data = await fetch(SCHEDULES_URL, {
    method: "DELETE",
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*',
      'ngrok-skip-browser-warning': 'any'
    }
  })
  return data.json()
}



export const getSpecialities = async () => {
  const SPECIALITIES = process.env.NEXT_PUBLIC_ESPECIALIDADES;
  try {
    const data = await fetch(SPECIALITIES, {
      headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
        'ngrok-skip-browser-warning': 'any'
      }
    })
    return data.json()
  } catch (error) {
    console.log('Error: ', error)
  }
}