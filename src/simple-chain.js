const CustomError = require("../extensions/custom-error");

const chainMaker = {
  box: [],
  getLength() {
    return this.box.length;
  },
  addLink(value) {
    typeof value == "undefined"
      ? this.box.push(`(  )`)
      : this.box.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this.box[position] == undefined) {
      this.box = [];
      throw CustomError("Not implemented");
    } else this.box.splice(position - , 1);

    return this;
  },
  reverseChain() {
    this.box.reverse();
    return this;
  },
  finishChain() {
    let finish = "";
    finish = this.box.join("~~");
    this.box = [];
    return finish;
  },
};

module.exports = chainMaker;
