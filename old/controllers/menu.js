
app.controller('Menu', function ($scope) {
    var started = false;
    $scope.start = function () {
        if (!started) {
            started = false;
            const menu = $('.global-menu');

            $(window).on('scroll', function (evt) {
                if (this.pageYOffset > 200) {
                    menu.removeClass('global-menu-top');
                } else {
                    menu.addClass('global-menu-top');
                }
            });
        }
    }
});

