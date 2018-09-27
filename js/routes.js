angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('main', {
    url: '/page1',
    templateUrl: 'templates/main.html',
    controller: 'mainCtrl'
  })

  .state('lois', {
    url: '/page2',
    templateUrl: 'templates/lois.html',
    controller: 'loisCtrl'
  })

  .state('angelYabut', {
    url: '/page3',
    templateUrl: 'templates/angelYabut.html',
    controller: 'angelYabutCtrl'
  })

  .state('aaronPineda', {
    url: '/page4',
    templateUrl: 'templates/aaronPineda.html',
    controller: 'aaronPinedaCtrl'
  })

  .state('ranceJeno', {
    url: '/page5',
    templateUrl: 'templates/ranceJeno.html',
    controller: 'ranceJenoCtrl'
  })

  .state('allenSoriano', {
    url: '/page6',
    templateUrl: 'templates/allenSoriano.html',
    controller: 'allenSorianoCtrl'
  })

  .state('rafaelBondoc', {
    url: '/page7',
    templateUrl: 'templates/rafaelBondoc.html',
    controller: 'rafaelBondocCtrl'
  })

  .state('addContact', {
    url: '/page8',
    templateUrl: 'templates/addContact.html',
    controller: 'addContactCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});