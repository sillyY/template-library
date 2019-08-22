/**
 * @description validate
 * @author sillyy
 */

 
export const valiName = (value, callback) => {
    if (value === '') {
      callback(new Error('请输入客户名称'))
    } else {
      callback()
    }
  }
  
  export const valiContact = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请输入联系人'))
    } else {
      callback()
    }
  }
  
  export const valiPhone = (value, callback) => {
    if (value === '') {
      callback(new Error('请输入联系方式'))
    } else if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(value)) {
      callback(new Error('请输入正确的手机号'))
    } else {
      callback()
    }
  }
  