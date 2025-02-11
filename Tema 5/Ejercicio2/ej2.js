document.getElementById('modifyButton').addEventListener('click', function () {
    const contenido2 = document.getElementById('contenido_2');

    // Crear nuevo párrafo
    const newP = document.createElement('p');
    newP.title = "Título del nuevo párrafo";
    newP.appendChild(document.createTextNode("Este es la primera parte de mi nuevo párrafo"));
    newP.appendChild(document.createElement('br'));
    newP.appendChild(document.createTextNode("Este es la segunda parte de mi nuevo párrafo"));

    // Crear texto en negrita
    const newB = document.createElement('b');
    newB.appendChild(document.createTextNode("Este es el texto en negrita."));

    // Añadir elementos al párrafo contenido_2
    contenido2.appendChild(newP);
    contenido2.appendChild(newB);

    // Cambiar contenido del párrafo contenido_3
    document.getElementById('contenido_3').textContent = "Este es el nuevo contenido del párrafo 3";

    // Eliminar el párrafo contenido_1
    document.getElementById('contenido_1').remove();
});