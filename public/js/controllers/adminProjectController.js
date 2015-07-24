angular.module('ArthurWright').controller('AdminProjectController', function(Project, $scope, $location){
  $scope.project = new Project();
  $scope.newProject = function(project) {
    project.$save().then(function(){
      $location.path('/admin');
    });
  }
});