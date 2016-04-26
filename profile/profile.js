var app = angular.module('main');

app.directive('profile', profile);

function profile() {
  return {
    templateUrl: 'profile/profile.html'
  }
}
