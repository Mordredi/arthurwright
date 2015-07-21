angular.module('ArthurWright').factory('Project', function($resource){
  return $resource('/api/project/:id');
});