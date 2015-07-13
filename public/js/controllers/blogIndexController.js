angular.module('ArthurWright').controller('BlogIndexController', function(Blog, $scope){
  $scope.posts = Blog.query();
});