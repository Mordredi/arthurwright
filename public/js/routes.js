angular.module('ArthurWright').config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: "../templates/home/index.html"
    })

    .when('/blog',{
      templateUrl: "../templates/blog/index.html",
      controller: "BlogIndexController"
    })

    .when('/blog/:id', {
      templateUrl: "../templates/blog/show.html",
      controller: "BlogShowController"
    });

    $locationProvider.html5Mode(true);
});