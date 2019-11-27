// 将转转成数字
export function toNumber(val) {
    const n = parseFloat(val)
    return isNaN(n) ? val : n
  }
  