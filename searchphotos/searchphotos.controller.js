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


jsonFlickrApi(
  {"photos":
    {"page":1,
    "pages":5066,
    "perpage":100,
    "total":"506551",
    "photo":[{"id":"26252854444","owner":"74311914@N04","secret":"5125e92508","server":"7187","farm":8,"title":"DSC_6627","ispublic":1,"isfriend":0,"isfamily":0,"url_m":"https:\/\/farm8.staticflickr.com\/7187\/26252854444_5125e92508.jpg","height_m":"334","width_m":"500"},{"id":"26585288000","owner":"128117771@N02","secret":"62cc8cbf51","server":"7422","farm":8,"title":"","ispublic":1,"isfriend":0,"isfamily":0,"url_m":"https:\/\/farm8.staticflickr.com\/7422\/26585288000_62cc8cbf51.jpg","height_m":"334","width_m":"500"}
  ])
