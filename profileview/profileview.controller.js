var app = angular.module('main');

app.controller('profileviewController', profileview);

app.$inject = ['$http','$location'];

function profileview($http,$location) {
  var vm = this;

  function start() {
    viewProfile();
  }

  start();

  function viewProfile() {
    var searchObject = $location.search();
    console.log(searchObject);
  }
}
