const ftoc = function(fIn) {
  // Math.round(n * 10) / 10;
  return Math.round((fIn - 32) * 5 / 9 * 10) / 10;
};

const ctof = function(cIn) {
  return Math.round((cIn * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
