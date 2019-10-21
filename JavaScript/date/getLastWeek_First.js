// 获取上周周一00:00:00时间戳
export function getLastWeek_first() {
  let week = moment().week()
  let start = moment().subtract(week + 7, 'days'),
    date = moment(start)
  date.set('hour', 0)
  date.set('minute', 0)
  date.set('second', 0)
  date.set('millisecond', 0)
  date.format('YYYY-MM-DD HH-mm-ss')
  return date.unix() * 1000
}
