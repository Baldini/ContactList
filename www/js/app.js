angular.module('app', ['ionic', 'ngCordova', 'app.routes', 'app.controllers'])

  .controller('ctrl', function($scope, $ionicModal, $state) {

$state.go('lista-contato');
    // Open our new task modal
    $scope.newContact = function() {
     // $scope.contactModal.show();
     $state.go('novo-contato');

    };

  });
