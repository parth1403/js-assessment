exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	var bStr = num.toString(2);
  	return parseInt(bStr[bStr.length - bit]);
  },

  base10: function(str) {
  	return parseInt(str,2)
  },

  convertToBinary: function(num) {
  	var binary = num.toString(2);
  	while(binary.length < 8){
  		binary = '0' + binary;
  	}
  	return binary;
  },

  multiply: function(a, b) {
  	var bStr = b.toString();
  	var precision = bStr.length - bStr.indexOf(".") - 1;
  	return parseFloat((a * b).toFixed(precision));
  }
};
