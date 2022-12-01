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
        if (ps <=0){
            alert('Passo inválido ! Considerando passo 1...')
            ps = 1;
        }   
        if (st < ed){
            //contagem crescente...
            for (var c=st; c <=ed; c += ps){
                res.innerHTML += `${c}\u{1f449}` 
            }
        }else{
            //contagem regressiva...
            for( var c=st; c>=ed; c -=ps){
                res.innerHTML += `${c}\u{1f449}`
            }
        }
        
        res.innerHTML +=`\u{1F3C1}`
    }

}