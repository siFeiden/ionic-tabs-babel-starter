(function () {
  var routes = angular.module('routes', []);

  routes.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.tab1', {
      url: '/tab1',
      views: {
        'tab-tab1': {
          templateUrl: 'templates/tab-tab1.html',
          controller: 'Tab1Ctrl'
        }
      }
    })

    .state('tab.tab2', {
      url: '/tab2',
      views: {
        'tab-tab2': {
          templateUrl: 'templates/tab-tab2.html',
          controller: 'Tab2Ctrl'
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/tab1');

  });
})()
