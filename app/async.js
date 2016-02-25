exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  	var promise = new Promise(function(resolve, reject){
  		setTimeout(function(){
  			resolve(value);
  		}, 100);
  	});
  	return promise;
  },

  manipulateRemoteData : function(url) {
  	var promise = new Promise(function(resolve, reject){
  		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
		    var DONE = this.DONE || 4;
		    if (this.readyState === DONE){
		        var data = JSON.parse(this.responseText);
		        var people = data.people;
		        var peoplenames = [];
		        for(var i  = 0; i < people.length; i++){
		        	peoplenames.push(people[i].name);
		        }
		        resolve(peoplenames);
		    }
		};
		xhr.open('GET', url, true);
		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		xhr.send(null);
  	});
  	return promise;
  }
};
