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
    var timeline = $http.get('http://localhost:8080/read');
    timeline.then(function(timeline){
      console.log(timeline.data);
      vm.list = timeline.data;
    })
  }

}
