exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(window, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function(str) {
    return function(str2){
      return str + ', ' + str2;
    }
  },

  makeClosures : function(arr, fn) {
    var funcs = [];
    for(var i = 0; i < arr.length; i++){
      (function(num){
        funcs.push(function(){
          return fn(num);
        });
      })(arr[i]);
    }
    return funcs;
  },

  partial : function(fn, str1, str2) {
    return function(str3){
      return fn(str1, str2, str3);
    };
  },

  useArguments : function() {
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
      total += arguments[i];
    }
    return total;
  },

  callIt : function(fn) {
    var fn = arguments[0];
    var args = [];
    for(var i = 1; i < arguments.length; i++){
      args.push(arguments[i]);
    }
    return fn.apply(this, args);
  },

  partialUsingArguments : function(fn) {
    var mainArgs = [];
    for(var i = 1; i < arguments.length; i++){
      mainArgs.push(arguments[i]);
    }
    return function(str3){
      var args = [];
      for(var i = 0; i < arguments.length; i++){
        args.push(arguments[i]);
      }
      mainArgs = mainArgs.concat(args);
      return fn.apply(window, mainArgs);
    };
  },

  curryIt : function(fn) {

  }
};
