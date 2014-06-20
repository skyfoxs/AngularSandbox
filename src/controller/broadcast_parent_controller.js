myApp.controller('ParentController', ParentController);
function ParentController($scope){
	
	$scope.parentChange = function(){
		$scope.$broadcast('parentBroadcast', { data: $scope.parentInput });
		$scope.firstChildFromParent = $scope.parentInput;
		$scope.secondChildFromParent = $scope.parentInput;
	};

	$scope.$on('firstEmit', function(event, data){
		$scope.parentFirstChild = data.data;
	});

	$scope.$on('secondEmit', function(event, data){
		$scope.parentSecondChild = data.data;
	});
}