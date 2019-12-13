const file = require("../utils/file");

class CSSTemplate {
  constructor() {
    this._state = 2;
    this._id = 0;
    this._template = [];
    this._language = "css";
    this._extname = ".css";
  }
  get template() {
    return this._template;
  }
  _push(obj) {
    Object.assign(obj, {
      state: this._state,
      id: ++this._id,
      language: this._language,
      extname: this._extname
    });
    this._template.push(obj);
  }
  add(description, args) {
    if (args && !args.length) return;

    if (args.length === 1) {
      this._push({
        name: file.basename(args[0]),
        category: "",
        description
      });
    } else {
      this._push({
        name: file.basename(args[1]),
        category: args[0],
        description
      });
    }
  }
}

module.exports = new CSSTemplate();
