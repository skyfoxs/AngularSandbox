describe('Test First Child Controller $on', function(){

	it('should listen to parent broadcast', function(){
		var $scope, $myRootScope;
		inject(function($rootScope, $controller){
			$myRootScope = $rootScope;
			$scope = $rootScope.$new();
			$controller('FirstChildController', { $scope: $scope });
		});

		$myRootScope.$broadcast('parentBroadcast', { data: "test"});
		expect($scope.firstChildFromParentBroadcast).toBe("test");
	});

	it('should emit broadcast to parent', function(){
		var $scope, $myRootScope;
		inject(function($rootScope, $controller){
			$myRootScope = $rootScope;
			$scope = $rootScope.$new();
			$controller('FirstChildController', { $scope: $scope });
		});
		spyOn($scope,"$emit");
		$scope.firstChild = "abcd";
		$scope.firstChildChange();
		expect($scope.$emit).toHaveBeenCalledWith("firstEmit", { data: "abcd" });

	});

});