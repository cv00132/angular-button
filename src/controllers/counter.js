function CounterController ($scope) {
   $scope.likes = 0;
   $scope.clicked = true;

   $scope.addLike = function (op) {
       $scope.likes += 1;
       $scope.clicked = true;
   };

   $scope.disLike = function (op) {
       $scope.likes -= 1;
       $scope.clicked = false;
       console.log("I no like");
   };

   $scope.toggle = function () {
       if ($scope.clicked === true) {
           $scope.addLike();
       }
       $scope.disLike();
   }
 };

CounterController.$inject = ['$scope'];

export { CounterController };
