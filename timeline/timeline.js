var app = angular.module('main');

app.controller("timelineController", timeline);

app.$inject = ['$http'];


function timeline($http) {
  var vm = this;

  function activate() {
    getTimeline();
  }
  activate();

  function getTimeline() {
    var timeline = $http.get('http://localhost:1337/read');
    timeline.then(function(timeline){
      vm.list = timeline.data;
    })
  }

}
