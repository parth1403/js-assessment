exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {

  	var module = (function(greeting, name){

  		var singleton = {};
  		singleton.name = name;
  		singleton.greeting = greeting;
  		
  		singleton.sayIt = function sayIt (argument) {
  			return singleton.greeting + ", " + singleton.name;
  		};

  		return singleton;
  	})(str1, str2);

  	return module;
  }
};
