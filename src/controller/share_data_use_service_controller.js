angular.module('myApp').controller('AController', ['$scope', 'DataService', AController]);

function AController($scope, DataService){
	$scope.data = DataService.getData();

	$scope.onBlur = function(){
		$scope.data.tel = "abc";
	}
}

angular.module('myApp').controller('BController', ['$scope', 'DataService', BController]);

function BController($scope, DataService){
	$scope.data = DataService.getData();
}