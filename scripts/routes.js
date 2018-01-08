app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "main.html"
            })
            .when("/noticias", {
                templateUrl: "news.html"
            })
            .when("/investigadores", {
                templateUrl: "investigadores.html"
            })
            .when("/eventos", {
                templateUrl: "events.html"
            })
            .when("/bolsas", {
                templateUrl: "bolsas.html"
            })

        $locationProvider.html5Mode(true);
    }]);