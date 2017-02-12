// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
angular.module('ionicApp', ['ionic','ionic.ion.autoListDivider'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).directive('autoListDivider', function($timeout) {
	var lastDivideKey = "";

	return {
		link: function(scope, element, attrs) {
			var key = attrs.autoListDividerValue;

			var defaultDivideFunction = function(k){
				return k.slice( 0, 1 ).toUpperCase();
			}

			var doDivide = function(){
				var divideFunction = scope.$apply(attrs.autoListDividerFunction) || defaultDivideFunction;
				var divideKey = divideFunction(key);

				if(divideKey != lastDivideKey) {
					var contentTr = angular.element("<div class='item item-divider'>"+divideKey+"</div>");
					element[0].parentNode.insertBefore(contentTr[0], element[0]);
				}

				lastDivideKey = divideKey;
			}

			$timeout(doDivide,0)
		}
	}
});
