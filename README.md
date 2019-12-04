<!--
 * @Author: your name
 * @Date: 2019-11-27 13:45:01
 * @LastEditTime: 2019-12-03 21:35:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /template-library/README.md
 -->
## 项目需求
开发一个解析工具，要求读取 libs 的文件内容，生成一个 json 文件

### 项目前景
需要配合Template[VSCODE插件]开发，需要模板json文件, 故需要开发该工具

### JSON 文件格式
```json
[
  {
    "state": "None",
    "id": 1,
    "fid": "1",
    "name": "重置css样式", // 考虑规范libs中文件注释，从指定位置注释获取
    "slug": "css-reset", // 函数名
    "category": "", // 文件名
    "language": "css" // 文件名
  },
  {
    "state": "None",
    "id": 1,
    "fid": "1",
    "name": "转数组",
    "slug": "to-array",
    "category": "type",
    "language": "javascript"
  },
  {
    "state": "None",
    "id": 2,
    "fid": "2",
    "name": "转数字",
    "slug": "to-number",
    "category": "type",
    "language": "javascript"
  }
  // 省略...
]
```
> 可适当修改文件名或文件夹名，以及文件层级顺序

### 功能需求
- 支持读取文件名，并生成指定json文件
- 创建新的lib（library： 库）, 调用方法，可以更新成新的json

### 技术需求
- 要求模块化、
- 要求函数式编程，有条件可以尝试面向对象编程

### 可用npm包
- [chalk](https://www.npmjs.com/package/chalk) - 终端样式化、可控制终端字体大小、颜色等
- [fs-extra](https://www.npmjs.com/package/fs-extra) - 文件系统操作

> 剩下的想用啥, 自己去[npm](https://www.npmjs.com/)找



