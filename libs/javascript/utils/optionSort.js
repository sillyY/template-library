/*
 * 传参空值过滤
 */

export function optionSort(opt) {
  let obj = {};

  if (typeof opt === "object") {
    for (let k in opt) {
      if (opt[k] !== null && opt[k] !== "") {
        obj[k] = opt[k];
      }
    }
  } else {
    obj = opt;
  }

  return obj;
}
