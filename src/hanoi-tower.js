const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
const numberTurns = Math.pow(2, disksNumber) - 1;
const numberSeconds = Math.floor((numberTurns * 3600) / turnsSpeed);
return {turns: numberTurns, seconds: numberSeconds}
};
