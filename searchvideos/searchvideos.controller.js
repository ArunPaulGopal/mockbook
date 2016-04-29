var app = angular.module('main');

app.controller('searchvideosController', searchvideos);

app.$inject = ['$http','$sceDelegateProvider'];

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/embed/XH7ZRF6zNoc'
  ])
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
