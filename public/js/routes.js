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
    })

    .when('/performer', {
      templateUrl: "../templates/performer/index.html"
    })

    .when('/developer', {
      templateUrl: "../templates/developer/index.html"
    })

    .when('/admin', {
      templateUrl: "../templates/admin/index.html"
    })

    .when('/admin/new', {
      templateUrl: "../templates/admin/new.html",
      controller: "AdminNewController"
    })

    .when('/admin/blog', {
      templateUrl: "../templates/admin/blog.html",
      controller: "AdminBlogController"
    })

    .when('/admin/login', {
      templateUrl: "../templates/admin/login.html",
      controller: "AdminLoginController"
    });

    $locationProvider.html5Mode(true);
});