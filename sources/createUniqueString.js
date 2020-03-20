/*
 * @title: createUniqueString
 * @description: 创建唯一字符串
 * @source: 未知
 */
export function createUniqueString() {
  const timestamp = +new Date() + "";
  const randomNum = parseInt((1 + Math.random()) * 65536) + "";
  return (+(randomNum + timestamp)).toString(32);
}
