import { Message } from 'element-ui'

// 异步处理方案
export async function errorCapture(asyncFunc, params) {
  try {
    let res = await asyncFunc(params)
    return [res, null]
  } catch (e) {
    return [null, e]
  }
}

export async function fetch(asyncFunc, params) {
  let [res, err] = await errorCapture(asyncFunc, params)
  if (err) {
    Message({
      message: error.response || '系统异常',
      type: 'error',
      duration: 5 * 1000
    })
  }
  if(!res.data.success) {
    Message({
        message: res.data.message || '系统异常',
        type: 'error',
        duration: 5 * 1000
      })
  }else {
      return res.data.data
  }
}
