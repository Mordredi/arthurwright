angular.module('ArthurWright').factory('Blog', function($resource){
  return $resource('/blog/:id');
});