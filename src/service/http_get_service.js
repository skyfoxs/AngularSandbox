angular.module('myApp').service('GetDataService', GetDataService);

function GetDataService($http){
	this.getData = function(param, successCallback, errorCallback){

		$http.get("http://localhost/getData/" + param)
        .success(function(data, status){
            successCallback(data, status);
        })
        .error(function(data, status){           
        	errorCallback(data, status);
        });
	}
}