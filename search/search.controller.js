var app = angular.module('main');

app.controller('searchController', search);

app.$inject = ['$http'];

function search($http) {
  var vm = this;

  vm.search = function(value) {
    var toSearch = {};
    toSearch.content = value;
    var search = $http.post('http://localhost:8080/search', toSearch);
    search.then(function(friends) {
      console.log(friends.data)
      vm.results = friends.data
    })
  }
}
