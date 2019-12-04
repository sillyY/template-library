/*
 * 是否是纯对象
 */
const _toString = Object.prototype.toString;
export function isPlainObject(obj) {
  return _toString.call(obj) === "[object Object]";
}
