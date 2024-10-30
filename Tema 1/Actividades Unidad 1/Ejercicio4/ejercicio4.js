let num = parseInt(prompt("Introduce un numero entero: "));

// Comprobar si el número es par o impar
if (num % 2 == 0) {
  document.write("Es par<br>");
}
else {
  document.write("Es impar<br>");
}

// Inicializar la variable para el cálculo del factorial
let fact = 1;

// Calcular el factorial utilizando un bucle for
for (let i = num; i > 1; i--) {
  fact *= i;
}

// Mostrar el resultado del factorial
document.write("El factorial de " + num + " es: " + fact);
