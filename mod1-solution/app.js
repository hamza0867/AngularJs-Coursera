(function() {
  'use strict';
  angular
    .module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    const message_empty = 'Please enter data first';
    const message_normal = 'Enjoy!';
    const message_too_much = 'Too much!';
    $scope.dishes = '';
    const dishesToArray = () =>
      $scope.dishes.split(',').filter(w => w.trim() !== '');
    $scope.message = '';
    $scope.checkDishes = () => {
      const nbDishes = dishesToArray().length;
      if (nbDishes === 0) {
        $scope.message = message_empty;
      } else if (nbDishes >= 1 && nbDishes <= 3) {
        $scope.message = message_normal;
      } else {
        $scope.message = message_too_much;
      }
    };
  }
})();
