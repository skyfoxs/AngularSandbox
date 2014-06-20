angular.module('myApp').controller('SecondChildController', SecondChildController);

function SecondChildController($scope){
	
	$scope.secondChildChange = function(){
		$scope.$emit('secondEmit', { data: $scope.secondChild });
	};

	$scope.$on('parentBroadcast', function(event, data){
		$scope.secondChildFromParentBroadcast = data.data;
	});
}