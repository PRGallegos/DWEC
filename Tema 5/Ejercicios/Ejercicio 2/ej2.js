function modificarPagina() {
    // 1. Crear un nuevo párrafo
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.title = "Título del nuevo párrafo";
    nuevoParrafo.innerHTML = "Este es la primera parte de mi nuevo párrafo<br>Este es la segunda parte de mi nuevo párrafo";

    // 2. Crear un texto en negrita
    const textoNegrita = document.createElement('b');
    textoNegrita.textContent = "Este es el texto en negrita.";

    // Añadir los nuevos elementos al párrafo "contenido_2"
    const contenido2 = document.getElementById('contenido_2');
    contenido2.appendChild(nuevoParrafo);
    contenido2.appendChild(textoNegrita);

    // 3. Cambiar el contenido del párrafo "contenido_3"
    const contenido3 = document.getElementById('contenido_3');
    contenido3.textContent = "Este es el nuevo contenido del párrafo 3";

    // 4. Eliminar el párrafo "contenido_1"
    const contenido1 = document.getElementById('contenido_1');
    contenido1.remove();
}