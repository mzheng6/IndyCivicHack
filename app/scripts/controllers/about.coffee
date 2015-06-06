'use strict'

###*
 # @ngdoc function
 # @name hackforindyApp.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the hackforindyApp
###
angular.module 'hackforindyApp'
  .controller 'AboutCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
