module.exports = function check(str, bracketsConfig) {
    let flatBracket = bracketsConfig.flat();
    let openingBrackets = [];
    let closingBrackets = [];
    for (let i = 0; i < flatBracket.length; i++) {
        if (i % 2 == 0 || i == 0) {
            openingBrackets.push(flatBracket[i]);
        } else if (i % 2 != 0) {
            closingBrackets.push(flatBracket[i]);
        }
    }

    let newStr = str.split('');
    for (let j = 0; j < newStr.length; j++) {
        for (let k = 0; k < openingBrackets.length; k++) {
            if (newStr[j] == openingBrackets[k]) {
                if (newStr[j + 1] == closingBrackets[k]) {
                    newStr.splice(j, 2);
                    j = -1;
                } else if (newStr[j + 1] == undefined) {
                    return false;
                }
            } else if (newStr[0] == closingBrackets) {
                return false;
            }
        }
    }
    console.log(newStr);

    if (newStr.length == 0) {
        return true;
    } else {
        return false;
    }
};