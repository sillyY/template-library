// search解析
export function getSearch() {
  var search = window.location.search,
    secArr = [],
    secObj = {}

  if (!search) return null
  search = search.substr(1)
  secArr = search.split('&')

  for (var i = 0, len = secArr.length; i < len; i++) {
    if (!secArr[i].trim()) continue
    secObj[secArr[i].split('=')[0]] = secArr[i].split('=')[1]
  }

  return secObj
}
