(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
    $scope.clicked='false';
     $scope.displayMessage = function () {
    var messages = Check($scope.foods);
    $scope.Messages = messages;
  };
    function Check(string){
        var Foods;
        if(string==''||string ==null)
        {
        var message='Enter The Data';
        }
        else
        {
             
            Foods=string.split(',');
         
            if(Foods.length<=3)
                {
                    message='Enjoy!';
                   
                }
            else
                    message='Too much!';
        }
    return message;
    }

}
})();

    


        