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

export const createSchedule = async (schedule) => {
  const SCHEDULES_URL = process.env.NEXT_PUBLIC_SCHEDULES_API + `/api/schedules`

  const data = await fetch(SCHEDULES_URL, {
    method: "POST",
    cors: "no-cors",
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

  return data.json()
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
