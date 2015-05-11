'use strict';
rc.App.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/solution', {
            templateUrl: '/app/templates/solution.html'
        })
        .when('/', {
            templateUrl: '/app/templates/instructions.html'
        })
        .otherwise({
            redirectTo: '/',
        });

}]);
