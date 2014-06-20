angular.module('myApp').controller('FirstChildController',FirstChildController);

function FirstChildController($scope){
	
	$scope.firstChildChange = function(){
		$scope.$emit('firstEmit', { data: $scope.firstChild });
	};

	$scope.$on('parentBroadcast', function(event, data){
		$scope.firstChildFromParentBroadcast = data.data;
	});
}