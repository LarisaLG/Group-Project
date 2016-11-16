app.controller('groundControl', function($scope, dayService){
	dayService.getPhoto(responseGood, responseBad);
	function responseGood(response){
		$scope.photo = response.data;
	};
	function responseBad(response){
		//$scope.photo = thePhoto;
		$scope.status = response.status;
		$scope.statusText = response.statusText;
	}
});