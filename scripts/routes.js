app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "main.html"
            })
        $locationProvider.html5Mode(true);
    }]);