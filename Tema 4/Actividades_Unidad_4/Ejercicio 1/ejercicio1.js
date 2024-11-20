// Agregar eventos para las capas
document.addEventListener("DOMContentLoaded", () => {
    const capaHola = document.getElementById("hola");
    const capaAdios = document.getElementById("adios");

    // Evento para la capa "hola"
    capaHola.addEventListener("click", (e) => {
        alert(`ID de la capa: ${e.currentTarget.id}`);
    });

    // Evento para la capa "adios"
    capaAdios.addEventListener("click", (e) => {
        alert(`ID de la capa: ${e.currentTarget.id}`);
        e.stopPropagation();
    });
});
