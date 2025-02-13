# Modelo de Objetos Predefinidos en JavaScript

JavaScript ofrece una variedad de objetos predefinidos que son fundamentales para el desarrollo web, permitiendo realizar operaciones desde la manipulación del DOM hasta cálculos matemáticos. A continuación, se presenta una descripción de la jerarquía y las funcionalidades de estos objetos.

## 1. Objeto Global (Window)

El objeto global en JavaScript es `Window`, que actúa como el contenedor principal y proporciona acceso a:

- **Funciones globales**:
  - `alert()`: Muestra un mensaje emergente al usuario.
  - `setTimeout()`: Ejecuta una función después de un tiempo específico.
  - `setInterval()`: Ejecuta una función de manera repetida en intervalos de tiempo.
- **Propiedades globales**:

  - `document`: Representa el DOM de la página, permitiendo la manipulación de su contenido.
  - `navigator`: Proporciona información sobre el navegador del usuario, como su nombre y versión.
  - `location`: Contiene la URL actual y permite redireccionar a otras páginas.

- **Manejo de ventanas y frames**: Permite crear y gestionar pop-ups o iframes.

## 2. Objeto Document

El objeto `document` es esencial para interactuar con el contenido HTML y realizar tareas como:

- **Selección de elementos**:

  - `getElementById()`: Selecciona un elemento por su ID.
  - `getElementsByClassName()`: Selecciona elementos por su clase.
  - `querySelector()`: Selecciona el primer elemento que coincide con un selector CSS.

- **Modificación de contenido**:

  - Cambiar texto con `textContent`.
  - Insertar HTML con `innerHTML`.

- **Eventos**:
  - Vincular eventos mediante `addEventListener()`, permitiendo la interacción del usuario.

## 3. Objeto Math

El objeto `Math` incluye funciones y constantes matemáticas útiles:

- **Constantes**:

  - `Math.PI`: Valor de pi.
  - `Math.E`: Base del logaritmo natural.

- **Funciones comunes**:
  - Redondeo: `Math.round()`, `Math.floor()`, `Math.ceil()`.
  - Generación de números aleatorios: `Math.random()`.
  - Funciones trigonométricas: `Math.sin()`, `Math.cos()`.

## 4. Objeto Date

El objeto `Date` permite trabajar con fechas y horas:

- **Creación de fechas**:

  - `new Date()`: Crea un objeto con la fecha y hora actuales.
  - `new Date(año, mes, día)`: Crea un objeto con una fecha específica.

- **Métodos para obtener información**:

  - `getFullYear()`: Obtiene el año.
  - `getMonth()`: Obtiene el mes (0-11).
  - `getDay()`: Obtiene el día de la semana (0-6).

- **Métodos para modificar**:
  - `setFullYear()`: Establece el año.
  - `setHours()`: Establece la hora.

## 5. Objetos String y Array

Estos objetos permiten manipular textos y colecciones de datos:

- **String**:

  - Propiedades: `length` (longitud del texto).
  - Métodos:
    - `toUpperCase()`, `toLowerCase()`: Cambia el texto a mayúsculas o minúsculas.
    - `substring()`, `split()`: Manipulación de cadenas.

- **Array**:
  - Propiedades: `length` (longitud del array).
  - Métodos:
    - `push()`, `pop()`: Añadir o eliminar elementos del final del array.
    - `sort()`, `reverse()`: Ordenar o invertir el array.

## 6. Otros Objetos Predefinidos

- **Objeto Number**: Trabaja con valores numéricos.

  - Propiedades: `MAX_VALUE`, `MIN_VALUE`.
  - Métodos: `toFixed()`, `toExponential()`.

- **Objeto Boolean**: Representa valores lógicos `true` o `false`.

## 7. Importancia de los Objetos Predefinidos

Los objetos predefinidos en JavaScript:

- Simplifican tareas comunes como el manejo de fechas, cálculos matemáticos y manipulación de texto.
- Mejoran la eficiencia del código al proporcionar métodos integrados.
- Facilitan la interacción con elementos del navegador y el contenido web.

## Conclusión

El conocimiento de los objetos predefinidos en JavaScript es esencial para cualquier desarrollador web, ya que permite aprovechar al máximo las capacidades del lenguaje y mejorar la interactividad y funcionalidad de las
