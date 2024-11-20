document.addEventListener("DOMContentLoaded", () => {
    const enlaces = document.querySelectorAll("a");

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", (event) => {
            event.preventDefault();
            const parrafo = enlace.previousElementSibling;

            if (parrafo.style.display === "none") {
                parrafo.style.display = "block";
                enlace.textContent = "Ocultar contenido";
            } else {
                parrafo.style.display = "none";
                enlace.textContent = "Mostrar contenido";
            }
        });
    });
});
