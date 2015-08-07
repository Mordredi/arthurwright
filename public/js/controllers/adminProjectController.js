angular.module('ArthurWright').controller('AdminProjectController', function(Project, $scope, $location, $localStorage){
  var token = $localStorage.token;
  if (typeof token === 'undefined') {
    $location.path('/admin/login');
  } else {
    $scope.project = new Project();
    $scope.newProject = function(project) {
      project.$save().then(function(){
        $location.path('/admin');
      });
    }
  }
});