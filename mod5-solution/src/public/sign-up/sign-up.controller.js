(function() {
  'use strict';

  angular.module('public').controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService', 'ClientInfoService'];
  function SignUpController(MenuService, ClientInfoService) {
    const $ctrl = this;
    $ctrl.fName = '';
    $ctrl.lName = '';
    $ctrl.email = '';
    $ctrl.phone = '';
    $ctrl.menuNumber = '';
    $ctrl.menuExists = true;
    $ctrl.formValid = false;
    const user = {
      fName: $ctrl.fName,
      lName: $ctrl.lName,
      email: $ctrl.email,
      phone: $ctrl.phone,
      menuNumber: $ctrl.menuNumber
    };
    $ctrl.submit = function() {
      MenuService.getMenuItem($ctrl.menuNumber)
        .then(res => {
          $ctrl.menuExists = true;
        })
        .then(res => {
          ClientInfoService.saveInfo(user);
          $ctrl.formValid = true;
        })
        .catch(err => {
          $ctrl.menuExists = false;
          $ctrl.formValid = false;
        });
    };
  }
})();
