exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
  	var counter = [start], curCount = start;
  	console.log(curCount);
  	var intervalId = setInterval(function(){
  		curCount++;
  		if(curCount <= end){
  			counter.push(curCount);	
  			console.log(curCount);
  		}else{
  			counter.cancel();
  		}
  		
  	},100);
  	counter.cancel = function(){
  		clearInterval(intervalId);
  	}
  	return counter;
  }
};
