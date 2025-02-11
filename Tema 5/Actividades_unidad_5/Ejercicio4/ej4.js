const adios = document.getElementById('adios');
const hola = document.getElementById('hola');

document.addEventListener('keydown', function (event) {
    const key = event.key;
    const rect = adios.getBoundingClientRect();
    const holaRect = hola.getBoundingClientRect();

    let top = rect.top - holaRect.top;
    let left = rect.left - holaRect.left;

    switch (key) {
        case 'ArrowUp':
            if (top > 0) {
                adios.style.top = `${top - 5}px`;
            }
            break;
        case 'ArrowDown':
            if (top + rect.height < holaRect.height) {
                adios.style.top = `${top + 5}px`;
            }
            break;
        case 'ArrowLeft':
            if (left > 0) {
                adios.style.left = `${left - 5}px`;
            }
            break;
        case 'ArrowRight':
            if (left + rect.width < holaRect.width) {
                adios.style.left = `${left + 5}px`;
            }
            break;
    }
});