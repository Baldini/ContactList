'use strict';

angular.module ('app.controllers.novo-contato',[]).controller('novoContatoController', function($rootScope,$scope, $cordovaCamera, $cordovaFile, $state) {

$scope.images = [];
$scope.contact = null;


$scope.addNewContact = function() {
	 
	$scope.contact.firstLetter = $scope.contact.name.substring(0, 1);
	$rootScope.contacts.push($scope.contact);
	console.log($scope.contact);
	console.log($rootScope.contacts[0]);
	$state.go("lista-contato");
}


$scope.urlForImage = function(imageName) {
  var name = imageName.substr(imageName.lastIndexOf('/') + 1);
  $scope.contact.imgUrl= cordova.file.dataDirectory + name;
  return $scope.contact.imgUrl;
}
 
$scope.addImage = function() {
	// 2
	var options = {
		destinationType : Camera.DestinationType.FILE_URI,
		sourceType : Camera.PictureSourceType.CAMERA, // Camera.PictureSourceType.PHOTOLIBRARY
		allowEdit : false,
		encodingType: Camera.EncodingType.JPEG,
		popoverOptions: CameraPopoverOptions,
	};
	
	// 3
	$cordovaCamera.getPicture(options).then(function(imageData) {
 
		// 4
		onImageSuccess(imageData);
 
		function onImageSuccess(fileURI) {
			createFileEntry(fileURI);
		}
 
		function createFileEntry(fileURI) {
			window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
		}
 
		// 5
		function copyFile(fileEntry) {
			var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
			var newName = makeid() + name;
 
			window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(fileSystem2) {
				fileEntry.copyTo(
					fileSystem2,
					newName,
					onCopySuccess,
					fail
				);
			},
			fail);
		}
		
		// 6
		function onCopySuccess(entry) {
			$scope.$apply(function () {
				$scope.images.push(entry.nativeURL);
			});
		}
 
		function fail(error) {
			console.log("fail: " + error.code);
		}
 
		function makeid() {
			var text = "";
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
			for (var i=0; i < 5; i++) {
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			}
			return text;
		}
 
	}, function(err) {
		console.log(err);
	});
}



});


