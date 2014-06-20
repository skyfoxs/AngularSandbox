angular.module('myApp').controller('SelectController', SelectController);

function SelectController($scope){
	
	$scope.faculties = [
		{ id: "0001", name: "Engineering"}, 
		{ id: "0002", name:"Dentistry"},
	];

	$scope.facultyID = $scope.faculties[0].id;
}