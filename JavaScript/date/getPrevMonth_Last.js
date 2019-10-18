// 获取上月最后一天23:59:59时间戳
export function getPrevMonth_Last() {
  let start =
      moment()
        .subtract('month', 1)
        .format('YYYY-MM') + '-01',
    end = moment(start)
      .subtract('month', -1)
      .add('days', -1)
      .format('YYYY-MM-DD'),
    date = moment(end)
  date.set('hour', 23)
  date.set('minute', 59)
  date.set('second', 59)
  date.set('millisecond', 999)
  date.format('YYYY-MM-DD HH-mm-ss')
  return date.unix() * 1000
}
