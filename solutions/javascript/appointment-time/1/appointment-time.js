
export function createAppointment(days, now = undefined) {
  if (now === undefined) {
    let ms = Date.now()
    let now = new Date(ms)
    let actualDay = now.getDate()
    now.setDate(actualDay + days)
    return now
  }else{
    let appointment = new Date(now)
    let actualDay = appointment.getDate()
    appointment.setDate(actualDay + days)
    return appointment
  }
}

export function getAppointmentTimestamp(appointmentDate) {
  appointmentDate = appointmentDate.toISOString()
  return appointmentDate
}

export function getAppointmentDetails(timestamp) {
  timestamp = new Date(timestamp)
  const easyRead = {
    year: timestamp.getFullYear(),
    month: timestamp.getMonth(),
    date : timestamp.getDate(),
    hour: timestamp.getHours(),
    minute: timestamp.getMinutes(),
  }
  return easyRead
}

export function updateAppointment(timestamp, options) {
  let keys = Object.keys(options)
  let values = Object.values(options)
  let time = getAppointmentDetails(timestamp)
  for (let i = 0; i<= keys.length - 1; i++){
    time[keys[i]] = values[i]
  }
  if(time['hour'] === 24 && time['minute'] === 60){
    time['date'] += 1
    time['hour'] = 1
    time['minute'] = 0
  }
  if(time['month'] === 1 && time['date'] === 29){
    time['month'] += 1
    time['date'] = 1
  }
  return time
}

export function timeBetween(timestampA, timestampB) {
  timestampA = new Date(timestampA)
  timestampB = new Date(timestampB)
  if (timestampA.getMilliseconds() !== 0) {
    timestampA.setSeconds(timestampA.getSeconds() + 1)
    timestampA.setMilliseconds(0)
  }
  if (timestampB.getMilliseconds() !== 0) {
    timestampB.setSeconds(timestampB.getSeconds() + 1)
    timestampB.setMilliseconds(0)
  }
  let timeA = timestampA.getTime()
  let timeB = timestampB.getTime()
  if (timeA > timeB) {
    let operation = timeA - timeB
    operation = operation.toString()
    operation = operation.slice(0, operation.length - 3 )
    return parseInt(operation)
  } else {
    let operation = timeB - timeA
    operation = operation.toString()
    operation = operation.slice(0, operation.length - 3 )
    return parseInt(operation)
  }
}

export function isValid(appointmentTimestamp, currentTimestamp) {
  currentTimestamp = new Date(currentTimestamp)
  appointmentTimestamp = new Date(appointmentTimestamp)
  let timeA = currentTimestamp.getTime()
  let timeB = appointmentTimestamp.getTime()
  if (timeA < timeB) {
    console.log(true)
    return true
  }else{
    console.log(false)
    return false
  }
}