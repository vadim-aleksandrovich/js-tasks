module.exports = function toReadable(number) {
    let result;
    let str = number.toString();
    let numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    if (str <= 20) {
        result = numbers[number];
        return result;
    }
    
    if (str.length == 2 && str > 20) {
        number % 10 == 0
            ? (result = numbers[str[0] * 10])
            : (result = numbers[str[0] * 10] + " " + numbers[str[1]]);
        return result;
    }

    if (str.length == 3) {
        let hundred = str[0];
        let hundredRes = numbers[str[0]] + " hundred ";
        let tens = str[1];

        if (number % 100 == 0) {
            result = numbers[str[0]] + " hundred";
            return result;
        }
        if (tens * 10 < 20) {
            let tenResMin = number - hundred * 100;
            result = hundredRes + numbers[tenResMin];
            return result;
        } else {
            number % 10 == 0
                ? (result = hundredRes + numbers[str[1] * 10])
                : (result =
                      hundredRes +
                      numbers[str[1] * 10] +
                      " " +
                      numbers[str[2]]);
            +numbers[str[1] * 10] + " " + numbers[str[2]];
            return result;
        }
    }
};
