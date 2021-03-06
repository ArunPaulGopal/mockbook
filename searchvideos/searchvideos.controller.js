var app = angular.module('main');

app.controller('searchvideosController', searchvideos);

app.$inject = ['$http','$sceProvider'];

app.config(function($sceProvider) {
  $sceProvider.enabled(false);
})

function searchvideos($http) {
  var vm = this;

  getVideos();

  function getVideos() {
    var searchvideos = $http.get('http://localhost:8080/videos');
    searchvideos.then(function(videos) {
      vm.results = videos.data;
    })
  }
}
