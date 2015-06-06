'use strict'

###*
 # @ngdoc function
 # @name hackforindyApp.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the hackforindyApp
###
angular.module 'hackforindyApp'
  .controller 'MainCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
