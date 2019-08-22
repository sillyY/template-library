/**
 * @description public method
 * @author sillyy
 */
// 传参空值过滤
export function optionSort(opt) {
  let obj = {}

  if (typeof opt === 'object') {
    for (let k in opt) {
      if (opt[k] !== null && opt[k] !== '') {
        obj[k] = opt[k]
      }
    }
  } else {
    obj = opt
  }

  return obj
}

// 密码加密
export function encodePwd(str) {
  let out = ''
  for (let c of str) {
    out += c.charCodeAt(0) - 23
  }
  return out
}

// 创建唯一字符串
export function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}

// search解析
export function getSearch() {
  var search = window.location.search,
    secArr = [],
    secObj = {}

  if (!search) return null
  search = search.substr(1)
  secArr = search.split('&')

  for (var i = 0, len = secArr.length; i < len; i++) {
    if (!secArr[i].trim()) continue
    secObj[secArr[i].split('=')[0]] = secArr[i].split('=')[1]
  }

  return secObj
}

// 确保一个函数只执行一次
export function once(fn) {
  let called = false
  return function() {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}
