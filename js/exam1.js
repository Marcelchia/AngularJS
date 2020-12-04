var app1 = angular.module('app1',[]);

app1.controller('ctrl1',function($scope){

    //initialize

    $scope.first=1;
    $scope.second=1;

    $scope.updateValue = function(){
        $scope.calculation = $scope.first +' + '+$scope.second + " = "
        //convert string to integer
        +(+$scope.first + +$scope.second);
    }

});