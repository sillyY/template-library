// 获取上月1号00:00:00时间戳
export function getPrevMonth_first() {
  let start =
      moment()
        .subtract('month', 1)
        .format('YYYY-MM') + '-01',
    date = moment(start)
  date.set('hour', 0)
  date.set('minute', 0)
  date.set('second', 0)
  date.set('millisecond', 0)
  date.format('YYYY-MM-DD HH-mm-ss')
  return date.unix() * 1000
}
