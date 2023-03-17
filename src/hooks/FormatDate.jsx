import * as dayjs from 'dayjs'

export default function FormatDate(date) {
  if(typeof date == 'string') {
    return dayjs(date).format('DD/MM/YYYY');
  } else {
    null
  }
}