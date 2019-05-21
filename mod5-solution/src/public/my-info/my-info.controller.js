(function() {
  'use strict';

  angular.module('public').controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['user'];

  function MyInfoController(user) {
    const $ctrl = this;
    $ctrl.user = user;
    if (user) {
      $ctrl.menuShortName = user.menu.short_name.charAt(0);
    }
  }
})();
