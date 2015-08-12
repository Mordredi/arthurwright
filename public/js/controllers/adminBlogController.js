angular.module('ArthurWright').controller('AdminBlogController', function(Blog, $scope, $location, $localStorage){
  var token = $localStorage.token;
  if (typeof token === 'undefined') {
    $location.path('/admin/login')
  } else {
    $scope.post = new Blog();
    $scope.newPost = function(post) {
      post.$save().then(function(){
        $location.path('/admin');
      });
    }
  }
  $scope.editorOptions = {
    language: 'en',
    uiColor: '#ffffff'
  };
});