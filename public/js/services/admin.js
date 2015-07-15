angular.module('ArthurWright').factory('Admin', function($resource){
  return $resource('/admin/new');
});

angular.module('ArthurWright').factory('Login', function($resource){
  return $resource('/admin');
});