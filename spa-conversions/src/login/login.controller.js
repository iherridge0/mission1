(function () {
'use strict';

angular.module('Login')
.controller('LoginController', LoginController);

LoginController.$inject = ['$state', '$window' ]
function LoginController($state, $window){
  var $ctrl = this;

  $ctrl.login = {}

  $ctrl.$onInit = function() {
    console.log("LoginController.$onInit");
  }

  $ctrl.authenticateUser = function () {
    console.log("LoginController.authenticateUser()");

    $state.go('conversions');


    // var promise = AuthService.login($ctrl.login);
    //
    // promise.then(function (response){
    //   var data = response.data;
    //   AuthService.auth.token = data.token;
    //   $window.localStorage["token"] = data.token;
    //   console.log(response);
    //   $state.go('todo-list')
    // }, function (error){
    //   console.log(error)
    //   $state.go('login')
    // });

  };
};


})();
