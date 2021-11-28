const sumAll = function(fromValue, toValue) {
    let returnSum = 0;

    // No negative numbers allowed
    if (fromValue < 0 || toValue < 0) {
        return "ERROR";
    }
        
    // No non-number allowed
    if (typeof fromValue != "number" || typeof toValue != "number") {
        return "ERROR";
    }

    if (toValue < fromValue) {
        for (let i = toValue; i <= fromValue; i++) {
            returnSum += i;
        }
    } else {
        for (let i = fromValue; i <= toValue; i++) {
            returnSum += i;
        }
    }
    return returnSum;
};

// Do not edit below this line
module.exports = sumAll;
