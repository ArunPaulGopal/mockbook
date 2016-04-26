var app = angular.module('main');

app.directive('timeline', timeline);

function timeline() {
  return {
    templateUrl: 'timeline/timeline.html'
  }
}
