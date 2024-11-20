// Función para manejar los eventos del teclado
document.addEventListener("DOMContentLoaded", () => {
    const capaHola = document.getElementById("hola");
    const capaAdios = document.getElementById("adios");

    // Eventos de clic para las capas
    capaHola.addEventListener("click", (e) => {
        alert(`ID de la capa: ${e.currentTarget.id}`);
        e.stopPropagation(); // Evita propagación del evento
    });

    capaAdios.addEventListener("click", (e) => {
        alert(`ID de la capa: ${e.currentTarget.id}`);
        e.stopPropagation(); // Evita propagación del evento
    });

    // Eventos de teclado
    document.addEventListener("keydown", (e) => {
        switch (e.key.toLowerCase()) {
            case "r": // Cambiar a rojo
                capaHola.style.backgroundColor = "red";
                break;
            case "v": // Cambiar a verde
                capaHola.style.backgroundColor = "lime";
                break;
            case "a": // Cambiar a azul
                capaHola.style.backgroundColor = "blue";
                break;
            case "+": // Aumentar tamaño
                ajustarTamaño(capaHola, 10);
                break;
            case "-": // Reducir tamaño
                ajustarTamaño(capaHola, -10);
                break;
        }
    });

    // Función para ajustar el tamaño del div "hola"
    function ajustarTamaño(element, incremento) {
        const anchoActual = parseInt(window.getComputedStyle(element).width);
        const altoActual = parseInt(window.getComputedStyle(element).height);

        element.style.width = `${anchoActual + incremento}px`;
        element.style.height = `${altoActual + incremento}px`;
    }
});
