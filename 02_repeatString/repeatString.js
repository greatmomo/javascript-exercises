const repeatString = function(inputString, inputNum) {
    if (inputNum < 0) {
        return `ERROR`;
    }
    let outputString = ``;
    for (let i = 0; i < inputNum; i++) {
        outputString += inputString;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
