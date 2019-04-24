(function() {
  'use strict';
  angular.module('Data').service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'API_ENDPOINT'];
  function MenuDataService($http, API_ENDPOINT) {
    const mds = this;

    mds.getAllCategories = function() {
      return $http.get(API_ENDPOINT + 'categories.json');
    };

    mds.getItemsForCategory = function(categoryShortName) {
      return $http.get(API_ENDPOINT + 'menu_items.json', {
        params: { category: categoryShortName }
      });
    };
  }
})();
