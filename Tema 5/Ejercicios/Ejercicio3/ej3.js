let selectedRow = null;

document.querySelectorAll('#table tbody tr').forEach(row => {
    row.addEventListener('click', function () {
        if (selectedRow) {
            selectedRow.classList.remove('selected');
        }
        this.classList.add('selected');
        selectedRow = this;

        document.getElementById('nombre').value = this.cells[0].textContent;
        document.getElementById('edad').value = this.cells[1].textContent;
        document.getElementById('ciudad').value = this.cells[2].textContent;
    });
});

document.getElementById('addRow').addEventListener('click', function () {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const ciudad = document.getElementById('ciudad').value;

    if (nombre && edad && ciudad) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${nombre}</td>
            <td>${edad}</td>
            <td>${ciudad}</td>
        `;
        newRow.addEventListener('click', function () {
            if (selectedRow) {
                selectedRow.classList.remove('selected');
            }
            this.classList.add('selected');
            selectedRow = this;
        });

        document.querySelector('#table tbody').appendChild(newRow);
    }
});

document.getElementById('editRow').addEventListener('click', function () {
    if (selectedRow) {
        selectedRow.cells[0].textContent = document.getElementById('nombre').value;
        selectedRow.cells[1].textContent = document.getElementById('edad').value;
        selectedRow.cells[2].textContent = document.getElementById('ciudad').value;
    }
});

document.getElementById('deleteRow').addEventListener('click', function () {
    if (selectedRow) {
        selectedRow.remove();
        selectedRow = null;
    }
});