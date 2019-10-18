// 获取距今某天某时某分某秒某毫秒的时间戳
export function getFromToday(day, hour, minute, second, millisecond) {
  let d = moment()
      .add(day, 'days')
      .format('YYYY-MM-DD'),
    date = moment(d)
  date.set('hour', hour)
  date.set('minute', minute)
  date.set('second', second)
  date.set('millisecond', millisecond)
  date.format('YYYY-MM-DD HH-mm-ss')
  return date.unix() * 1000
}
