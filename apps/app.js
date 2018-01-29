var app = angular.module('ciicesi-app', ["ngRoute"]).config(['$provide', function ($provide) {
    $provide.decorator('$browser', ['$delegate', function ($delegate) {
        $delegate.onUrlChange = function () { };
        $delegate.url = function () { return "" };
        return $delegate;
    }]);
}]);