/*
 * 是否是正则
 */
const _toString = Object.prototype.toString;
export function isRegExp(v) {
  return _toString.call(v) === "[object RegExp]";
}
