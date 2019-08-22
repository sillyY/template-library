/**
 * @description check data types
 * @author sillyy
 */
const _toString = Object.prototype.toString

// 检查值是否无效值
export function isUndef(v) {
  return v === undefined || v === null
}

// 检测值是否为有效值
export function isDef(v) {
  return v !== undefined && v !== null
}

// 检测值是否为true(===)
export function isTrue(v) {
  return v === true
}

// 检测值是否为false(===)
export function isFalse(v) {
  return v === false
}

// 是否是基本数据类型
export function isPrimitive(value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

// 是否是有效对象
export function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

// 是否是纯对象
export function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]'
}

// 是否是正则
export function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]'
}

// 是否是Promise
export function isPromise(val) {
  return (
    this.isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

// 获取值的原始类型
export function toRawType(value) {
  return _toString.call(value).slice(8, -1)
}

// 对象中是否存在某个key
export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key)
}
