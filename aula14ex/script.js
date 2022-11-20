function contar(){
    var start = document.getElementById('txtstart');
    var end = document.getElementById('txtend');
    var pass = document.getElementById('txtpass');
    var res = document.getElementById('result');

    if (start.value.length ==0 || end.value.length ==0 || pass.value.length==0){
    alert('Preencha todos os campos !');
    }else{
        res.innerHTML = 'Contando..'
        var st =Number(start.value);
        var ed =Number(end.value);
        var ps =Number(pass.value);

        for (var c=st; c <=ed; c += ps){
            res.innerHTML += `${c}\u{1f449}` 
        }
    }

}