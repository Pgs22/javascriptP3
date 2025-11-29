function info() {
    // "song" y "reproductor" llegan desde la ventana padre
    const id = window.song;  
    const detall = window.reproductor[id];

    document.getElementById("div_infoSong").innerHTML = `
        <h3>Informació de la cançó</h3>
        Nom: ${detall[0]} <br>
        Extensió: ${detall[1]} <br>
        Títol: ${detall[2]}
    `;
}