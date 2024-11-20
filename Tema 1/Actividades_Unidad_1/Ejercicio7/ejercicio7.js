let valido = false;
var result;
let n1;
let n2;

// Bucle para pedir números válidos (mayores o iguales a 0)
while (!valido) {
  n1 = parseInt(prompt("Introduce un numero: "));
  n2 = parseInt(prompt("Introduce un numero: "));
  // Validar que ambos números sean no negativos
  if (n1 >= 0 && n2 >= 0) {
    valido = true;
  }
}

// Pedir el tipo de operación
let caso = prompt("Introduce un caso (suma, resta, multiplicacion, division)");
let casoValido = caso.toLocaleLowerCase();

// Realizar la operación según el caso introducido
switch (casoValido) {
  case "suma":
    result = n1 + n2;
    break;
  case "resta":
    result = n1 - n2;
    break;
  case "multiplicacion":
    result = n1 * n2;
    break;
  case "division":
    // Comprobar si n2 es cero para evitar división por cero
    if (n2 !== 0) {
      result = n1 / n2; // División
    } else {
      document.write("No se puede dividir por cero.");
    }
    break;

  default:
    document.write("Caso invalido");
    break;
}

document.write("El resultado de la " + casoValido + " es " + result);



