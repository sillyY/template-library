class CSSTemplate {
  constructor() {
    this._state = "None";
    this._id = 0;
    this._fid = 0;
    this._template = [];
    this._language = "css";
  }
  get template() {
      return this._template
  }
  _push(obj) {
    Object.assign(obj, {
      state: this._state,
      id: ++this._id,
      fid: ++this._fid,
      language: this._language
    });
    this._template.push(obj);
  }
  add(name, args) {
    if (args && !args.length) return;

    if (args.length === 1) {
      this._push({
        name,
        categroy: "",
        slug: args[0].replace(`.${this._lang}`, "")
      });
    } else {
      this._push({
        name,
        categroy: args[0],
        slug: args[1].replace(`.${this._lang}`, "")
      });
    }
  }
}

module.exports = new CSSTemplate();
