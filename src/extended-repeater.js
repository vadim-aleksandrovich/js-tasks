module.exports = repeater = (str, options) => {
  let add = "";
  let string = "";
  let addition = options.addition;
  const separator = options.separator || "+";
  const repeatTimes = options.repeatTimes || 1;
  const additionSeparator = options.additionSeparator || "|";
  const additionRepeatTimes = options.additionRepeatTimes || 1;

  str == null ? (str = "null") : str;
  addition === null ? (addition = "null") : null;
  addition == undefined ? (addition = "") : null;

  for (let i = 0; i < additionRepeatTimes - 1; i++) {
    add += addition + additionSeparator;
  }

  add += addition;
  string = str + add + separator;

  return string.repeat(repeatTimes - 1) + str + add;
};
