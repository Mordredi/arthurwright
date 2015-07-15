angular.module('ArthurWright').controller('AdminBlogController', function(Blog, $scope, $location){
  $scope.post = new Blog();
  $scope.newPost = function(post) {
    post.$save().then(function(){
      $location.path('/admin');
    });
  }
});