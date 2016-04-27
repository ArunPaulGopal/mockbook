var app = angular.module('main');

app.controller('landingController', landing);

app.$inject = ['$http'];

function landing($http) {
  var vm = this;


  vm.search = function(value) {
    console.log("Search function running!")
    var toSearch = {};
    toSearch.content = value.text;
    var search = $http.post('http://localhost:8080/search');
    search.then(function(friends) {
      vm.list = friends.data
    })
  }


}
