angular.module('ArthurWright').controller('BlogShowController', function(Blog, $scope, $routeParams){
  $scope.post = Blog.get({id: $routeParams.id});
  console.log($scope.post);
});