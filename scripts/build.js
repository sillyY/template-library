const file = require("./utils/file");
const path = require("path");

function getProperty(path) {
  let result;
  const data = file.data(path);
  
  result = pickComments(data);
  result.name = path.basename(file);
  result.content = data;
  return result;
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
