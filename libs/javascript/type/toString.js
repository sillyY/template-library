/*
 * 将值转成字符串
 */
// 是否是纯对象
const _toString = Object.prototype.toString;
export function isPlainObject(obj) {
  return _toString.call(obj) === "[object Object]";
}

// 将值转成字符串
export function toString(val) {
  return val == null
    ? ""
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString) // 来自check.js文件
    ? JSON.stringify(val, null, 2)
    : String(val);
}
