angular.module('ArthurWright').factory('Admin', function($resource){
  return $resource('/admin/new');
});

angular.module('ArthurWright').factory('Login', function($http, $localStorage){
  return {
    authenticate: function(data){
      return $http.post('/authenticate', data);
    },
    logout: function() {
      delete $localStorage.token;
    }
  }
});