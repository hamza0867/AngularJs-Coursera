(function() {
  'use strict';

  angular
    .module('MenuApp')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['items'];

  function CategoriesController(items) {
    const ctgs = this;
    ctgs.items = items;
  }
})();
