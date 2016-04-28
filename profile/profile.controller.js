var app = angular.module('main');

app.controller('profileController', profile);

app.$inject = ['$http'];

function profile($http) {
  var vm = this;

  function start() {
    getFriends();
  }

  start();

  function getFriends() {
    var friends = $http.get('http://localhost:8080/friends');
    friends.then(function(results) {
      vm.friends = results.data;
    })
  }
}
