describe("TestController", function() {
    var $scope;

    beforeEach(inject(createController));

    function createController($rootScope, $controller, $compile) {
        
        var configuration;
        
        $scope = $rootScope.$new();
        
        doc = angular.element(
            '<form name="subscriberForm">' + 
            '<input  type="text" '+
                    'ng-model="subscriberNumber" '+
                    'name="subscriber_number"'+
                    'maxlength="11" '+
                    'ng-pattern="/^66\\d{9}$/" required />'+
            '</form>'
        );
        $compile(doc)($scope);

        configuration = {
            $scope: $scope,
        };
        $controller('FirstPageController', configuration);
    }

    it('prints jasmine version', function() {
        console.log('jasmine-version:' + jasmine.getEnv().versionString());
    });

    it("should not show error message", function() {
        expect($scope.errorMessage).toEqual("");
    });

    it('subscriberNumber length should not be empty', function(){
        $scope.subscriberForm.subscriber_number.$setViewValue('');
        $scope.$digest();
        $scope.getCustomerProfile();
        expect($scope.subscriberForm.$invalid).toEqual(true);
        expect($scope.errorMessage).toEqual("invalid");
    });

    it('subscriberNumber length should be 11', function(){
        $scope.subscriberForm.subscriber_number.$setViewValue('668199');
        $scope.$digest();
        $scope.getCustomerProfile();
        expect($scope.subscriberForm.subscriber_number.$invalid).toEqual(true);
        expect($scope.errorMessage).toEqual("invalid");
    });

    it("should show error message when input text", function() {
        $scope.subscriberForm.subscriber_number.$setViewValue('asdfsdfgwer');
        $scope.$digest();
        $scope.getCustomerProfile();
        expect($scope.subscriberForm.subscriber_number.$invalid).toEqual(true);
        expect($scope.errorMessage).toEqual("invalid");
    });

    it("should show error message when input not start with 66", function() {
        $scope.subscriberForm.subscriber_number.$setViewValue('12345678911');
        $scope.$digest();
        $scope.getCustomerProfile();
        expect($scope.subscriberForm.subscriber_number.$invalid).toEqual(true);
        expect($scope.errorMessage).toEqual("invalid");
    });

    it('should return true when validate correct subscriberNumber [1]', function(){
        $scope.subscriberForm.subscriber_number.$setViewValue('66812345678');
        $scope.$digest();
        $scope.getCustomerProfile();
        expect($scope.subscriberForm.subscriber_number.$invalid).toEqual(false);
        expect($scope.errorMessage).toEqual("");
    });

    it('should return true when validate correct subscriberNumber [2]', function(){
        $scope.subscriberForm.subscriber_number.$setViewValue('66814819990');
        $scope.$digest();
        $scope.getCustomerProfile();
        expect($scope.subscriberForm.subscriber_number.$invalid).toEqual(false);
        expect($scope.errorMessage).toEqual("");
    });

});