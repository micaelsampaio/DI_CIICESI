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
            console.log("Change page " + page);

            switch (page) {
                case '/':
                    return $scope.showPage($scope.pageMain, "CIICESI", "/");
                case 'equipa':
                    $scope.showPage($scope.pageEquipa, "CIICESI - Equipa", "#equipa");

                    return  angular
                    .element(document.getElementById('Equipa'))
                    .scope()
                    .init()
                case 'projetos':
                    return $scope.showPage($scope.pageProjetos, "CIICESI - Projetos", "#projetos");
                case 'novidades':
                    return $scope.showPage($scope.pageNovidades, "CIICESI", "#novidades");
                default:
                    $scope.showPage($scope.pageMain, "CIICESI", "/");
            }
        }

        $scope.hidePage($scope.pageEquipa);
        $scope.hidePage($scope.pageNovidades);
        $scope.hidePage($scope.pageProjetos);

        let url = window
            .location
            .hash
            .split('#')[1];

        $scope.Link(url);
    });