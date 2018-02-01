app.controller('Novidades', function ($scope) {
    $scope.novidades = [];
    $scope.container = $("#Novidades");
    

    $scope.Novidade = {
        title: 'Workshop - Value Proposition and Business Model Canvas',
        content: 'Candidato: Simão Pedro Carvalho Ribeiro No próximo dia 09 de fevereiro de 2018, pelas 11h00, Simão Pedro Carvalho Ribeiro, investigador do CIICESI, presta provas públicas de Mestrado em Engenharia Informática, com o tema: “Redes colaborativas e plataformas de apoio ao B2B e e-commerce no setor do calçado: O caso da região de Felgueiras”.   JÚRI Presidente – Doutora Dorabela Regina Chiote Ferreira Gamboa - ESTG Vogal – Doutora Ana Maria Neves Almeida Baptista Figueiredo – ISEP (arguente) Vogal – Doutor Vítor Ricardo Oliveira Santos – ESTG (orientador)',
        img: 'https://www.estg.ipp.pt/noticias/provas-publicas-de-mestrado-em-engenharia-informatica-4/image_mini',
        date: '27/01/2018',
        tag: '#noticia'
    };

    $scope.init = () => {
        $(".bg-novidades .full-news").scrollTop(0);
        $scope.novidades = [];
        $scope.novidades.push({
            img: 'https://images.unsplash.com/photo-1501228286853-24fd91e2c0c4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d87c88d58034e64b1d50bffd1302dda&auto=format&fit=crop&w=750&q=80',
            tag: '#noticia',
            date: '26/01/2018',
            title: 'Provas Públicas de Mestrado em Gestão e Internacionalização de Empresas',
            content: 'Candidato: Simão Pedro Carvalho Ribeiro No próximo dia 09 de fevereiro de 2018, pelas 11h00, Simão Pedro Carvalho Ribeiro, investigador do CIICESI, presta provas públicas de Mestrado em Engenharia Informática, com o tema: “Redes colaborativas e plataformas de apoio ao B2B e e-commerce no setor do calçado: O caso da região de Felgueiras”.   JÚRI Presidente – Doutora Dorabela Regina Chiote Ferreira Gamboa - ESTG Vogal – Doutora Ana Maria Neves Almeida Baptista Figueiredo – ISEP (arguente) Vogal – Doutor Vítor Ricardo Oliveira Santos – ESTG (orientador)',
            class: 'left',
            color: '#2C7297'
        })
        $scope.novidades.push({
            img: 'https://images.unsplash.com/photo-1453733190371-0a9bedd82893?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0b2d02a82b3f05412acd1ce347920e4f&auto=format&fit=crop&w=667&q=80',
            tag: '#workshop',
            date: '26/01/2018',
            title: 'CIICESI Workshop | Apresentações com Beamer (LaTeX)',
            content: 'O CIICESI apresenta quarta-feira, dia 17 de janeiro, um Workshop sobre como criar apresentações com elevada qualidade visual utilizando o Beamer (LaTeX). O Workshop será realizado pelo Doutor António Pinto, investigador do CIICESI e docente da ESTG. NOTA: Se possível, traga o seu computador portátil Nº LIMITE DE PARTICIPANTES: 40   INSCRIÇÃO Participação gratuita para os estudantes, ex-estudantes e docentes da ESTG 10 € para os restantes participantes Depois de proceder à inscrição deverá proceder ao envio do comprovativo de pagamento associado à inscrição para o seguinte email: sci@estg.ipp.pt',
            class: 'right',
            color: '#972A2A'
        }) 
        $scope.novidades.push({
            img: 'https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=240ea62f8829c8f46b0ffc27967109fd&auto=format&fit=crop&w=751&q=80',
            tag: '#workshop',
            date: '26/01/2018',
            title: 'CIICESI Workshop | Value Proposition and Business Model Canvas',
            content: 'O CIICESI apresenta dia 10 de janeiro de 2018, pelas 19h00, um Workshop sobre Business Model Canvas. O Workshop será realizado pelo Doutor Nelson Duarte, investigador do CIICESI e docente da ESTG. Nº LIMITE DE PARTICIPANTES: 40 INSCRIÇÃO Participação gratuita para os estudantes, ex-estudantes e docentes da ESTG 10 € para os restantes participantes Depois de proceder à inscrição deverá proceder ao envio do comprovativo de pagamento associado à inscrição para o seguinte email: sci@estg.ipp.p',
            class: 'left',
            color: '#621645'
        })
        

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
            content: novidade.content,
            img: novidade.img,
            date: novidade.date,
            tag: novidade.tag
        };

        $(".bg-novidades .full-page").off();
        $(".bg-novidades .full-page").addClass("anim-from-left");//.css('display', 'block');

        $('.bg-novidades .full-page').find(".close").on("click", () => {
            $(".bg-novidades .full-page").removeClass("anim-from-left")
            $(".bg-novidades .full-page").addClass("anim-to-right")
            $(".bg-novidades .full-page").on('animationend',
                function () {
                    $(".bg-novidades .full-page").off();
                    console.log("animation end")
                    $(".bg-novidades .full-page").removeClass("anim-to-right")
                    $(".bg-novidades .full-page").css('display', 'none');
                });

            /*window
                .history
                .pushState({
                    "html": null,
                    "pageTitle": 'treste'
                }, "", '#projetos');*/
        })
    }

    $scope.destroy = () => {
        $scope.novidades = [];
        $('.bg-novidades .full-news').off();
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
        angular
            .element(document.getElementById('Main'))
            .scope()
            .Link("/");

        $scope.destroy();
    }
});