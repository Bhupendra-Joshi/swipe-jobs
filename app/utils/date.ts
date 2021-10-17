import dayjs from 'dayjs'
import 'dayjs/locale/en-ca'

dayjs.locale('en-ca')

export const DATE_FORMAT = {
  'MMM_d_ddd_h_mm': 'MMM D, ddd h:mm',
  'hh_mm': 'hh:mm A'
}

export const formatDate = (inputDate:string, format = DATE_FORMAT.MMM_d_ddd_h_mm) => {
  return dayjs(inputDate).format(format)
}

export const formatDateRange = (startDateTime:string, endDateTime:string) => {
  const start = dayjs(startDateTime)
  const end = dayjs(endDateTime)

  const formattedStartDate = formatDate(startDateTime).toUpperCase()
  const formattedEndDate = start.day() === end.day()
    ? formatDate(endDateTime, DATE_FORMAT.hh_mm).toUpperCase()
    : formatDate(endDateTime).toUpperCase()

  return `${formattedStartDate} - ${formattedEndDate} PDT`
}
