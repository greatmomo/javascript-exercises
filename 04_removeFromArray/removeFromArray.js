const removeFromArray = function(startingArray, ...theArgs) {
    for (let i = 0; i < startingArray.length; i++) {
        theArgs.forEach(function(innerItem, innerIndex) {
            if (innerItem === startingArray[i]) {
                startingArray.splice(i, 1);
                i--;
            }
        });
    }
    return startingArray;
};

// Do not edit below this line
module.exports = removeFromArray;
