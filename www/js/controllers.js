app.controller('groundControl', function($scope, dayService){
	

	$scope.numberDays = function(numDays){
	 	switch(numDays) {
	 	
	 		case 1:
	 		
	 		dayService.getPhoto(responseGood, responseBad,1);		
	 			break;
	 		case 7:
	 		
	 		dayService.getPhoto(responseGood, responseBad,7);
	 			break;
	 		case 14:
	 			dayService.getPhoto(responseGood, responseBad,14);
	 			break;
	 		default:
	 		
	
	 			
	 	}
	 }
	
	$scope.photoArray = [];
	function responseGood(response){
		//$scope.photo = response.data;
		$scope.photoArray.push(response.data);
	};
	function responseBad(response){
		//$scope.photo = thePhoto;
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	};


});








