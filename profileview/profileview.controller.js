var app = angular.module('main');

app.controller('profileviewController', profileview);

app.$inject = ['$http','$location'];

function profileview($http,$location) {
  var vm = this;
  var searchObject = '';

  function start() {
    getID();
    getProfile();
  }

  start();

  function getID() {
    searchObject = $location.search().id;
  }

  function getProfile() {
    var toSearch = {};
    toSearch.content = searchObject;
    var profile = $http.post('http://localhost:8080/profile', toSearch);
    profile.then(function(user){
      vm.profile =user.data
    })
  }
}
