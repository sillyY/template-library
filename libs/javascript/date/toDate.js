/*
 * 日期格式转换
 */
export function toDate(t) {
  return (t && moment(t).format("YYYY-MM-DD HH:mm:ss")) || t;
}
