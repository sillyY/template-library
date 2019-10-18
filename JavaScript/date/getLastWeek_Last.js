// 获取上周最后一天时间戳
export function getLastWeek_Last() {
  let week = moment().week()
  let end = moment().subtract(week + 1, 'days'),
    date = moment(end)
  date.set('hour', 23)
  date.set('minute', 59)
  date.set('second', 59)
  date.set('millisecond', 999)
  date.format('YYYY-MM-DD HH-mm-ss')
  return date.unix() * 1000
}
