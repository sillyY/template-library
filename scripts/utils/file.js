const path = require("path");
const fs = require("fs");
const readDir = require("readdir");

const file = {};

file.projectHomeDir = function() {
  return process.cwd();
};
file.homeDir = function() {
  return path.join(file.projectHomeDir(), "./sources");
};
file.configDir = function() {
  return path.join(file.projectHomeDir(), "./config.json");
};
file.basename = function(fullpath) {
  return path.basename(fullpath, path.extname(fullpath));
};
file.readDir = function(path) {
  let result = readDir.readSync(path, null, readDir.ABSOLUTE_PATHS);
  return result.filter(item => !item.includes(".DS_Store"));
};
file.write = function(fullpath, data) {
  return fs.writeFileSync(fullpath, data);
};
file.data = function(fullpath) {
  return fs.existsSync(fullpath) ? fs.readFileSync(fullpath).toString() : null;
};
file.readComment = function(data) {
  return data
    .split("\n")[1]
    .replace("*", "")
    .trim();
};

module.exports = file;
