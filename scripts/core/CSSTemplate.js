class CSSTemplate {
  constructor() {
    this._state = 3;
    this._id = 0;
    this._fid = 0;
    this._template = [];
    this._language = "css";
    this._lan = "css"
  }
  get template() {
      return this._template
  }
  _push(obj) {
    Object.assign(obj, {
      state: this._state,
      id: ++this._id,
      fid: ++this._fid,
      language: this._language,
      lan: this._lan
    });
    this._template.push(obj);
  }
  add(name, args) {
    if (args && !args.length) return;

    if (args.length === 1) {
      this._push({
        name,
        category: "",
        slug: args[0].replace(`.${this._lan}`, "")
      });
    } else {
      this._push({
        name,
        category: args[0],
        slug: args[1].replace(`.${this._lan}`, "")
      });
    }
  }
}

module.exports = new CSSTemplate();
