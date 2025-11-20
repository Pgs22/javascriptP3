//creaun array ex2

//nueva cancion
/*
song = new Array();
let nom = "nom"
let tipus = ".mp3"
let titul = "titul"
song = [nom, tipus ,nom];
console.log(song)
*/

//Creo array reproductor para guardar las canciones
reproductor= new Array();
//listado de canciones
reproductor[0]=["titulo", "wav", "DRUMC0.WAV"];
reproductor[1]=["titulo", "wav", "FANFARE1.WAV"];
reproductor[2]=["titulo", "mp3", "ek_raat_vilen.mp3"];
//para ver en la consola

console.log(reproductor)

//Recorrer el array de listado de canciones
for(let k=0;k<reproductor.length;k++ ){
    console.log(k+": "+reproductor[k]);
}

/* Recorrer el array de listado de canciones y detalle de cada cancion
for(let k=0;k<reproductor.length;k++ ){
    for(let m=0;m<reproductor[k].length;m++ )
        console.log("cancion "+m+": "+reproductor[k][m]);
}*/

const div_llista_propietats= document.getElementById("llista_propietats");
function generaLlistaPropietats(){
div_llista_propietats.innerHTML=
`<ul> <li>Cancion: `+reproductor[0]+`</li> 
<li>Cancion:` + reproductor[1] +`</li>
<li>Cancion: `+reproductor[2]+`</li>
</ul>`;
/*
return function(){console.log("Listado completo!!")}; */
}
generaLlistaPropietats();




/**
 * BOTONS MUSIC
 */
/*
const btnPlay = document.getElementById("btn_play");
const btnPause = document.getElementById("btn_pause");
const btnStop = document.getElementById("btn_stop");
*/

/**
 * PROPIETATS MUSIC
 */
/*
let audio_actual = "";
const selectMusic = document.getElementById("select_music");
const idAudio = document.getElementById("idAudio");
*/

/**
 * FUNCIO PLAY
 */
/*
btn_play.onclick=playMusic;
function playMusic() {
    //Comprobamos si la musica seleccionada es la actual
    if(selectMusic.value === audio_actual){
        idAudio.play();
        return;
    }    
    //Comprobamos primero si la musica es la selecciona
    if(idAudio.src!= selectMusic.value){
        idAudio.src = selectMusic.value;
        idAudio.load(); //Carga la nueva cancion
        audio_actual = selectMusic.value;
    }
}
*/

/**
 * FUNCIO PAUSAR
 */
/*
btn_pause.onclick=pausarMusic;
function pausarMusic() {
    idAudio.pause();
}
*/

/**
 * FUNCIO ATURAR
 */
/*
btn_stop.onclick=aturarMusic;
function aturarMusic() {
    idAudio.pause();
    idAudio.currentTime = 0;
    idAudio.loop = false;
}
    */

/**
 * CONTROLS VOLUM
 */
// Elementos de control de volumen
/*
const inputVolum = document.getElementById("inp_volum_Audio");
const btnVolumUp = document.getElementById("btnVolumUp");
const btnVolumDown = document.getElementById("btnVolumDown");
const btnMute = document.getElementById("btnMute");

// Variable para guardar el volumen antes de silenciar
let volumAbansDeSilenciar = 1;

*/

/**
 * FUNCIO VOLUM A MUTE
 */
/*
btnMute.onclick = clk_btn_mute;
function clk_btn_mute(){
    //Es lo mismo que hacer un if/else e intercambiar, si es true a false, si es false a true
    idAudio.muted = !idAudio.muted;
}
*/

/**
 * FUNCIO VOLUM A UP
 */
/*
btnVolumUp.onclick = clk_btn_vol_up;
function clk_btn_vol_up(){    
    if(idAudio.volume<=0.9){
        idAudio.volume += 0.1;
    }
    //Para aplicarlo a la barra deslizante del volumen
    inputVolum.value = idAudio.volume;
}
*/

/**
 * FUNCIO DVOLUM A DOWN
 */

/*
btnVolumDown.onclick = clk_btn_vol_down;
function clk_btn_vol_down(){
    if(idAudio.volume>=0.1){
        idAudio.volume -= 0.1;
    }
    //Para aplicarlo a la barra deslizante del volumen
    inputVolum.value = idAudio.volume;
}
    */

/**
 * FUNCIO VOLUM A UP/DOWN
 */
/*
inputVolum.onchange = clk_inp_vol_Audio;
function clk_inp_vol_Audio(){
    const nuevoVolumen = parseFloat(inputVolum.value);
    idAudio.volume = nuevoVolumen;
    if (nuevoVolumen > 0) {
        idAudio.muted = false;
        volumAbansDeSilenciar = nuevoVolumen;
    }
}
*/