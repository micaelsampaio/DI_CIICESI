app.controller('Projetos', function ($scope) {
    $scope.data = [];
    $scope.projetos = [];
    $scope.focused = false;
    $scope.currentProjeto = 0;
    $scope.isNext = true;

    $scope.Projeto = {
        title: 'Workshop - Value Proposition and Business Model Canvas',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.     < br > <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: 'https://images.unsplash.com/photo-1440558547120-1c1cae0397a1?ixlib=rb-0.3.5&s=39d0555e73bf7d7b1b5223fd168883db&auto=format&fit=crop&w=750&q=80'
    };

    $scope.init = () => {
        $scope.focused = true;

        $scope.data = [{
            id: 'tecnologica-do-porto-ganha-fisco-da-lituania',
            img: 'https://images.unsplash.com/photo-1440558547120-1c1cae0397a1?ixlib=rb-0.3.5&s=39d0555e73bf7d7b1b5223fd168883db&auto=format&fit=crop&w=750&q=80',
            title: 'Projeto 0'
        }, {
            id: 'tecnologica-do-porto-ganha-fisco-da-lituania',
            img: 'https://images.unsplash.com/photo-1504271863819-d279190bf871?ixlib=rb-0.3.5&s=7a2b986d405a04b3f9be2e56b2be40dc&auto=format&fit=crop&w=334&q=80',
            title: 'Projeto 1'
        }, {
            id: 'tecnologica-do-porto-ganha-fisco-da-lituania',
            img: 'https://images.unsplash.com/photo-1516306305827-b74eb3993a0a?ixlib=rb-0.3.5&s=7745d16f992ca0523d03e2c5c7cb06d0&auto=format&fit=crop&w=666&q=80',
            title: 'Projeto 2'
        }, {
            id: 'tecnologica-do-porto-ganha-fisco-da-lituania',
            img: 'https://images.unsplash.com/reserve/Hxev8VTsTuOJ27thHQdK_DSC_0068.JPG?ixlib=rb-0.3.5&s=7cbe7a38fa72deeef209d50f5d52d571&auto=format&fit=crop&w=747&q=80',
            title: 'Projeto 3'
        },
        {
            id: 'tecnologica-do-porto-ganha-fisco-da-lituania',
            img: 'https://images.unsplash.com/photo-1473294312123-83488e2f8e8f?ixlib=rb-0.3.5&s=69871c86b65827ddfd9685024c00e562&auto=format&fit=crop&w=752&q=80',
            title: 'Projeto 4'
        },
        {
            id: 'tecnologica-do-porto-ganha-fisco-da-lituania',
            img: 'https://images.unsplash.com/reserve/bIdO4DDS4qwVF6pHN4qr__MG_1605.jpg?ixlib=rb-0.3.5&s=326364eb914f19a40c82c9e5832ee274&auto=format&fit=crop&w=750&q=80',
            title: 'Projeto 5'
        },
        {
            id: 'tecnologica-do-porto-ganha-fisco-da-lituania',
            img: 'https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?ixlib=rb-0.3.5&s=9980646201037d28700d826b1bd096c4&auto=format&fit=crop&w=400&q=80',
            title: 'Projeto 6'
        }
        ]

        const projetos_title = $(".container");
        const projetos_container = $("#projetos-container");

        $scope.projetos_gallery = $(".projetos-gallery");
        $scope.template = $(".template-projeto");
        $scope.transitionImage = $("#projeto-img-transition");


        const containerHeight = window.innerHeight * 0.8;
        const containerWidth = window.innerWidth;

        $scope.projetoWidth = Math.round(window.innerWidth * 1.3 / 4);
        $scope.projetoHeight = $scope.projetoWidth * 0.65;

        $scope.startX = $scope.projetoWidth / 2 * -1;
        $scope.currentX = 0;
        $scope.isPlaying = false;

        projetos_container.css("height", containerHeight + "px");
        $scope.projetos_gallery.css('marginTop', (containerHeight - $scope.projetoHeight) / 2 + "px");
        $scope.projetos_gallery.css('height', $scope.projetoHeight + "px");

        $scope.currentProjeto = 0;

        for (i = $scope.currentProjeto - 1; i < $scope.currentProjeto + 4; i++) {
            $scope.projetos.push(createProjeto($scope.data[mod(i, $scope.data.length)]));
        }

        $(function () {
            setProjetosPosition();
            setProjetosClick();
        });
    }
    const mod = (x, n) => (x % n + n) % n;

    const createProjeto = (projeto) => {
        var temp = $scope.template.clone();

        temp.find(".title").html(projeto.title);
        temp.css("backgroundImage", "url('" + projeto.img + "')");
        temp.attr('class', 'projeto dark');
        temp.css("width", $scope.projetoWidth + "px");
        temp.css("height", $scope.projetoHeight + "px");

        temp.onclick = function () {
            return false;
        }

        $scope.projetos_gallery.prepend(temp);
        return temp;
    }

    $scope.next = () => {
        if (!$scope.isPlaying) {
            $scope.currentProjeto = ++$scope.currentProjeto < $scope.data.length ? $scope.currentProjeto : 0;
            $scope.projetos.push(createProjeto($scope.data[mod($scope.currentProjeto + 3, $scope.data.length)]));
            startAnimation(true);
        }
    }

    $scope.prev = () => {
        if (!$scope.isPlaying) {
            $scope.currentProjeto = --$scope.currentProjeto < 0 ? $scope.data.length - 1 : $scope.currentProjeto;
            $scope.projetos.splice(0, 0, createProjeto($scope.data[mod($scope.currentProjeto - 1, $scope.data.length)]));
            startAnimation(false);
        }
    }

    $scope.back = () => {
        angular
            .element(document.getElementById('Main'))
            .scope()
            .Link("/");

        $scope.destroy();
    }
    const startAnimation = (isRight) => {
        $scope.isNext = isRight;
        $scope.isPlaying = true;
        $scope.startTime = new Date().getTime();
        $scope.startX = $scope.isNext ? ($scope.projetoWidth / 2) * -1 : ($scope.projetoWidth / 2 + $scope.projetoWidth) * -1;
        $scope.currentX = 0;
        for (var i = 0; i < $scope.projetos.length; i++) {
            $($scope.projetos[i]).addClass("dark");
        }

        animate();
    }
    const animate = () => {
        $scope.currentTime = (new Date().getTime() - $scope.startTime) / 1000;
        $scope.currentX = $scope.projetoWidth * $scope.currentTime * 2 * -1;
        setProjetosPosition();

        if ($scope.currentTime < 0.5) {
            setTimeout(animate, 1000 / 60);
        } else {
            console.log("last -> " + $scope.currentX + " " + $scope.startX);

            if ($scope.isNext) {
                $scope.currentTime = 0;
                $scope.currentX = 0;
            }

            console.log("-> " + $scope.currentX + " " + $scope.startX);

            if ($scope.isNext) {
                $scope.projetos.splice(0, 1);
            } else {
                $scope.projetos.splice($scope.projetos.length - 1, 1);
            }

            setProjetosPosition();
            setProjetosClick();
            $scope.isPlaying = false;
        }
    }

    const setProjetosClick = () => {
        console.log("set click");

        for (var i = 0; i < $scope.projetos.length; i++) {
            $($scope.projetos[i]).off();
        }

        $($scope.projetos[1]).removeClass("dark");
        $($scope.projetos[2]).removeClass("dark");

        $($scope.projetos[1]).on("click", () => {
            console.log("click")
            abrirProjeto($scope.data[mod($scope.currentProjeto, $scope.data.length)], $($scope.projetos[1]));
        })
        $($scope.projetos[2]).on("click", () => {
            console.log("click")
            abrirProjeto($scope.data[mod($scope.currentProjeto + 1, $scope.data.length)], $($scope.projetos[2]));
        })
    }

    const setProjetosPosition = () => {
        console.log("startX: " + $scope.startX + " // w: " + $scope.projetoWidth + " n: " + ($scope.isNext) + " cx:" + $scope.currentX);
        for (var i = 0; i < $scope.projetos.length; i++) {
            var p = $($scope.projetos[i]);
            p.css("left", ($scope.startX + ($scope.projetoWidth * i) + ($scope.isNext ? $scope.currentX : -$scope.currentX) + "px"));
            //console.log( i + " --> " + ($scope.startX + ($scope.projetoWidth * i) + ($scope.isNext ? $scope.currentX : -$scope.currentX) + "px"))
        }
    }

    const abrirProjeto = (projeto, img) => {

        $('.bg-projetos .full-page-content').addClass("go-down");
        $('.bg-projetos .full-page').css('display', 'block');
        $('.bg-projetos .square').addClass("square-projeto");

        console.log("teste")
        if (img) {
            const im = $('.bg-projetos .full-page').find('.img');
            im.css("marginLeft");
            im.css("marginTop");
            im.off();
            im.stop();
            var off = img.offset();
            var off2 = im.offset();
            var offx = off2.left - off.left;
            var offy = off2.top - off.top;
            console.log(offx + " " + offy);
            im.removeClass("anim-img");
            im.css("marginLeft", offx * -1 + "px");
            im.css("marginTop", offy * -1 + "px");
            setTimeout(() => { im.addClass("anim-img"); im.css("marginLeft", "0px"); im.css("marginTop", "0px") }, 100);
        }

        console.log(projeto);
        $scope.Projeto = {
            title: projeto.title,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.     < br > <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            img: projeto.img
        };
        $scope.$apply();
        console.log($scope.Projeto);

        window
            .history
            .pushState({
                "html": null,
                "pageTitle": 'treste'
            }, "", "#projetos/" + 123321321);

        $('.bg-projetos .full-page').find(".close").on("click", () => {
            $('.bg-projetos .full-page').css('display', 'none');
            $('.bg-projetos .square').removeClass("square-projeto");
            $('.bg-projetos .full-page-content').removeClass("go-down");

            window
                .history
                .pushState({
                    "html": null,
                    "pageTitle": 'treste'
                }, "", '#projetos');
        })
    }
    $scope.destroy = () => {
        $scope.focused = false;
        $scope.projetos = [];
    }
});



