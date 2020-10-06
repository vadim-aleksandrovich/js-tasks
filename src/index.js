// prettier-ignore
module.exports = function toReadable(number) {
    let numbers = {
        0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five",
        6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven",
        12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen",
        16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen",
        20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty",
        70: "seventy", 80: "eighty", 90: "ninety",
    };

    const str = number.toString();
    const hundredRes = numbers[str[0]] + " hundred ";
    const tenIndex = number - str[0] * 100; //Получаем из abc bc
    const tenRes = numbers[str[1] * 10];

    let result;

    if (str <= 20) {
        result = numbers[number];
        return result;
    }

    if (str.length == 2 && str > 20) {
        number % 10 == 0 ? (result = numbers[str[0] * 10]) :
        result = numbers[str[0] * 10] + " " + numbers[str[1]];
        return result;
    }

    if (str.length == 3) {
        if (number % 100 == 0) {
            result = numbers[str[0]] + " hundred";
            return result;
        }
        if (str[1] * 10 < 20) {
            result = hundredRes + numbers[tenIndex];
            return result;
        } else {
            number % 10 == 0 ? result = hundredRes + tenRes :
            result = hundredRes + tenRes + " " + numbers[str[2]];
            return result;
        }
    }
};
