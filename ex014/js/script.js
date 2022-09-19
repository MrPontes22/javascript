function loading() {
var msg = window.document.getElementById('msg');
var pic = window.document.getElementById('image');
var date = new Date();
var hour = date.getHours();
msg.innerHTML = `Agora são ${hour} horas`
if ( hour >= 0 && hour < 12 ) 
{    // Good morning
    pic.src = 'img/morning.png' 
    window.document.body.style.background='#BB9658'
}else if ( hour >= 12 && hour < 18) 
{    // Good afternoon
    pic.src = 'img/afternoon.png'
    window.document.body.style.background='#DF8C3F'
}else 
{    // Good evening
    pic.src = 'img/evening.png'
    window.document.body.style.background='#565758'
}
}   