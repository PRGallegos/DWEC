document.addEventListener('DOMContentLoaded', function () {
    const modifyButton = document.getElementById('modifyButton');

    modifyButton.addEventListener('click', function () {
        const contenido2 = document.getElementById('contenido_2');

        // Crear un nuevo párrafo
        const newParagraph = document.createElement('p');
        newParagraph.title = "Título del nuevo párrafo";
        newParagraph.appendChild(document.createTextNode("Este es la primera parte de mi nuevo párrafo"));
        newParagraph.appendChild(document.createElement('br'));
        newParagraph.appendChild(document.createTextNode("Este es la segunda parte de mi nuevo párrafo"));

        // Crear un elemento en negrita
        const boldText = document.createElement('b');
        boldText.appendChild(document.createTextNode("Este es el texto en negrita."));

        // Añadir los nuevos elementos al párrafo contenido_2
        contenido2.appendChild(newParagraph);
        contenido2.appendChild(boldText);

        // Cambiar el contenido del párrafo contenido_3
        const contenido3 = document.getElementById('contenido_3');
        contenido3.textContent = "Este es el nuevo contenido del párrafo 3";

        // Eliminar el párrafo contenido_1
        const contenido1 = document.getElementById('contenido_1');
        contenido1.remove();
    });
});