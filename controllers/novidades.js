app.controller('Novidades', function ($scope) {
    $scope.novidades = [];
    $scope.container = $("#Novidades");

    $scope.Novidade = {
        title: 'Workshop - Value Proposition and Business Model Canvas',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.     < br > <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://images.unsplash.com/photo-1440558547120-1c1cae0397a1?ixlib=rb-0.3.5&s=39d0555e73bf7d7b1b5223fd168883db&auto=format&fit=crop&w=750&q=80',
        date: '27/01/2018',
        tag: '#noticia'
    };

    $scope.init = () => {
        $scope.novidades = [];
        for (var i = 0; i < 10; i++) {
            $scope.novidades.push({
                img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=750&q=80',
                tag: '#workshop',
                date: '26/01/2018',
                title: 'Workshop - Value Proposition and Business Model Canvas',
                class: i % 2 == 0 ? 'left' : 'right',
                color: i % 3 == 0 ? '#2C7297' : i % 3 == 1 ? '#972A2A' : '#621645'
            });
        }

        $(function () {
            onScroll();

            $(".bg-novidades .full-news").on('scroll', function () {
                onScroll();
            });


        });

        $scope.$apply(function () { });

    }

    $scope.abrirNovidade = (novidade) => {

        $scope.Novidade = {
            title: novidade.title,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.     < br > <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img: novidade.img,
            date: novidade.date,
            tag: novidade.tag
        };


        $(".bg-novidades .full-news")[0].addEventListener('animationend', function (e) {
            console.log('');
            alert('animation ended');
        })
        $(".bg-novidades .full-page").addClass("anim-from-left");//.css('display', 'block');

        $('.bg-novidades .full-page').find(".close").on("click", () => {
            $(".bg-novidades .full-page").removeClass("anim-from-left")
            $(".bg-novidades .full-page").addClass("anim-to-right")
            $(".bg-novidades .full-news").css('display', 'block');
            $(".bg-novidades .full-news").trigger('animationend')
            $(".bg-novidades .full-news").one('animationend',
                function (e) {
                    console.log("animation end")
                    $(".bg-novidades .full-page").css('display', 'none');
                });
            /*
            window
                .history
                .pushState({
                    "html": null,
                    "pageTitle": 'treste'
                }, "", '#projetos');*/
        })
    }

    $scope.destroy = () => {
        $scope.novidades = [];
        $('.bg-novidades .full-news').on("scroll", null);
    }

    const onScroll = () => {
        var scroll = $(window).scrollTop() + window.innerHeight;

        $(".new").each((index, value) => {
            if ($(value).offset().top + 100 < scroll) {
                const c = index % 2 == 0 ? 'left' : 'right';
                $(value).children().removeClass("hidden");
                $($(value).children()[0]).addClass("anim-new-" + c);
                $($(value).children()[1]).addClass("anim-content-" + c);
            }
        });
    }

    $scope.back = () => {
        /*$(".bg-novidades").removeClass("anim-fade-in");
        $(".bg-novidades").addClass("anim-fade-out");

        setTimeout(() => {
            $('.ripple-container').css("display", "block");
            const ripple = $('.ripple');
            ripple.css("top", "-50%");
            ripple.css("left", "-50%");

           /* angular
                .element(document.getElementById('Main'))
                .scope()
                .Link("/")
            
            $(".page_main").css("display", "block");

            ripple.addClass("anim-ripple-out");
            console.log("Animation START");
            ripple.one('animationend',
                function (e) {
                    console.log("Animation END");

                    //$scope.destroy();

                    ripple.removeClass("anim-ripple-out");
                    $('.ripple-container').css("display", "none");
                });
        }, 1000);
        /*;
        
        */
    }
});