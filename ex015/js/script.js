function checking() { 
    var date = new Date();
    var year = date.getFullYear();
    var formYear = document.getElementById('txtyear');
    var res = document.querySelector('div#result');
    if (formYear.value.length == 0 || Number(formYear.value) > year || Number(formYear.value) <=1900) {
        window.alert('[ERRO] Please enter a valid year.');
    }else {
        var formSex = document.getElementsByName('radsex');
        var age = year - Number(formYear.value);
        var gender = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'imgsex');
        if (formSex[0].checked){   
            gender = 'Male';
            if (age >=0 && age < 10){
                //child
                img.setAttribute('src','./img/child_boy.png');
            }else if (age < 21){
                //teenage
                img.setAttribute('src','./img/teen_boy.png');
            }else if (age < 50){
                //adult
                img.setAttribute('src','./img/adult_man.png');
            }else{
                //old
                img.setAttribute('src','./img/old_man.png');
            }
        }else if (formSex[1].checked)
        {
            gender = 'Female';
            if (age >=0 && age < 10){
                //child
                img.setAttribute('src','./img/child_girl.png');
            }else if (age < 21){
                //teenage
                img.setAttribute('src','./img/teen_girl.png');
            }else if (age < 50){
                //adult
                img.setAttribute('src','./img/adult_woman.png');
            }else{
                //old
                img.setAttribute('src','./img/old_woman.png');
            }
        }   
            
        }
        res.style.textAlign = 'center';
        res.innerHTML = `It was detected ${gender} who are ${age} years old.`
        res.appendChild(img);


    }
       
    
    