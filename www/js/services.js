app.service('dayService', function($http){
	this.getPhoto = function(callGood, callBad, numberOfDays){
	//var url = 'https://api.nasa.gov/planetary/apod?api_key=T0pL0WqhD22V2rBQamplFq1RJYjqVVCrv8OrDgyg';
	

			var url1 = 'https://api.nasa.gov/planetary/apod?date=';
			var url3 = '&api_key=T0pL0WqhD22V2rBQamplFq1RJYjqVVCrv8OrDgyg';
			var d = new Date();
			var theUrl;
			var outputUrlArray =[];
			//var d = new Date();
			function getUrlFormat(numberOfDays){

				for(i=0;i<numberOfDays;i++){
					d.setDate(d.getDate() - 1);
					outputUrlArray.push(url1 + d.toISOString().slice(0, 10) + url3);
				}
			}

			getUrlFormat(numberOfDays);



		
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