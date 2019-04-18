(function() {
  'use strict';
  angular
    .module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant(
      'API_ENDPOINT',
      'https://davids-restaurant.herokuapp.com/menu_items.json'
    );

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    const ndc = this;
    ndc.searchTerm = '';
    ndc.found = [];
    ndc.search = () =>
      MenuSearchService.getMatchedMenuItems(ndc.searchTerm).then(res =>
        console.log(res)
      );
  }

  MenuSearchService.$inject = ['$http', 'API_ENDPOINT'];
  function MenuSearchService($http, API_ENDPOINT) {
    const mss = this;
    mss.getMatchedMenuItems = function(searchTerm) {
      const response = $http({ url: API_ENDPOINT }).then(function(result) {
        const foundItems = result.data.menu_items.filter(item =>
          item.description.includes(searchTerm)
        );
        return foundItems;
      });
      return response;
    };
  }
})();
