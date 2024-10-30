

let alto = parseInt(prompt("Introduce el alto del tablero:"));

let ancho = parseInt(prompt("Introduce el ancho del tablero:"));

for (let fila = 0; fila < alto; fila++) {
    for (let columna = 0; columna < ancho; columna++) {
        if ((fila + columna) % 2 == 0) {
            document.write("_"); // Espacio para casillas blancas
        } else {
            document.write("#"); // "#" para casillas negras
        }
    }
    document.write("<br>"); // Nueva línea al final de cada fila
}
