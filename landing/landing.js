var app = angular.module('main');

app.directive('landing', landing);

function landing() {
  return {
    templateUrl: 'landing/landing.html'
  }
}
