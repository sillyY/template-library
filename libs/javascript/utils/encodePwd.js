// 密码加密
export function encodePwd(str) {
    let out = ''
    for (let c of str) {
      out += c.charCodeAt(0) - 23
    }
    return out
  }