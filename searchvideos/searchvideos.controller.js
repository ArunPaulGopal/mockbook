var app = angular.module('main');

app.controller('searchvideosController', searchvideos);

app.$inject = ['$http'];

function searchvideos($http) {
  var vm = this;

  vm.search = function() {
    var searchvideos = $http.get('http://localhost:8080/videos');
    searchvideos.then(function(videos) {
      vm.results = videos.data;
    })
  }
}
