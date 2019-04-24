(function() {
  'use strict';
  angular.module('MenuApp').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        template: `
        <div class="row">
        <a ui-sref="categories" class="btn btn-lg btn-primary mx-auto my-4">See all our categories</a>
        </div>
        `
      })
      .state('categories', {
        url: '/categories',
        template: '<categories items="ctrl.items"></categories>',
        controller: 'CategoriesController as ctrl',
        resolve: {
          items: [
            'MenuDataService',
            function(MenuDataService) {
              return MenuDataService.getAllCategories().then(
                result => result.data
              );
            }
          ]
        }
      })
      .state('items', {
        url: '/items/{category}',
        template: '<items list="iCtrl.list"></items>',
        controller: 'ItemsController as iCtrl',
        resolve: {
          list: [
            'MenuDataService',
            '$stateParams',
            function(MenuDataService, $stateParams) {
              return MenuDataService.getItemsForCategory(
                $stateParams.category
              ).then(result => result.data.menu_items);
            }
          ]
        }
      });
  }
})();
