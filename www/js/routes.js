'user strict';

angular.module('app.routes',[]).config(function($stateProvider, $urlRouterProvider){


$stateProvider.state('novo-contato',{
url: '/novo-contato',
templateUrl: 'views/novo-contato.html',
controller: 'novoContatoController'

}).state('lista-contato',{
url: '/lista-contato',
templateUrl: 'views/lista-contato.html',
controller: 'contactCtrl'

})
});