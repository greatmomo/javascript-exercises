const leapYears = function(inputYear) {
    // 400 is true
    // 100 is false
    // 4 is true
    if (inputYear % 400 == 0) {
        return true;
    } else if (inputYear % 100 == 0) {
        return false;
    } else if (inputYear % 4 == 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
