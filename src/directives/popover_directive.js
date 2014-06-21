angular.module('myApp').directive('inputSubscriberNumber', function(){
    return {
        restrict: 'E',
        replace: true,
        scope: {
           subscriberNumber: "=model",
           onBlur: "&eventBlur",
           errorMessage: "=",
           popupMessage: "=",
           focusMe: "=focus",
        },
        controller: function($scope){
            $scope.hideErrorMessage = function(){
                $scope.errorMessage = "";
                $scope.showPopupMessage = false;
            };
        },
        templateUrl: '/html/templates/subscriber_number.html',
        link: function(scope, element, attr){
            scope.$watch('popupMessage', function(value){
                if(angular.equals({},value) || value === undefined){
                    scope.showPopupMessage = false;
                }else{
                    scope.showPopupMessage = true;
                }
            });
        },
    };
}).directive('focusMe', function(){
    return {
        link: function(scope, element, attr){
            scope.$watch('focusMe', function(value){
                if(value === true) { 
                    element[0].focus();
                    scope.focusMe = false;
                }
            });
        },
    };
});