document.getElementById("enviarBoton").addEventListener("click", function () {
    const mensaje = document.getElementById("mensajeInput").value;

    // Crear una nueva ventana de 400x300
    const nuevaVentana = window.open("", "", "width=800,height=600");

    // Insertar el mensaje en la nueva ventana
    const parrafoMensaje = nuevaVentana.document.createElement("p");
    parrafoMensaje.textContent = mensaje;
    nuevaVentana.document.body.appendChild(parrafoMensaje);

    // Mostrar y obtener el tamaño de la ventana
    const ancho = nuevaVentana.outerWidth;
    const alto = nuevaVentana.outerHeight;
    const parrafoTamano = nuevaVentana.document.createElement("p");
    parrafoTamano.textContent = `Tamaño de la ventana: ${ancho}x${alto}`;
    nuevaVentana.document.body.appendChild(parrafoTamano);

    // Al cerrar la ventana, mostrar una alerta en la ventana principal
    nuevaVentana.onbeforeunload = function () { // Función que se ejecuta antes de cerrar la ventana
        alert("Has cerrado la ventana.");
    };
});
