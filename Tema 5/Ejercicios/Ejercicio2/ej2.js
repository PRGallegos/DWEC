document.getElementById('modifyButton').addEventListener('click', function () {
    const contenido2 = document.getElementById('contenido_2');

    // Crear nuevo parrafo
    const newP = document.createElement('p');
    newP.title = "Titulo del nuevo parrafo";
    newP.appendChild(document.createTextNode("Este es la primera parte de mi nuevo parrafo"));
    newP.appendChild(document.createElement('br'));
    newP.appendChild(document.createTextNode("Este es la segunda parte de mi nuevo parrafo"));

    // Crear texto en negrita
    const newB = document.createElement('b');
    newB.appendChild(document.createTextNode("Este es el texto en negrita."));

    // Añadir elementos al parrafo contenido_2
    contenido2.appendChild(newP);
    contenido2.appendChild(newB);

    // Cambiar contenido del parrafo contenido_3
    document.getElementById('contenido_3').textContent = "Este es el nuevo contenido del parrafo 3";

    // Eliminar el parrafo contenido_1
    document.getElementById('contenido_1').remove();
});