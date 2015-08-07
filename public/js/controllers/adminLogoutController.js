angular.module('ArthurWright').controller('AdminLogoutController', function(Login, $scope, $location){
  $scope.logout = function() {
    Login.logout();
    $location.path('/admin/login');
  }
});