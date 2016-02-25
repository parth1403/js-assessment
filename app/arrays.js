exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var total = 0;
    for(var i = 0; i < arr.length; i++){
      total += arr[i];
    }
    return total;
  },

  remove : function(arr, item) {
    var index = arr.indexOf(item);
    while(index > -1){
      arr.splice(index, 1);
      index = arr.indexOf(item);
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    var index = arr.indexOf(item);
    while(index > -1){
      arr.splice(index, 1);
      index = arr.indexOf(item);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0, index;
    index = arr.indexOf(item);
    while(index > -1){
      count++;
      index = arr.indexOf(item, index + 1);
    }
    return count;
  },

  duplicates : function(arr) {
    var sorted_arr = arr.sort(function(a, b){
      return a > b ? 1: -1;
    });
    var results = [], val;
    for (var i = 0; i < arr.length - 1; i++) {
        val = sorted_arr[i];
        if (sorted_arr[i + 1] == val && results.indexOf(val) == -1) {
            results.push(val);
        }
    }
    return results;
  },

  square : function(arr) {
    var square_arr = [];
    for(var i = 0; i < arr.length; i++){
      square_arr.push(Math.pow(arr[i], 2));
    }
    return square_arr;
  },

  findAllOccurrences : function(arr, target) {
    var index, result = [];
    index = arr.indexOf(target);
    while(index > -1){
      result.push(index);
      index = arr.indexOf(target, index + 1);
    }
    return result;
  }
};
