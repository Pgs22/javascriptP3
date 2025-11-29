
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
//Recorrer el array de llistat de cançons i veure en consola
for(let k=0;k<reproductor.length;k++ ){
    console.log(k+": "+reproductor[k]);
}

/** EXERICICI 2
 * a. En Exercici02.html
 * ii. Mostra el llistat de àudios disponibles (hauràs de tenir l’arxiu i la informació a l’array)

*/
const div_llista_audios_disponibles= document.getElementById("llista_audios_disponibles");
function generaLlistaAudios(){
    let llistat = '<ul>';
    for (let i = 0; i < reproductor.length; i++) {
        const nom = reproductor[i][0];
        const favoritId = `c${i}`; //Afegim el c davant per diferenciar de la resta quan cridem al id
        llistat += `<li>Nom: ${nom}
         <button onclick="veureInfo(${i})"> Veure </button>
         <button onclick="tancaInfo()"> Tancar </button>
         <input type="checkbox" id="${favoritId}" name=${favoritId} value="on" onchange="afegirFavorit(${i}, this.checked)">
         <label for="${favoritId}">Favorit</label>
        </li> `;
    }
    llistat += '</ul>';
    div_llista_audios_disponibles.innerHTML = llistat;
}
generaLlistaAudios();



/**EXERICICI 2
 * a. En Exercici02.html
 * iii. Permet que l’usuari pugui reproduir, aturar, posar en pausa i pujar i baixar el
          volum de qualsevol àudio de l’array. 
*/

/**
 * BOTONS MUSIC
 */
const btnPlay = document.getElementById("btn_play");
const btnPause = document.getElementById("btn_pause");
const btnStop = document.getElementById("btn_stop");
/**
 * PROPIETATS MUSIC
 */
let audio_actual = "";
const idAudio = document.getElementById("idAudio");
const selectMusic = document.getElementById("LlistatAudios");
/**
 * CONTROLS VOLUM
 */
const inputVolum = document.getElementById("inp_volum_Audio");
const btnVolumUp = document.getElementById("btnVolumUp");
const btnVolumDown = document.getElementById("btnVolumDown");
const btnMute = document.getElementById("btnMute");
inputVolum.value = idAudio.volume; //Iniciar per defecte a 1
let volumAbansDeSilenciar = 1; //Variable per guardar el volum abans de silenciar
/**
 * FUNCIO PLAY
 */
btn_play.onclick=playMusic;
function playMusic() {
    //Comprovar si la musica seleccionada es la actual
    if(selectMusic.value === audio_actual){
        idAudio.play();
        return;
    }    
    //Comprovar primer si la musica es la selecciona
    if(idAudio.src!= selectMusic.value){
        idAudio.src = selectMusic.value;
        idAudio.load(); //Carga la nova canço
        audio_actual = selectMusic.value;
    }
}
/**
 * FUNCIO PAUSAR
 */
btnPause.onclick = pausarMusic;
function pausarMusic() {
    idAudio.pause();
}
/**
 * FUNCIO ATURAR
 */
btnStop.onclick = aturarMusic;
function aturarMusic() {
    idAudio.pause();
    idAudio.currentTime = 0;
}

/**
 * FUNCIO VOLUM A MUTE
 */
btnMute.onclick = clk_btn_mute;
function clk_btn_mute(){
    //Es el mateix que fer un if/else i intercanviar, si es true a false, si es false a true
    idAudio.muted = !idAudio.muted;
}
/**
 * FUNCIO VOLUM A UP
 */
btnVolumUp.onclick = clk_btn_vol_up;
function clk_btn_vol_up(){    
    if(idAudio.volume<=0.9){
        idAudio.volume += 0.1;
    }
    //Per aplicar-lo a la barra desliçant del volum
    inputVolum.value = idAudio.volume;
}
/**
 * FUNCIO VOLUM A DOWN
 */
btnVolumDown.onclick = clk_btn_vol_down;
function clk_btn_vol_down(){
    if(idAudio.volume > 0){
        idAudio.volume -= 0.1;
    }
    //Per aplicar-lo a la barra desliçant del volum
    inputVolum.value = idAudio.volume;
}
/**
 * FUNCIO VOLUM A UP/DOWN
 */
inputVolum.onchange = clk_inp_vol_Audio;
function clk_inp_vol_Audio(){
    const nuevoVolumen = parseFloat(inputVolum.value);
    idAudio.volume = nuevoVolumen;
    if (nuevoVolumen > 0) {
        idAudio.muted = false;
        volumAbansDeSilenciar = nuevoVolumen;
    }
}


/**EXERICICI 2
 * a. En Exercici02.html
 * v. Permet que l’usuari pugui tancar i obrir “Info.html” per veure la informació de
qualsevol àudio.
*/

let ref_info;
function veureInfo(id_song) { //parametre d'entrada es la posicio on tenim les dades
    let altura = screen.availHeight;
    let amplada = screen.availWidth;
    let width_window = 600; 
    let height_window = 400;

    ref_info = window.open("info.html", "Info",
        `width=`+width_window+`px,height=`+height_window+`px,toolbar=no,scrollbars=no, top=`
        +(altura-height_window/2)+`px, left=`+(amplada-width_window/2)+`px`);

    ref_info.onload = () => {
        // Guardamos el índice en la ventana hija
        ref_info.song = id_song;

        // También pasamos el array completo
        ref_info.reproductor = reproductor;

        // Ahora llamamos a una función dentro de info.js
        ref_info.info();
    };
}
function tancaInfo() {
    ref_info.close();
}

/**EXERICICI 2
 * a. En Exercici02.html
 * v. 1p] Mostrar els àudios que l’usuari hagi marcat com a preferit.
*/
function afegirFavorit(id_song, marca) { //parametre d'entrada es la posicio on tenim les dades i marca boolean del checkbox
    reproductor[id_song][3] = marca ? "favorit" : ""; //Simplificat amb un ternari
    /*    //Fem un if else per si el desmarca de favorits 
    if(marca){
        reproductor[id_song][3] = "favorit";
    }else {
        //reproductor[id_song].splice(3, 1); //Fem servir splice per eliminar la posicio, pero requereix mes recursos, fem una array amb els favorits
        reproductor[id_song][3] = "";
    }*/
    llistaFavorits();
}

const div_llista_favorits = document.getElementById("llista_favorits");
function llistaFavorits(){
    let llistat = '<ul>';
    for(let i=0; i < reproductor.length; i++){
        const favorit = reproductor[i][3] === "favorit"; // Per que entri en if si ha guardat si es true
        if(favorit){
            console.log(reproductor[i][0]);
            const nom = reproductor[i][0];
            llistat += div_llista_favorits.innerHTML = `
                <li>Nom: ${nom} </li>
                `;
        }
    }
    llistat += '</ul>';
    div_llista_favorits.innerHTML = llistat; // Tot el afegin a la variable dintre del for / if
}


/**EXERICICI 2
 * a. En Exercici02.html
 * vi. 1,5] Permet afegir/treure i ordenar l’àudio d’una llista privada de reproducció.
*/
let llista = new Array;
const div_llista_reproduccio = document.getElementById("llista_reproduccio");
function generaLlistaReproduccio(){
    let llistat = '<ul>';
    for (let i = 0; i < reproductor.length; i++) {
        const nom = reproductor[i][0];
        llistat += `<li>Nom: ${nom}
         <button onclick="afegirAudio(${i})"> Afegir </button>
         <button onclick="treureAudio()"> Treure </button>
         <button onclick="pujar(${i})">Pujar</button>
         <button onclick="baixar(${i})">Baixar</button>
        </li> `;
    }
    llistat += '</ul>';
    div_llista_audios_disponibles.innerHTML = llistat;
}
generaLlistaReproduccio();

function afegirAudio(id_song){
    llista.push(reproduccio[id_song][0]); //Afegeix el nom del audio
}
function treureAudio(id_song){
    let audio = reproductor[id_song][0]; //Guardem el nom del audio a la variable
    const audioLlista = reproductor.indexOf(audio); //Busca l'audio a la llista de reproduccio
    if(audioLlista){
        llista.splice(id_song);
    }
}
function pujar(id_song){ //Falta hacer esta a medio construir resto falta provar..
    let posOrigen = id_song + 1;
    let audio = reproduccio[id_song][0];
}
function baixar(id_song){

}

/**EXERICICI 2
 * a. En Exercici02.html
 * vii. 1,5] Permet crear/esborrar vàries llistes de reproducció. 

*/

/**EXERICICI 2
 * b.En Info.html
 * i. 1p] Mostra la informació de l’àudio seleccionat per l’usuari.
 * ii. 1] Mostra si l’àudio s’ha marcat com a preferit o no.
 * iii. 2p] Permet marcar o desmarcar l’àudio com a preferit.
*/

