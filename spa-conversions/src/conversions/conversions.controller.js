(function () {
'use strict';

angular.module('Conversions')
.controller('ConversionsController', ConversionsController);

ConversionsController.$inject = ['$state', 'ConversionsService']
function ConversionsController($state, ConversionsService){
  var $ctrl = this;

  $ctrl.$onInit = function() {
    console.log("ConversionsController.$onInit");
  }

  $ctrl.fromValue = 1;
  $ctrl.toValue = 1.609;

  $ctrl.fromOptions = [
      {name:'Miles'},
      {name:'Kilometers'},
      {name:'Kelvin'},
      {name:'Celcius'}
    ];

  $ctrl.fromSelected = $ctrl.fromOptions[0]; // Miles''

  $ctrl.updateFromSelected = function () {
    if($ctrl.fromSelected.name == 'Miles'){
      $ctrl.toSelected = $ctrl.toOptions[1];
      $ctrl.mtok($ctrl.fromValue, 'from');
    } else if($ctrl.fromSelected.name == 'Kilometers'){
      $ctrl.toSelected = $ctrl.toOptions[0];
      $ctrl.ktom($ctrl.fromValue, 'from');
    } else if($ctrl.fromSelected.name == 'Kelvin'){
      $ctrl.toSelected = $ctrl.toOptions[3];
      $ctrl.ktoc($ctrl.fromValue, 'from');
    } else if($ctrl.fromSelected.name == 'Celcius'){
      $ctrl.toSelected = $ctrl.toOptions[2];
      $ctrl.ctok($ctrl.fromValue, 'from');
    }
  }

  $ctrl.fromValueChange = function () {
    $ctrl.updateFromSelected();
  }

  $ctrl.toOptions = [
      {name:'Miles'},
      {name:'Kilometers'},
      {name:'Kelvin'},
      {name:'Celcius'}
    ];

  $ctrl.toSelected = $ctrl.toOptions[1]; // Kilometers''

  $ctrl.toValueChange = function () {
    $ctrl.updateToSelected();
  }

  $ctrl.updateToSelected = function () {
    if($ctrl.toSelected.name == 'Miles'){
      $ctrl.fromSelected = $ctrl.fromOptions[1];
      $ctrl.mtok($ctrl.Value, 'to');
    } else if($ctrl.toSelected.name == 'Kilometers'){
      $ctrl.fromSelected = $ctrl.fromOptions[0];
      $ctrl.ktom($ctrl.fromValue, 'to');
    } else if($ctrl.toSelected.name == 'Kelvin'){
      $ctrl.fromSelected = $ctrl.fromOptions[3];
      $ctrl.ktoc($ctrl.fromValue, 'to');
    } else if($ctrl.toSelected.name == 'Celcius'){
      $ctrl.fromSelected = $ctrl.fromOptions[2];
      $ctrl.ctok($ctrl.fromValue, 'to');
    }
  }

  $ctrl.ctok = function (value, returnType) {
    var promise = ConversionsService.ctok(value);

    promise.then(function (response){
      console.log(response)
      if(returnType == 'from') {
        $ctrl.toValue = response.data.kelvin;
      } else {
        $ctrl.fromValue = response.data.kelvin;
      }
    })
    .catch(function (error) {
      console.log("Something went terribly wrong." + error.message);
      return 0;
    });
  }

  $ctrl.ktoc = function (value, returnType) {
    var promise = ConversionsService.ktoc(value);

    promise.then(function (response){
      console.log(response)
      if(returnType == 'from') {
        $ctrl.toValue = response.data.celcius;
      } else {
        $ctrl.fromValue = response.data.celcius;
      }
    })
    .catch(function (error) {
      console.log("Something went terribly wrong." + error.message);
    });
  }

  $ctrl.mtok = function (value, returnType) {
    var promise = ConversionsService.mtok(value);

    promise.then(function (response){
      console.log(response)
      if(returnType == 'from') {
        $ctrl.toValue = response.data.km;
      } else {
        $ctrl.fromValue = response.data.km;
      }
    })
    .catch(function (error) {
      console.log("Something went terribly wrong." + error.message);
    });
  }

  $ctrl.ktom = function (value, returnType) {
    var promise = ConversionsService.ktom(value);

    promise.then(function (response){
      console.log(response)
      if(returnType == 'from') {
        $ctrl.toValue = response.data.miles;
      } else {
        $ctrl.fromValue = response.data.miles;
      }
    })
    .catch(function (error) {
      console.log("Something went terribly wrong." + error.message);
    });
  }

};


})();
