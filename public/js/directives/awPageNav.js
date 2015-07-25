angular.module("ArthurWright").directive('awPageNav', function(){
  return {
    replace: true,
    restrict: "E",
    templateUrl: "../templates/directives/awPageNav.html",
    link: function($scope) {
      var navLinks = {
        "home": [['About', 'about'], ['Performer', 'performer'], ['Web Developer', 'web-developer'], ['Blog', 'blog'], ['Contact', 'contact']],
        "developer": [['About', 'about'], ['Projects', 'projects'], ['Rates', 'rates'], ['Contact', 'contact']]
      };
      if (window.location.pathname === '/') {
        $scope.navLinks = navLinks["home"];
      } else if (window.location.pathname === '/developer') {
        $scope.navLinks = navLinks["developer"];
      }
      $scope.loadNav = function(nav) {
       $scope.navLinks = navLinks[nav];
      }
      $scope.gotoAnchor = function(anchor) {
        console.log(anchor);
        var target = $('#' + anchor);
        $('html,body').animate( { scrollTop: target.offset().top } , 1000);
      }
    }
  }
});