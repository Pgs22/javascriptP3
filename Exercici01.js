//Permet iniciar la finestra Despertador.html en el que es mostri la hora actual
//https://www.w3schools.com/jsref/met_win_open.asp
let btn_mostra_despertador = document.getElementById("btn_mostra_despertador");
let tanca = document.getElementById("btn_tanca_despertador");
let ref_window;
btn_mostra_despertador.onclick = function(){
    ref_window = window.open("Despertador.html","Despertador","width=300px,heigth=300px,toolbar=no,scrollbars=no");
}
btn_tanca_despertador.onclick = function(){
    ref_window.close();
}