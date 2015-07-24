angular.module("ArthurWright").directive('awPageNav', function(){
  return {
    replace: true,
    restrict: "E",
    templateUrl: "../templates/directives/awPageNav.html",
    link: function($scope) {
      if (window.location.pathname === '/') {
        $scope.navLinks = [['About', 'about'], ['Performer', 'performer'], ['Web Developer', 'web-developer'], ['Blog', 'blog'], ['Contact', 'contact']];
      } else if (window.location.pathname === '/developer') {
        $scope.navLinks = [['About', 'about'], ['Projects', 'projects'], ['Rates', 'rates'], ['Contact', 'contact']];
      }
      $scope.gotoAnchor = function(anchor) {
        console.log(anchor);
        var target = $('#' + anchor);
        $('html,body').animate( { scrollTop: target.offset().top } , 1000);
      }
    }
  }
});