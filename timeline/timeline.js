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
    var timeline = $http.get('http://localhost:8080/timeline');
    timeline.then(function(timeline){
      vm.list = timeline.data;
    })
  }

  vm.mock = function(id) {
    var toMock = {};
    toMock.content = id;
    var mock = $http.post('http://localhost:8080/mock', toMock);
    mock.then(function(mocked) {
      getTimeline();
    })
  }

  vm.unmock = function(id) {
    var toUnmock = {};
    toUnmock.content = id;
    var unmock = $http.post('http://localhost:8080/unmock', toUnmock);
    unmock.then(function(unmocked) {
      getTimeline();
    })
  }
}
