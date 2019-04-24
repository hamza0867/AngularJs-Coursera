(function() {
  'use strict';
  angular.module('MenuApp').component('items', {
    templateUrl: 'src/menuapp/items/items.component.html',
    bindings: {
      list: '<'
    }
  });
})();
