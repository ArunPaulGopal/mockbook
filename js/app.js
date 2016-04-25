var app = angular.module('main', ['ngRoute']);



app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/timeline', {
    templateUrl: 'timeline/timeline.html',
    controller: 'timelineController',
    controllerAs: 'timeline'
  })
}]);
