angular.module('myApp').controller('PopOverController', PopOverController);

function PopOverController($scope){
    $scope.subscriberNumber = "";
    $scope.errorMessage = "";
    $scope.focusSubscriberNumber = false;

    $scope.validate = function(){
        if($scope.myForm.$valid){
            if($scope.subscriberNumber === "66814819990"){
                $scope.errorMessage = "";
                $scope.popSubscriberNumber = {};
            }else{
                $scope.popSubscriberNumber = {title: "Invalid", body: "Invalid Number"};
            }
        }else{
            $scope.errorMessage = "Invalid format";
        }
    }

    $scope.focusInput = function(){
        $scope.focusSubscriberNumber = true;
    }
}