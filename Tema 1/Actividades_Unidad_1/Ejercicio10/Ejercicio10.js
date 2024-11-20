/*
10. Crea un juego de piedra, papel y tijeras contra la máquina. 
El usuario introducirá una de las tres opciones. 
El programa elige una de las dos opciones restantes de forma aleatoria 
e informa de quién es el ganador. Para generar números aleatorios 
usa la función random() del objeto Math. 
*/

let valido = false
document.write("Introduce tu opción: \n");

// Bucle para asegurarse de que el usuario introduce una opción válida
do {
    humano = parseInt(prompt("Introduce tu opción: \nPIEDRA(0) / PAPEL(1) / TIJERA (2) \n"));

    if (humano == 0 || humano == 1 || humano == 2) {
        valido = true; // Opción válida
    } else {
        alert("Opción incorrecta, vuelve a intentarlo.");
    }
} while (!valido);

document.write("<br>");

// Generar la opción de la máquina aleatoriamente (0, 1 o 2)
let maquina = Math.floor(Math.random() * 3);

// Mostrar lo que el humano y la máquina eligieron
let opciones = ["PIEDRA", "PAPEL", "TIJERA"];
document.write("Has elegido: " + opciones[humano] + "<br>");
document.write("Máquina: " + opciones[maquina] + "<br>");

// Determinar el resultado del juego
if (humano == maquina) {
    document.write("EMPATE");
}
else if ((humano == 0 && maquina == 2) || // Piedra gana a Tijeras
    (humano == 1 && maquina == 0) || // Papel gana a Piedra
    (humano == 2 && maquina == 1)    // Tijeras ganan a Papel
) {
    document.write("HUMANO WINS");
} else {
    document.write("MÁQUINA WINS");
}