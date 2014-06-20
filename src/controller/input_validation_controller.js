angular.module('myApp').controller('FirstPageController',FirstPageController);

function FirstPageController($scope){
	$scope.heading = "Hello AngularJS";
	$scope.subscriberNumber = "";
	$scope.errorMessage = "";
	$scope.counter = 0;

	$scope.getCustomerProfile = function () {
		if( $scope.subscriberForm.$invalid ){
			$scope.errorMessage = "invalid";
		} else {
			$scope.errorMessage = "";
		}
	}

	$scope.hideErrorMessage = function() {
		$scope.errorMessage = "";
		$scope.counter++;
	};
}