/*Anterior
function info() {
    const id = window.song;  
    const detall = window.reproductor[id];

    document.getElementById("div_infoSong").innerHTML = `
        <h3>Informació de la cançó</h3>
        Nom: ${detall[0]} <br>
        Extensió: ${detall[1]} <br>
        Títol: ${detall[2]}
    `;
}*/


function info() {
    const id = window.song;  
    const reproductor = window.reproductor;
    const detall = reproductor[id];
    document.getElementById("div_infoSong").innerHTML = `
        <h3>Informació de la cançó</h3>
        <p><strong>Nom:</strong> ${detall[0]}</p>
        <p><strong>Extensió:</strong> ${detall[1]}</p>
        <p><strong>Títol:</strong> ${detall[2]}</p>
    `;

    const esFavorit = detall[3] === "favorit"; 
    document.getElementById("div_favorit_control").innerHTML = `
        <h2>Estat de Preferit</h2>
        <label for="favorit_check">Marcar com a preferit:</label>
        <input type="checkbox" 
               id="favorit_check" 
               ${esFavorit ? 'checked' : ''} 
               onchange="canviarEstatFavorit(${id}, this.checked)">
    `;
}


function canviarEstatFavorit(songIndex, marcada) {
    const reproductor = window.reproductor;
    reproductor[songIndex][3] = marcada ? "favorit" : "";   
    window.opener?.llistaFavorits();
}