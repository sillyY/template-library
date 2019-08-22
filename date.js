/**
 * @description public method
 * @author sillyy
 */

import momment from 'moment'

// 时间戳转换
export function toTimestamp(t) {
  return t && moment(t).valueOf()
}

// 日期格式转换
export function toDate(t) {
  return (t && moment(t).format('YYYY-MM-DD HH:mm:ss')) || t
}

// 获取当月1号00:00:00点时间戳
export function getCurrentMonth_First() {
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

// 获取此刻时间时间戳
export function getCurrentMonth_Last() {
  let date = moment()
  date.set('hour', date.hour())
  date.set('minute', date.minute())
  date.set('second', date.second())
  date.set('millisecond', date.millisecond())
  date.format('YYYY-MM-DD HH-mm-ss')
  return date.unix() * 1000
}

// 获取上月1号00:00:00时间戳
export function getPrevMonth_First() {
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

// 获取下月1号00:00:00时间戳
export function getNextMonth_First() {
  let start =
      moment()
        .subtract('month', -1)
        .format('YYYY-MM') + '-01',
    date = moment(start)
  date.set('hour', 0)
  date.set('minute', 0)
  date.set('second', 0)
  date.set('millisecond', 0)
  date.format('YYYY-MM-DD HH-mm-ss')
  return date.unix() * 1000
}

// 获取下月最后一天23:59:59时间戳
export function getNextMonth_Last() {
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

// 获取本周周一00:00:00时间戳
export function getCurrentWeek_First() {
  let week = moment().week()
  let start = moment().subtract(week, 'days'),
    date = moment(start)
  date.set('hour', 0)
  date.set('minute', 0)
  date.set('second', 0)
  date.set('millisecond', 0)
  date.format('YYYY-MM-DD HH-mm-ss')
  return date.unix() * 1000
}

// 获取上周周一00:00:00时间戳
export function getLastWeek_First() {
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

// 获取今天一天23:59:59时间戳
export function getCurrentWeek_Last() {
  let end = moment().format('YYYY-MM-DD'),
    date = moment(end)
  date.set('hour', 23)
  date.set('minute', 59)
  date.set('second', 59)
  date.set('millisecond', 999)
  date.format('YYYY-MM-DD HH-mm-ss')
  return date.unix() * 1000
}

// 获取距今某天某时某分某秒某毫秒的时间戳
export function getPrevDay(day, hour, minute, second, millisecond) {
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

// 获取今天某时某分某秒某毫秒的时间戳
export function getPrev(hour, minute, second, millisecond) {
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
