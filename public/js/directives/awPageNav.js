angular.module("ArthurWright").directive('awPageNav', ['$location', '$rootScope',  function($location, $rootScope){
  return {
    replace: true,
    restrict: "E",
    templateUrl: "../templates/directives/awPageNav.html",
    link: function($scope) {
      var navLinks = {
        "home": [['About', 'about'], ['Performer', 'performer'], ['Web Developer', 'web-developer'], ['Blog', 'blog'], ['Contact', 'contact']],
        "developer": [['About', 'about'], ['Projects', 'projects'], ['Rates', 'rates'], ['Contact', 'contact']],
        "performer": [['Bio', 'bio'], ['Upcoming', 'upcoming'], ['Videos', 'videos'], ['Photos', 'photos'], ['Contact', 'contact']]
      };

      $rootScope.$on('$locationChangeSuccess', function () {
        var path = $location.path();
        locationChange(path);
      });

      var locationChange = function(path) {
        if (path === '/') {
          $scope.navLinks = navLinks["home"];
        } else if (path === '/developer') {
          $scope.navLinks = navLinks["developer"];
        } else if (path === '/performer') {
          $scope.navLinks = navLinks["performer"];
        } else {
          $scope.navLinks = null;
        }
      };

      locationChange($location.path());

      $scope.changePage = function(nav) {
       $location.path(nav);
      }
      $scope.gotoAnchor = function(anchor) {
        var target = $('#' + anchor);
        $('html,body').animate( { scrollTop: target.offset().top } , 1000);
      }
    }
  }
}]);