export function getToday(hour, minute, second, millisecond) {
    let d = moment()
        .add('days')
        .format('YYYY-MM-DD'),
      date = moment(d)
    date.set('hour', hour)
    date.set('minute', minute)
    date.set('second', second)
    date.set('millisecond', millisecond)
    date.format('YYYY-MM-DD HH-mm-ss')
    return date.unix() * 1000
  }