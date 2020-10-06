const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, arrDepth = [], countDepth = 1) {
    arrDepth.push(countDepth);
    for (let element of arr) {
      Array.isArray(element) ? this.calculateDepth(element, arrDepth, countDepth + 1) : 0;
    }
    return Math.max(...arrDepth);
  }
};
