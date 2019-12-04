/*
 * 获取值的数据类型
 */
const _toString = Object.prototype.toString;
export function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}
