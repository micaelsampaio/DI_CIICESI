app.controller('Equipa', function ($scope) {
    $scope.equipa = [];
    let inv = [];
    $scope.init = () => {
        $scope.equipa = [];
        for (var i = 0; i < 20; i++) {
            $scope.equipa.push({
                nome: 'Diogo Fernando Micael',
                cargo: 'Presidente',
                redes: [
                    { fb: '', linkedin: '' }
                ]
            });
        }

        console.log($scope.equipa);

        $(function () {
            console.log("anim");
            onScroll();
        });

        $scope.$apply(function () { });
    }

    $scope.destroy = () => {
        $scope.equipa = [];
    }

    $(window).scroll(function (event) {
        onScroll();
    });
    const onScroll = () => {
        var scroll = $(window).scrollTop() + window.innerHeight;
        $(".investigador").each((index, value) => {
            if (index > 12)
                console.log($(value).offset().top + " > " + scroll);
            if ($(value).offset().top < scroll) {
                $(value).addClass("anim-investigador");
            }
        });
    }

    $scope.back = () => {
        angular
            .element(document.getElementById('Main'))
            .scope()
            .Link("/");

        $scope.destroy();
    }
});