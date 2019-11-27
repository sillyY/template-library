// 获取当月1号00:00:00点时间戳
export function getCurrentMonth_first() {
  let now = moment(),
    year = now.year(),
    month = now.month() + 1,
    date = moment(new Date(`${year}-${month}-1`))
  date.set('hour', 0)
  date.set('minute', 0)
  date.set('second', 0)
  date.set('millisecond', 0)
  date.format('YYYY-MM-DD HH-mm-ss')
  return date.unix() * 1000
}
