(function() {
  'use strict';

  angular.module('common').service('ClientInfoService', ClientInfoService);

  function ClientInfoService() {
    const service = this;
    service.user = null;
    service.saveInfo = function(user) {
      service.user = user;
    };
    service.getUser = function() {
      return service.user;
    };
  }
})();
