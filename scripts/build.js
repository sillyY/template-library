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
