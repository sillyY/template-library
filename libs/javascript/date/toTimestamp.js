/*
 * 时间戳转换
 */
export function toTimestamp(t) {
  return t && moment(t).valueOf();
}
