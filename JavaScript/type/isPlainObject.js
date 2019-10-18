// 是否是纯对象
export function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]'
}
