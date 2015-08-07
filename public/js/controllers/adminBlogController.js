angular.module('ArthurWright').controller('AdminBlogController', function(Blog, $scope, $location, $localStorage){
  console.log($localStorage.token);
  $scope.post = new Blog();
  $scope.newPost = function(post) {
    post.$save().then(function(){
      $location.path('/admin');
    });
  }
});