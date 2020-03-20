/*
 * @title: extend
 * @description: 继承某个对象的值
 * @source: Vue源码
 */
export function extend(to, _from) {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
}
