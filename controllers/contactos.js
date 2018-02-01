app.controller('Contactos', function ($scope) {
    $scope.init = () => {
        
    }
    $scope.back = () => {
        angular
            .element(document.getElementById('Main'))
            .scope()
            .Link("/");

        $scope.destroy();
    }
});