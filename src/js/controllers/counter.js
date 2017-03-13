function CounterController ($scope) {
   $scope.likes = 0;
   $scope.many = 'Likes';
   var toggle = true;


   $scope.addLike = function () {
        if (toggle) {
          $scope.likes++;
        } else {
          $scope.likes--;
        }
        if ($scope.likes === 1){
          $scope.many = 'Like';
        } else{
          $scope.many = 'Likes';
        }
      }

   $scope.toggle = function () {
       if (toggle) {
           toggle = false;
       } else {
           toggle = true;
       }
   }
};

CounterController.$inject = ['$scope'];

export { CounterController };
