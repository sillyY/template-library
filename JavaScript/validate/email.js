export const valiPhone = (value, callback) => {
  if (value === '') {
    callback(new Error('请输入邮箱'))
  } else if (
    !/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
  ) {
    callback(new Error('请输入正确的手机号'))
  } else {
    callback()
  }
}
