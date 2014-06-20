describe('Test for select with ng-options', function(){

    it('should have two option with default at 0001 Engineering', function(){
        var $scope, data;

        data = [
            { id: "0001", name: "Engineering"}, 
            { id: "0002", name: "Dentistry"},
        ];

        inject(function($rootScope, $controller){
            $scope = $rootScope.$new();
            $controller('SelectController', {$scope: $scope});
        });
        
        expect($scope.faculties).toEqual(data);
        expect($scope.facultyID).toEqual(data[0].id);
    });
});