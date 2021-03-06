angular.module('ArthurWright').controller('AdminLoginController', function(Login, $scope, $localStorage, $location){
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
      Login.authenticate({'username': $scope.adminInfo.username, 'password': $scope.adminInfo.password}).then(function(data){
          if(data.data.success){
            $localStorage.token = data.data.token;
            $location.path('/admin');
          } else {
            console.log(data.data.message);
          }
      });
    }
  }
});