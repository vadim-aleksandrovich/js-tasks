module.exports = check = (str, bracketsConfig) => {
    let newArray = bracketsConfig.map((item) => item.join(""));
    for (let i = 0; i < newArray.length; i++) {
        if (str.includes(newArray[i])) {
            str = str.replace(newArray[i], "");
            i = -1;
        }
    }
    return str.length === 0;
};
