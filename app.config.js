(function(){
  'use strict';

  angular
    .module('#').config(config);

    function config($stateProvider, $urlRouterProvider, $locationProvider){

      $locationProvider.html5Mode(true);
      $stateProvider
        .state({
          name: 'home',
          url: '/',
          component: 'home'
        });
    }

})();
