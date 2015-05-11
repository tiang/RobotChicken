'use strict';
rc.App.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/app/templates/instructions.html'
        })
        .otherwise({
            redirectTo: '/',
        });

}]);
