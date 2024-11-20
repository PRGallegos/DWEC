// Pedir al usuario que introduzca una palabra
let palabra = prompt("Introduce una palabra: ");
let limpio = "";

// Recorrer cada carácter de la palabra introducida
for (let i = 0; i < palabra.length; i++) {
  // Comprobar si el carácter es una letra (opcional)
  if (palabra[i] !== " ") { // Solo se eliminan los espacios en blanco
    limpio += palabra[i].toLowerCase(); // Convertir a minúscula 
  }
}

let invertido = "";

// Invertir la cadena 
for (let i = limpio.length - 1; i >= 0; i--) {
  invertido += limpio[i]; // Añadir cada carácter en orden inverso
}

// Comprobar si la cadena limpia es igual a su versión invertida
if (limpio === invertido) {
  document.write("La palabra \"" + palabra + "\" es un palíndromo.");
} else {
  document.write("La palabra \"" + palabra + "\" no es un palíndromo.");
}
