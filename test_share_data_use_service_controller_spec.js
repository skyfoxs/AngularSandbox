describe('Test Controller', function(){
	var $aScope, $bScope, service, mockData;

	beforeEach(inject(function($rootScope, $controller){
		$aScope = $rootScope.$new();
		$bScope = $rootScope.$new();
		service = function(){
			var data = {};
			return {
				getData: function(){ return data;},
				setData: function(inputData){ data = inputData;},
			}
		}();
		$controller('AController',{ $scope: $aScope, DataService: service });
		$controller('BController',{ $scope: $bScope, DataService: service });
	}));

	it('should change service data when AController change its data.name', function(){
		$aScope.data.name = "test";
		expect(service.getData()).toEqual({ name: "test"});
	});

	it('should change BController data.name when change AController data.name', function(){
		$aScope.data.name = "";
		expect($aScope.data.name).toEqual("");
		expect($bScope.data.name).toEqual("");
		$aScope.data.name = "test";
		expect($bScope.data.name).toEqual("test");
	});

	it('should set data.tel in BController to "abc" when input in AController trigger onBlur', function(){
		$aScope.onBlur();
		expect($bScope.data.tel).toEqual("abc");
	});
});