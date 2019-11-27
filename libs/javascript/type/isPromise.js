// 是否是Promise
export function isPromise(val) {
  return (
    this.isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}
