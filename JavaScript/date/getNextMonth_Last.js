// 获取下月最后一天23:59:59时间戳
export function getNextMonth_last() {
  let start =
      moment()
        .subtract('month', -1)
        .format('YYYY-MM') + '-01', // 下月第一天
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
