app.controller('Equipa', function($scope) {
    $scope.equipa = [];
    let inv = [];
    $scope.init = () => {

        for(var i = 0; i < 20; i++){
            $scope.equipa.push({
                nome: 'Diogo Fernando Micael',
                cargo: 'Presidente',
                redes: [
                    {fb: '', linkedin: ''}
                ]
            });
        }

        inv = document.getElementsByClassName("investigador");

        console.log('------------------------------------');
        console.log(inv);
        console.log(inv.length);
        console.log('------------------------------------');

        console.log(inv[0]);
        console.log(inv[1]);

    }

    $scope.destroy= () =>{
        $scope.equipa = [];
        window.onscroll = null;
    }

    window.onscroll = () => {

    };
});