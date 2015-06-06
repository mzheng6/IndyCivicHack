'use strict';

/**
 * @ngdoc function
 * @name hackforindyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hackforindyApp
 */
angular.module('hackforindyApp')
  .controller('MainCtrl', function ($http) {
   
   	var vm = this;
   	var url = 'http://localhost:8000/sql/';

   	vm.insert = function(formData)
   	{
   		var url = 'http://localhost:8000/auth/signup';
   		$http
		.post(url , {
			org : formData.org, 
			fullname : formData.fullname,
			email : formData.email,
			trans : formData.trans,
			goal : formData.goal
		})
		.success(function(data){
			if(!(data.message === "Error Occured")) {
				$window.sessionStorage.token = data.token;	
				$location.path('/profile'); // redirect (search for now, then change to profile later)
			} else {
				//  need to display to user that their signup failed
				formData.password = '';
			}
		});


   	}

  });
