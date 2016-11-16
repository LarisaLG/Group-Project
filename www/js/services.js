app.service('dayService', function($http){
	this.getPhoto = function(callGood, callBad){
		var url = 'https://api.nasa.gov/planetary/apod?api_key=T0pL0WqhD22V2rBQamplFq1RJYjqVVCrv8OrDgyg';
		$http.get(url).then(funGood, funBad);
		function funGood(response){
			callGood(response);
		};
		function funBad(response){
			callBad(response.status, response.statusText);
		}

	};
});