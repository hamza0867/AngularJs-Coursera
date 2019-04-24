(function() {
  'use strict';

  angular.module('MenuApp').controller('ItemsController', ItemsController);

  ItemsController.$inject = ['list'];

  function ItemsController(list) {
    const ctgs = this;
    ctgs.list = list;
  }
})();
