app.controller('groundControl', function($scope, dayService, Data){

//      $scope.$on('$ionicView.enter', function() {
// $scope.photoArray = [];
//   });
//$rootScope.$broadcast("$ionicView.enter");

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

		Data.photoArray = [];
		//$scope.photoArray = [];
		function responseGood(response){
					//$scope.photo = response.data;
			//$scope.photoArray.push(response.data);
			Data.photoArray.push(response.data);
		};
		function responseBad(response){
					//$scope.photo = thePhoto;
			// $scope.status = response.status;
			// $scope.statusText = response.statusText;
			 Data.status = response.status;
			 Data.statusText = response.statusText;
		};

	

  
});

app.controller('majorTom', function($scope, Data){
$scope.photoArray = Data.photoArray; 
});













