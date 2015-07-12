angular.module('ArthurWright').factory('Blog', function($resource){
  return $resource('/api/blog/:id');
});