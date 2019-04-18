(function() {
  'use strict';
  angular
    .module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant(
      'API_ENDPOINT',
      'https://davids-restaurant.herokuapp.com/menu_items.json'
    )
    .directive('foundItems', FoundItems);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    const ndc = this;
    ndc.searchTerm = '';
    ndc.search = () =>
      MenuSearchService.getMatchedMenuItems(ndc.searchTerm).then(
        res => (ndc.found = res)
      );
    ndc.onRemove = index => {
      ndc.found.splice(index, 1);
    };
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

  function FoundItems() {
    const ddo = {
      scope: {
        menuItems: '<',
        onRemove: '&'
      },
      controller: FoundItemsController,
      bindToController: true,
      controllerAs: 'fic',
      templateUrl: 'found-items.html'
    };
    return ddo;
  }

  function FoundItemsController() {
    const fic = this;
    fic.menuEmpty = () => fic.menuItems && fic.menuItems.length === 0;
  }
})();
