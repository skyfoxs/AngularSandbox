angular.module('myApp').service('DataService', DataService);

function DataService(){
	var data = {};

	return {
		getData: function(){
			return data;
		},
		setData: function(inputData){
			data = inputData;
		}
	};
}