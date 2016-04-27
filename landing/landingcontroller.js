var app = angular.module('main');

app.controller('landingController', landing);

app.$inject = ['$http'];

function landing($http) {
  var vm = this;


  vm.search = function(value) {
    var toSearch = {};
    toSearch.content = value;
    var search = $http.post('http://localhost:8080/search', toSearch);
    search.then(function(friends) {
      vm.results = friends.data
    })
  }


}
