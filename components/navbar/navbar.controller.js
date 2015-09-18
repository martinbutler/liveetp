'use strict';

angular.module('liveEventsThroughPhotosApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/',
      'classInfo': 'fa fa-home'
    }, {
      'title': 'Select a Location',
      'link': '/location',
      'classInfo': 'fa fa-map-marker'
    }, {
      'title': 'View Photos',
      'link': '/photos',
      'classInfo': 'fa fa-camera'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });