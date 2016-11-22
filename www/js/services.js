app.service('dayService', function($http){
	this.getPhoto = function(callGood, callBad, numberOfDays){
	//var url = 'https://api.nasa.gov/planetary/apod?api_key=T0pL0WqhD22V2rBQamplFq1RJYjqVVCrv8OrDgyg';
	

			var url1 = 'https://api.nasa.gov/planetary/apod?date=';
			var url3 = '&api_key=T0pL0WqhD22V2rBQamplFq1RJYjqVVCrv8OrDgyg';
			var d = new Date();
			var theUrl;
			var outputUrlArray =[];
			//var d = new Date();
			function getUrlFormat(numberOfDays){ // numberOfDays is either 1, 7, or 14 depending on switch statement in controller
				d.getDate(); //get today's date
				
				outputUrlArray.push(url1 + d.toISOString().slice(0, 10) + url3);  //d.toISOString returns todays date as a string (eg "2016-11-20T09:54:16.076Z"), slice the first 10 relevent characters and add to other parts of url string, push string into array.
				if(numberOfDays>1){
				for(i=0;i<numberOfDays;i++){ //loop 7 or 14 times, I THINK SHOULD THIS BE 6 AND 13  BECAUSE TODAY WILL ALREADY BE INCLUDED??
					d.setDate(d.getDate() - 1); //set d.date to today's date minus one day, take one from previous date each loop
					outputUrlArray.push(url1 + d.toISOString().slice(0, 10) + url3); 
				}
				}
			}

			getUrlFormat(numberOfDays);  //call the function



		
		for(i in outputUrlArray){
			$http.get(outputUrlArray[i]).then(funGood, funBad);
			function funGood(response){
				callGood(response);
			};
			function funBad(response){
				callBad(response.status, response.statusText);
			}
		}
	}

});

 app.factory('Data', function(){
     var photoArray = [];
     return photoArray;
 });