
/**
 * EXERICICI 2
 * Crea i programa un reproductor de música amb les següents funcionalitats dividides en dos html:
 * a. En Exercici02.html
 * i. Hauràs de definir un array amb informació sobre el nom de diferents arxius d’àudio ,
    la seva extensió i el seu títol. 
*/

//Array reproductor para guardar las canciones
const reproductor = new Array();
//Informació del llistat de cançons
reproductor[0]=["DRUMC0.WAV", "wav", "titol"];
reproductor[1]=["FANFARE1.WAV", "wav", "titol"];
reproductor[2]=["ek_raat_vilen.mp3", "mp3", "titol"];
//Veure en consola
console.log(reproductor)
//Recorrer el array de listado de canciones
for(let k=0;k<reproductor.length;k++ ){
    console.log(k+": "+reproductor[k]);
}

/** EXERICICI 2
 * a.
 * ii. Mostra el llistat de àudios disponibles (hauràs de tenir l’arxiu i la informació a l’array)

*/
const div_llista_propietats= document.getElementById("llista_propietats");
function generaLlistaPropietats(){
    let llistat = '<ul>';
    for (let i = 0; i < reproductor.length; i++) {
        const nom = reproductor[i][0];
        const extensio = reproductor[i][2];
        const titol = reproductor[i][3];
        
        llistat += `<li>Nom: ${nom} (Arxiu: ${extensio} Titol: ${titol})
         <button onclick="veureInfo(${i})"> Veure </button>
        </li> ` ;
    }
    llistat += '</ul>';
    div_llista_propietats.innerHTML = llistat;
}
generaLlistaPropietats();



/**EXERICICI 2
 * a.
 * iii. Permet que l’usuari pugui reproduir, aturar, posar en pausa i pujar i baixar el
          volum de qualsevol àudio de l’array. 
*/

const idAudio = document.getElementById("idAudio");
const selectMusic = document.getElementById("LlistatAudios");

const btnPlay = document.getElementById("btn_play");
const btnPause = document.getElementById("btn_pause");
const btnStop = document.getElementById("btn_stop");

const inputVolum = document.getElementById("inp_volum_Audio");
const btnVolumUp = document.getElementById("btnVolumUp");
const btnVolumDown = document.getElementById("btnVolumDown");
const btnMute = document.getElementById("btnMute");

let audio_actual = idAudio.currentSrc.split('/').pop();

btnPlay.onclick = playMusic;
btnPause.onclick = pausarMusic;
btnStop.onclick = aturarMusic;

btnMute.onclick = clk_btn_mute;
btnVolumUp.onclick = clk_btn_vol_up;
btnVolumDown.onclick = clk_btn_vol_down;
inputVolum.oninput = clk_inp_vol_Audio;

function playMusic() {
    const nuevaSeleccion = selectMusic.value;
    if (nuevaSeleccion !== audio_actual) {
        idAudio.src = nuevaSeleccion;
        idAudio.load();
        audio_actual = nuevaSeleccion;
    }
    idAudio.play();
    console.log(`Reproduint: ${audio_actual}`);
}

function pausarMusic() {
    idAudio.pause();
    console.log("Pausa");
}

function aturarMusic() {
    idAudio.pause();
    idAudio.currentTime = 0;
}

function clk_btn_mute() {
    idAudio.muted = !idAudio.muted;
}

function clk_btn_vol_up() { 
    if (idAudio.volume < 1) {
        idAudio.volume = Math.min(1, idAudio.volume + 0.1);
    }
    inputVolum.value = idAudio.volume;
}

function clk_btn_vol_down() {
    if (idAudio.volume > 0) {
        idAudio.volume = Math.max(0, idAudio.volume - 0.1);
    }
    inputVolum.value = idAudio.volume;
}

function clk_inp_vol_Audio() {
    const nuevoVolumen = parseFloat(inputVolum.value);
    idAudio.volume = nuevoVolumen;
    
    if (nuevoVolumen > 0) {
        idAudio.muted = false;
        btnMute.textContent = "Silenciar";
    }
}
//Iiniciar per defecte a 1
inputVolum.value = idAudio.volume;


/**EXERICICI 2
 * a.
 * v. Permet que l’usuari pugui tancar i obrir “Info.html” per veure la informació de
qualsevol àudio.
*/
let song;
function veureInfo(id_song) {
    song = id_song
    let info = window.open("info.html", "obre") 
    console.log(id_song, reproductor[id_song][0]);
}



/**EXERICICI 2
 * a.
 * v. 1p] Mostrar els àudios que l’usuari hagi marcat com a preferit.

*/


/**EXERICICI 2
 * a.
 * vi. 1,5] Permet afegir/treure i ordenar l’àudio d’una llista privada de reproducció.
*/


/**EXERICICI 2
 * a.
 * vii. 1,5] Permet crear/esborrar vàries llistes de reproducció. 

*/

/**EXERICICI 2
 * b.En Info.html
 * i. 1p] Mostra la informació de l’àudio seleccionat per l’usuari.
 * ii. 1] Mostra si l’àudio s’ha marcat com a preferit o no.
 * iii. 2p] Permet marcar o desmarcar l’àudio com a preferit.
*/












//anotaciones
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