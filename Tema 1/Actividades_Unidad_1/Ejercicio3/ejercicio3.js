// 1. Declaramos las variables que almacenarán los números para las tablas.
let n1 = 5; 
let n2 = 7; 
let n3 = 9;
let contador = 1;

// 2. Generamos la tabla de sumar del 5.
document.write("Tabla de sumar del 5<br>"); 
for (let i = 1; i <= 10; i++) { 
  let result = n1 + i; // Calculamos el resultado 
  document.write("[" + result + "] "); // Mostramos el resultado en pantalla
}

// 3. Agregamos un salto de línea después de la tabla de sumar.
document.write("<br>");

// 4. Generamos la tabla de multiplicar del 7.
document.write("Tabla de multiplicar del 7<br>"); // Imprimimos un encabezado para la tabla de multiplicar
for (let i = 0; i <= 10; i++) { 
  let result = n2 * i; // Calculamos el resultado de multiplicar 7 * i
  document.write("[" + result + "] "); // Mostramos el resultado en pantalla
}

// 5. Reiniciamos el contador para la tabla de dividir.
contador = 1; // Reiniciamos el contador a 1

// 6. Generamos la tabla de dividir del 9.
document.write("<br>"); // Agregamos un salto de línea
document.write("Tabla de dividir del 9<br>"); // Imprimimos un encabezado para la tabla de dividir

while (contador < 10) { // Iniciamos un bucle que se ejecuta mientras el contador sea menor que 10
  n3 /= contador; 
  document.write("[" + n3 + "] "); // Mostramos el resultado en pantalla
  contador++; // Incrementamos el contador para la siguiente iteración
}
