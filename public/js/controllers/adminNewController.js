angular.module('ArthurWright').controller('AdminNewController', function(Admin, $scope, $location){
  $scope.admin = new Admin();
  $scope.newAdmin = function(admin){
    if (admin.password === admin.passwordConfirmation) {
      admin.$save().then(function(){
        $location.path('/admin');
      });
    }
  }
});