var app = angular.module('main', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/timeline', {
    templateUrl: 'landing/page.html',
    controller: 'landingController',
    controllerAs: 'landing'
  })
  .when('/search', {
    templateUrl: 'landing/page.html',
    controller: 'landingController',
    controllerAs: 'landing'
  })
}]);
