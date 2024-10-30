// Pedir al usuario que introduzca una nota entera
let nota = parseInt(prompt("Introduce un numero entero: "));

var result;

// Utilizar un switch para determinar la calificación basada en la nota
switch (nota) {
  case (0, 1, 2, 3, 4, 5):
    result = "Suspenso"; // Si la nota es entre 0 y 5
    break;
  case 6:
    result = "Bien"; // Si la nota es 6
    break;
  case (7, 8):
    result = "Notable"; // Si la nota es 7 u 8
    break;

  case (9, 10):
    result = "Sobresaliente"; // Si la nota es 9 o 10
    break;

  default:
    result = "Valor no valido"; // Si la nota no está en el rango permitido
}

document.write(result);
