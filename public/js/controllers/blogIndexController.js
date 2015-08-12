angular.module('ArthurWright').controller('BlogIndexController', function(Blog, $scope, $filter){
  $scope.posts = Blog.query();
});