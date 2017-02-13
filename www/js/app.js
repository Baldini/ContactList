angular.module('app', ['ionic', 'ngCordova', 'app.routes', 'app.controllers'])

  .controller('ctrl', function($rootScope,$scope, $ionicModal, $state) {


$rootScope.contacts = [];

$state.go('lista-contato');
    // Open our new task modal
    $scope.newContact = function() {
     // $scope.contactModal.show();
     $state.go('novo-contato');

    };

  });
