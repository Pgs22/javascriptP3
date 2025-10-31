//Permet iniciar la finestra Despertador.html en el que es mostri la hora actual
//https://www.w3schools.com/jsref/met_win_open.asp
let btn_mostra_despertador = document.getElementById("btn_mostra_despertador");
let tanca = document.getElementById("btn_tanca_despertador");
let ref_window;
btn_mostra_despertador.onclick = function(){
    let altura=screen.availHeight /2;
    let amplada=screen.availWidth;
    let with_window=300;
    let heigth_window=300;
    ref_window = window.open("Despertador.html","Despertador",
        `width=`+with_window+`px,heigth=`+heigth_window+`px,toolbar=no,scrollbars=no, top=`
        +altura+`px, left=`+amplada`px`);
}
btn_tanca_despertador.onclick = function(){
    ref_window.close();
}