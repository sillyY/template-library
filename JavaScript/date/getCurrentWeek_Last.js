// 获取今天一天23:59:59时间戳
export function getCurrentWeek_last() {
  let end = moment().format('YYYY-MM-DD'),
    date = moment(end)
  date.set('hour', 23)
  date.set('minute', 59)
  date.set('second', 59)
  date.set('millisecond', 999)
  date.format('YYYY-MM-DD HH-mm-ss')
  return date.unix() * 1000
}
