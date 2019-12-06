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
