/*
 * @Author: your name
 * @Date: 2019-12-03 21:22:09
 * @LastEditTime: 2019-12-03 22:58:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /template-library/scripts/core/index.js
 */
const file = require("../utils/file");
const cssTemplate = require("./CSSTemplate");
const jsTemplate = require("./JSTemplate");

function createFactory(path) {
  const value = path.replace(file.homeDir() + "/", "").split("/"),
    [language, ...rest] = value;
  switch (language) {
    case "css":
      cssTemplate.add(file.readComment(file.data(path)), rest);
      break;
    case "javascript":
      jsTemplate.add(file.readComment(file.data(path)), rest);
      break;
    default:
      break;
  }
}

module.exports = createFactory;
