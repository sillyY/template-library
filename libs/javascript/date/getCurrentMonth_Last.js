// 获取此刻时间时间戳
export function getCurrentMonth_last() {
  let date = moment()
  date.set('hour', date.hour())
  date.set('minute', date.minute())
  date.set('second', date.second())
  date.set('millisecond', date.millisecond())
  date.format('YYYY-MM-DD HH-mm-ss')
  return date.unix() * 1000
}
