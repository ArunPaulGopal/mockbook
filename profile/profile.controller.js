var app = angular.module('main');

app.controller('profileController', profile);

app.$inject = ['$http'];

function profile($http) {
  var vm = this;

  function getFriends() {
    var friends = $http.get('http://localhost:8080/search');
    friends.then(function(results) {
      
    })
  }
}
