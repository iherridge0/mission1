(function (){
'use strict';

angular.module('ConversionsApp')
.service('ConversionsService', ConversionsService)
.constant('ApiBasePath', "http://localhost:8765/api");

ConversionsService.$inject = ['$http', 'ApiBasePath']
function ConversionsService($http, ApiBasePath) {
  var service = this;

  service.conversions = {};

  service.$onInit = function () {
    console.log("ConversionsService started!");
  }

  service.ktoc = function(value){

    var response = $http({
      method: "POST",
      url: (ApiBasePath + `/conversions/ktoc`),
      data: value
    });

    return response;
  }

  service.ctok = function(value){

    var response = $http({
      method: "POST",
      url: (ApiBasePath + `/conversions/ctok`),
      data: value
    });

    return response;
  }

  service.mtok = function(value){

    var response = $http({
      method: "POST",
      url: (ApiBasePath + `/conversions/mtok`),
      data: value
    });

    return response;
  }

  service.ktom = function(value){

    var response = $http({
      method: "POST",
      url: (ApiBasePath + `/conversions/ktom`),
      data: value
    });

    return response;
  }
}

})();
