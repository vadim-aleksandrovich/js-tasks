const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  return date == undefined
    ? "Unable to determine the time of year!"
    : isNaN(date.getTime())
    ? new CustomError("Not implemented")
    : date.getMonth() <= 1 || date.getMonth() == 11
    ? "winter"
    : date.getMonth() >= 2 && date.getMonth() <= 4
    ? "spring"
    : date.getMonth() >= 5 && date.getMonth() <= 7
    ? "summer"
    : date.getMonth() >= 8 && date.getMonth() <= 10
    ? "fall"
    : false;
};
