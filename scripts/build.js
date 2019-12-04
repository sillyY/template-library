/*
 * @Author: your name
 * @Date: 2019-11-27 13:46:08
 * @LastEditTime: 2019-12-03 23:08:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /template-library/scripts/build.js
 */
const file = require("./utils/file");
const createFactory = require("./core/index");
const cssTemplate = require("./core/CSSTemplate");
const jsTemplate = require("./core/JSTemplate");

async function build() {
  const files = await file.readDir(file.homeDir());

  for (let file of files) {
    createFactory(file);
  }
  let chain = [];
  cssTemplate.template.forEach(item => chain.push(item));
  jsTemplate.template.forEach(item => chain.push(item));

  file.write(file.configDir(), JSON.stringify(chain)); 
}

build();
