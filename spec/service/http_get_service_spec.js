describe('Test Http Get', function(){
	var $backend, mock, service;

	beforeEach(function(){
		module('myApp');
		inject(createService);
	});

	function createService($httpBackend, GetDataService){
		
		$backend = $httpBackend;		
		mock = {
			successCallback: function(data, status){},
			errorCallback: function(data, status){},
		};

		service = GetDataService;
	}

	it('should call successCallback with return value', function(){
		spyOn(mock,"successCallback");
		$backend.when("GET", "http://localhost/getData/1234").respond(200,{ data: "1234" });
		service.getData("1234", mock.successCallback, mock.errorCallback);
		$backend.flush();
		expect(mock.successCallback).toHaveBeenCalledWith({ data: "1234" }, 200);
	});

	it('should call errorCallback with return value when invalid param', function(){
		spyOn(mock,"errorCallback");
		$backend.when("GET", "http://localhost/getData/12345").respond(500, { data: "" });
		service.getData("12345", mock.successCallback, mock.errorCallback);
		$backend.flush();
		expect(mock.errorCallback).toHaveBeenCalledWith({ data: "" }, 500);
	});

	it('should call errorCallback when cannot call to the GET data', function(){
		spyOn(mock,"errorCallback");
		$backend.when("GET", "http://localhost/getData/123456").respond(0, { data: "" });
		service.getData("123456", mock.successCallback, mock.errorCallback);
		$backend.flush();
		expect(mock.errorCallback).toHaveBeenCalledWith({ data: "" }, 0);
	});
});