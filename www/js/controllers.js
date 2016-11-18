app.controller('groundControl', function($scope, dayService){
	$scope.numberDays = function(numDays){
	 	switch(numDays) {
	 		// if(numDays ===1){
	 		// 	$scope.what = "marie";
	 		// }else if(numDays === 7){
	 		// 	$scope.what = "ohara";
	 		// }else{
	 		// 	$scope.what = "ohara marie";
	 		// }};
	 		case 1:
	 		//dayService.callGetFormat(1);
	 		dayService.getPhoto(responseGood, responseBad,1);		
	 			break;
	 		case 7:
	 		//dayService.test7(7);	
	 		dayService.getPhoto(responseGood, responseBad,7);
	 			break;
	 		case 14:
	 			dayService.getPhoto(responseGood, responseBad,14);
	 			break;
	 		default:
	 		//dayService.getPhoto(responseGood, responseBad);
	
	 			
	 	}
	 }
	// dayService.getPhoto(responseGood, responseBad);
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








