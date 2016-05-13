var app = angular.module('main');

app.controller("searchphotosController", searchphotos);

app.$inject = ['$http'];

function searchphotos($http) {
  var vm = this;

  vm.search = function(value) {
    console.log("Front-end is running");
      api_key: "e3db6f141cc91fc8b844e93484933fd4"
    var search = $http.get('https://api.flickr.com/services/rest/?&method=flickr.photos.search&text=flower&api_key=e3db6f141cc91fc8b844e93484933fd4&format=json&extras=url_m');
    search.then(function(res){
      var test = ''
      vm.results= res.data;
      console.log(res.data);
    })
  }
}
