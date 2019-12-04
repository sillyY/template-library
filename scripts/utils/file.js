/*
 * @Author: your name
 * @Date: 2019-11-27 13:52:16
 * @LastEditTime: 2019-12-03 22:58:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /template-library/scripts/utils/file.js
 */
const path = require("path");
const fs = require("fs")
const readDir = require("readdir");

const file = {};

file.projectHomeDir = function() {
  return process.cwd();
};
file.homeDir = function() {
  return path.join(file.projectHomeDir(), "./libs");
};
file.configDir = function() {
    return path.join(file.projectHomeDir(), './template.json')
}
file.readDir = function(path) {
  return readDir.readSync(path, null, readDir.ABSOLUTE_PATHS);
};
file.write = function(fullpath, data) {
    return fs.writeFileSync(fullpath, data);
  };
file.data = function(fullpath) {
  return fs.existsSync(fullpath) ? fs.readFileSync(fullpath).toString() : null;
};
file.readComment = function(data) {
    return data.split('\n')[1].replace('*', '').trim()
};

module.exports = file;