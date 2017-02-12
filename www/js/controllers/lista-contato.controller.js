'use strict';

angular.module ('app.controllers.lista-contato',[]).controller('contactCtrl', function($scope, $ionicModal, $state) {
    // No need for testing data anymore
    $scope.contacts = [];

    // Create and load the Modal
    $ionicModal.fromTemplateUrl('new-contact.html', function(modal) {
      $scope.contactModal = modal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });


    // Called when the form is submitted
    $scope.createContact = function(contact) {
      $scope.contacts.push({
        name: contact.name,
        tel: contact.tel,
        img: contact.img
      });
      $scope.contactModal.hide();
      //window.localStorage['tasks'] = angular.toJson($scope.tasks);
    };

    // Open our new task modal
    $scope.newContact = function() {
     // $scope.contactModal.show();
     $state.go('novo-contato');

    };

    // Close the new task modal
    $scope.closeNewContact = function() {
      $scope.contactModal.hide();
}});