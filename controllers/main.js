app
    .controller('Main', function ($scope) {


        $scope.pageMain = document.getElementById("page_main");
        $scope.pageEquipa = document.getElementById("page_equipa");
        $scope.pageNovidades = document.getElementById("page_novidades");
        $scope.pageProjetos = document.getElementById("page_projetos");

        let page = {
            element: 'page_equipa',
            controller: 'Equipa',
            url: '#equipa'
        }

        $scope.currentPage = $scope.pageMain;

        $scope.hidePage = (page) => {
            page.style.display = 'none';
        }

        $scope.showPage = (page, title, url) => {
            $scope.hidePage($scope.currentPage);
            page.style.display = 'block';
            $scope.currentPage = page;

            window
                .history
                .pushState({
                    "html": page.innerHTML,
                    "pageTitle": title
                }, "", url);
        }

        $scope.Link = (page) => {

            $(function () {
                $scope.pageMain = document.getElementById("page_main");
                $scope.pageEquipa = document.getElementById("page_equipa");
                $scope.pageNovidades = document.getElementById("page_novidades");
                $scope.pageProjetos = document.getElementById("page_projetos");
            });

            let params = [];

            if (page.indexOf("/") != -1) {
                params = page.split("/");
                page = params[0];
            }
            
            console.log("Change page " + page + " " + params.length);

            switch (page) {
                case '/':
                    $('.ripple-container').css("display", "none");
                    return $scope.showPage($scope.pageMain, "CIICESI", "/");
                case 'projetos':
                    if (params.length <= 2) {
                        $scope.showPage($scope.pageProjetos, "CIICESI - Projetos", "#projetos" + (params.length==2 ? '/'+ params[1] : ''));
                        $("#Projetos").addClass("anim-fade-in");
                        return angular
                            .element(document.getElementById('Projetos'))
                            .scope()
                            .init()
                    }
                case 'equipa':
                    $scope.showPage($scope.pageEquipa, "CIICESI", "#equipa");
                    $("#Equipa").addClass("anim-fade-in");
                    return angular
                        .element(document.getElementById('Equipa'))
                        .scope()
                        .init()
                case 'novidades':
                    if (params-length <= 2) {
                        $scope.showPage($scope.pageNovidades, "CIICESI", "#novidades");
                        $("#Novidades").addClass("anim-fade-in");
                        return angular
                            .element(document.getElementById('Novidades'))
                            .scope()
                            .init()
                    }
                default:
                    $scope.showPage($scope.pageMain, "CIICESI", "/");
            }
        }

        $(document).ready(function (e) {
            $('.tab.projetos-tab').click(function (e) {
                setRipple(e.pageX, e.pageY, "projetos");
                $('.ripple').css("background-color", "#133b56");
            });
            $('.tab.novidades-tab').click(function (e) {
                setRipple(e.pageX, e.pageY, "novidades");
                $('.ripple').css("background-color", "#444");
            });
            $('.tab.equipa-tab').click(function (e) {
                setRipple(e.pageX, e.pageY, "equipa");
                $('.ripple').css("background-color", "#130900");
            });
        });

        const setRipple = (x, y, p) => {

            const ripple = $('.ripple');
            const page = p;
            $('.ripple-container').css("display", "block");
            ripple.css("top", (y - 5) + "px");
            ripple.css("left", (x - 5) + "px");
            ripple.css("width", 10 + "px");
            ripple.css("height", 10 + "px");
            ripple.addClass("anim-ripple");

            ripple.on('animationend',
                function (e) {
                    console.log("Animation end " + page);

                    $scope.Link(page);
                    setTimeout(() => {
                        ripple.removeClass("anim-ripple");
                        $('.ripple-container').css("display", "none");
                    }, 2000);
                });
        }

        $scope.init = () => {
            let url = window
                .location
                .hash
                .split('#')[1];

            console.log("url");
            $scope.Link(url);
        }
    });

app
    .controller('Index', function ($scope) {

        const assets = ['/assets/tab_ciicesi.png',
            '/assets/tab_ciicesi_color.png',
            '/assets/equipa_tab_color.png',
            '/assets/equipa_tab.png',
            '/assets/novidades_tab_color.png',
            '/assets/novidades_tab.png',
            '/assets/novidades_tab_color.png',
            '/assets/novidades_tab.png'];

        const pages = 3;
        let assetsLoaded = 0;
        let assetsToLoad = pages + assets.length;

        for (var i = 0; i < assets.length; i++) {
            var img = new Image();
            img.onload = function () {
                assetsLoaded++;
                check();
            }
            img.src = assets[i];
        }

        const check = () => {
            if (assetsLoaded >= assetsToLoad) {
                angular
                    .element(document.getElementById('Main'))
                    .scope().init();
            }
        }

        $scope.loadPage = () => {
            assetsLoaded++;
            check();
        }
    });