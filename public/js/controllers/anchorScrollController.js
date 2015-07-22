angular.module('ArthurWright').controller('AnchorScrollController', ['$scope', function($scope){
  $scope.gotoAnchor = function(anchor) {
    var target = $('#' + anchor);
    $('html,body').animate( { scrollTop: target.offset().top - 32} , 1000);
  }
}]);