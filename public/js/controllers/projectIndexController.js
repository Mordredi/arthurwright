angular.module('ArthurWright').controller('ProjectIndexController', function(Project, $scope){
  $scope.projects = Project.query();
});