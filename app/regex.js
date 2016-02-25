exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var reg = /[0-9]/;
    return reg.test(str);
  },

  containsRepeatingLetter : function(str) {
    var reg = /([a-zA-Z])\1/;
    return reg.test(str);
  },

  endsWithVowel : function(str) {
    var reg = /[AEIOUaeiou]$/;
    return reg.test(str);
  },

  captureThreeNumbers : function(str) {
    var reg = /[0-9]{3}/;
    var result = reg.exec(str);
    if(result == null){
      return false;
    }else{
      return result[0];
    }
  },

  matchesPattern : function(str) {
    var reg = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    return reg.test(str);
  },
  isUSD : function(str) {
    var reg = /^\$[0-9]+(,[0-9]{3})*(.[0-9]{2}){0,1}$/;
    return reg.test(str);
  }
};
