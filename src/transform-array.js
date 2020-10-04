const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const newArr = [];
  if (!Array.isArray(arr)) throw Error();

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-prev":
        if (i > 0 && arr[i - 2] != "--discard-next") newArr.pop();
        break;
      case "--discard-next":
        if (arr[i + 1] !== undefined) i++;
        break;
      case "--double-prev":
        if (i > 0 && arr[i - 2] != "--discard-next") newArr.push(arr[i - 1]);
        break;
      case "--double-next":
        if (arr[i + 1] !== undefined) newArr.push(arr[i + 1]);
        break;
      default:
        newArr.push(arr[i]);
    }
  }
  return newArr;
};
