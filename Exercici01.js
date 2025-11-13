//Permet iniciar la finestra Despertador.html en el que es mostri la hora actual
//https://www.w3schools.com/jsref/met_win_open.asp
let btn_mostra_despertador = document.getElementById("btn_mostra_despertador");
let btn_tanca_despertador = document.getElementById("btn_tanca_despertador");
let ref_window;
btn_mostra_despertador.onclick = function(){
    let altura=screen.availHeight /2;
    let amplada=screen.availWidth /2;
    let width_window=300;
    let height_window=300;
    ref_window = window.open("Despertador.html","Despertador",
        `width=`+width_window+`px,height=`+height_window+`px,toolbar=no,scrollbars=no, top=`
        +(altura-height_window/2)+`px, left=`+(amplada-width_window/2)+`px`);
    
    windown.setTimeout(function(){
        ref_window.document.body.style.backgroundColor="blue";
    }, 1000 );
}
btn_tanca_despertador.onclick = function(){
    ref_window.close();
}

const btn_set_alarma =document.getElementById("btn_set_alarma");
btn_set_alarma.onclick=function(){
    let hora = document.getElementById("inputHora").value;
    let minut = document.getElementById("inputMinut").value;
    let segon = document.getElementById("inputSegon").value;
    ref_window.document.getElementById("div_hora_alarma").innerHTML=hora+":"+minut+":"+segon;

}

let colorFilla = 'orange;';
function getColorFilla(){
    return colorFilla;
}

function mostrarHoraFilla(){
    window.setInterval(function(){
        let hora = new Date();
        ref_window.document.getElementById("div_hora_actual").innerHTML= hora.getHours()+
        ":"+hora.getMinutes()+":"+hora.getSeconds();
    }, 1000)
}