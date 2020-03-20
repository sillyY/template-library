const file = require("./utils/file");
const createFactory = require("./core/index");
const cssTemplate = require("./core/CSSTemplate");
const jsTemplate = require("./core/JSTemplate");

function getProperty(path) {
  const data = file.data(path);
  return pickComments(data);
}

function pickComments(data) {
  let result = {};

  const list = data.match(/\/\*(.|\n)*\*\//g);

  if (list.length) {
    list[0].match(/(\@.+?)(\n)/g).forEach(item => {
      item = item.substr(1); // 移除@
      let entries = item.split(":");
      result[entries[0].trim()] = entries[1].trim();
    });
  }
  return result;
}

async function build() {
  // TODO: 后续引入chalk来改进
  const files = await file.readDir(file.homeDir());
  let chain = [];

  for (let file of files) {
    const property = getProperty(file);
    chain.push(property);
  }

  file.write(file.configDir(), JSON.stringify(chain));

  console.log("执行完毕");
}

build();
