# Template-library
Template(VSCode Extension)插件模板仓库
## 目录结构
```
| -- libs  
      | --- css  
            | --- category  
                  | --- [name].css
            | --- [name].css
      | --- javascript
            | --- category
                  | --- [name].js
            | ---- [name].js
      ·
      ·   [More]
      ·
```
## 文件格式
文件第二行表示：文件描述, 必填 ❗❗❗
```
// 比如
/*
 * 日期格式转换 // 这里填写文件描述 ❗❗❗
 */
export function toDate(t) {
  return (t && moment(t).format("YYYY-MM-DD HH:mm:ss")) || t;
}
```
## Scripts
```bash
npm run build - 生成template.json文件
```
