describe('Test Share Data Service', function(){
	var service, mockData;
	
	beforeEach(function(){
		module("myApp");
		inject(function(DataService){
			service = DataService;
		});
	});

	it('should set data and get back correctly', function(){
		mockData = { name: "test", id: 2 };
		service.setData(mockData);
		expect(service.getData()).toBe(mockData);
	});
});

// Example for not use beforeEach just load module and inject service
// xdescribe <-- not test this suite
xdescribe('Test Share Data Service', function(){
	it('should set data and get back correctly', function(){
		var service;
		module("myApp");
		inject(function(DataService){
			service = DataService;
		});
		mockData = { name: "test", id: 2 };
		service.setData(mockData);
		expect(service.getData()).toBe(mockData);
	});
});