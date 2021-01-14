(function (){
'use strict';

angular.module('ConversionsApp', ['ui.router', 'Login', 'Conversions']);

angular.module('ConversionsApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/conversions');

  // Set up UI states
  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'js/login/login.template.html',
      controller: 'LoginController as $ctrl'
    })

    .state('conversions', {
      url: '/conversions',
      templateUrl: 'js/conversions/conversions.template.html',
      controller: 'ConversionsController as $ctrl'
    });
}

})();
