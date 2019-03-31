(function() {
  'use strict';
  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    const toBuy = this;
    toBuy.shoppingList = ShoppingListCheckOffService.toBuyList;
    toBuy.buy = ShoppingListCheckOffService.buy;
    toBuy.empty = function() {
      return !toBuy.shoppingList.length;
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    const alreadyBought = this;
    alreadyBought.shoppingList = ShoppingListCheckOffService.alreadyBoughtList;
    alreadyBought.empty = function() {
      return !alreadyBought.shoppingList.length;
    };
  }

  function ShoppingListCheckOffService() {
    const shoppingListService = this;
    shoppingListService.toBuyList = [];
    for (let i = 0; i < 5; i++) {
      shoppingListService.toBuyList.push({
        name: 'cookies',
        quantity: '3'
      });
    }
    shoppingListService.alreadyBoughtList = [];
    shoppingListService.buy = function(itemIndex) {
      shoppingListService.alreadyBoughtList.push(
        shoppingListService.toBuyList.splice(itemIndex, 1)[0]
      );
    };
  }
})();
