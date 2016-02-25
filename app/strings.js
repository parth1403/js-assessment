exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var curInspectChar 	= str[0],
  		newString		= curInspectChar,
  		repeatCount		= 0
  	;
  	var newString = curInspectChar;
  	for(var i = 1; i < str.length; i++){

		if(curInspectChar == str[i]){
  			repeatCount++;
  		}else{
  			repeatCount = 0;
  			curInspectChar = str[i];
  		}

  		if(curInspectChar != str[i] || repeatCount < amount){
			newString += str[i];
  		}
  	}

  	return newString;
  },
  wordWrap: function(str, cols) {
  	var words 			= str.split(" "),
  		wrappedLines 	= "",
  		curLine			= ""
  	;

  	for(var i = 0; i < words.length; i++){
  		if(curLine.length + words[i].length <= cols){
  			curLine += " " + words[i];
  		}else{
  			wrappedLines += "\n" + curLine;
  			curLine = words[i];
  		}
  	}
  	wrappedLines += "\n" + curLine;
  	return wrappedLines.trim();
  },
  reverseString: function(str) {
  	var reverStr = "";
  	for(var i = str.length - 1; i >= 0; i--){
  		reverStr += str[i];
  	}
  	return reverStr;
  }
};
