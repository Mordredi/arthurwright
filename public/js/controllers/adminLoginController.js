angular.module('ArthurWright').controller('AdminLoginController', function(Login, $scope){
  $scope.adminInfo = new Login;
  $scope.saveData = function(adminInfo){
    $scope.usernameRequired = '';
    $scope.passwordRequired = '';
    if (!$scope.adminInfo.username) {
      $scope.usernameRequired = 'Username Required';
    }

    if (!$scope.adminInfo.password) {
      $scope.passwordRequired = 'Password Required';
    }

    if ($scope.adminInfo.username && $scope.adminInfo.password) {
      adminInfo.$save().then(function(){
        $location.path('/admin');
      });
    }
  }
});