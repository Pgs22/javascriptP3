//creaun array ex2

//nueva cancion
song = new Array();
let nom = "nom"
let tipus = ".mp3"
let titul = "titul"
song = [nom, tipus ,nom];

//Creo array del reproductor para guardar las canciones
reproductor= new Array();
//guardo cancion song
reproductor[0]=song;
//guardo otra cancion
reproductor[1]=["titulo", "tipo", "nombre"];
//para ver en la consola
console.log(song)
console.log(reproductor)

//Recorrer el array de listado de canciones
for(let k=0;k<reproductor.length;k++ ){
    console.log(k+": "+reproductor[k]);
}

/* Recorrer el array de listado de canciones y detalle de cada cancion */
for(let k=0;k<reproductor.length;k++ ){
    for(let m=0;m<reproductor[k].length;m++ )
        console.log(m+": "+reproductor[k][m]);
}