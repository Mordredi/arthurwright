angular.module('ArthurWright').controller('AdminNewController', function(Admin, Users, $scope, $location, $localStorage, $http){
  $http.get('/admin/users').then(function(data){
    var users = data.data
    if (users.length >= 1) {
      $location.path('/')
    } else {
      $scope.admin = new Admin();
      $scope.newAdmin = function(admin){
        if (admin.password === admin.passwordConfirmation) {
          admin.$save().then(function(data){
            if (data.success === true) {
              $localStorage.token = data.token;
              $location.path('/admin');
            }
          });
        }
      }
    }
  });
});