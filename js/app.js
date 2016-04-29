var app = angular.module('main', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/timeline', {
    templateUrl: 'landing/page.html',
    controller: 'landingController',
    controllerAs: 'landing'
  })
  .when('/search', {
    templateUrl: 'search/search.html',
    controller: 'searchController',
    controllerAs: 'search'
  })
  .when('/profileview/', {
    templateUrl: 'profileview/profileview.html',
    controller: 'profileviewController',
    controllerAs: 'profileview'
  })
  .when('/searchvideos/', {
    templateUrl: 'searchvideos/searchvideos.html',
    controller: 'searchvideosController',
    controllerAs: 'searchvideos'
  })
}]);
