/*
 * 异步处理机制
 */
export async function errorCaptured(asyncFunc, params) {
  try {
    let res = await asyncFunc(params);
    return [res, null];
  } catch (e) {
    return [null, e];
  }
}
