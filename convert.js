/**
 * @description convert data
 * @author sillyy
 */

// 将值转成字符串
export function toString(val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString) // 来自check.js文件
    ? JSON.stringify(val, null, 2)
    : String(val)
}

// 将转转成数字
export function toNumber(val) {
  const n = parseFloat(val)
  return isNaN(n) ? val : n
}

// 将一个类数组对象转成真正的数组
export function toArray(list, start) {
  start = start || 0
  let i = list.length - start
  const ret = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return ret
}

// 继承某个对象的值
export function extend(to, _from) {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}

// 将对象数组合并成单个对象
export function toObject(arr) {
  const res = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      this.extend(res, arr[i])
    }
  }
  return res
}
