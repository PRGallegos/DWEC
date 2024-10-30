function generadorCampos() {
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const inputsContainer = document.getElementById("inputs-container");
    inputsContainer.innerHTML = ""; // Limpiar entradas anteriores

    // Generar campos de texto para n números
    for (let i = 0; i < cantidad; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.placeholder = `Número ${i + 1}`;
        input.classList.add("numero-input");
        inputsContainer.appendChild(input);
    }
    // clearError();
}

document.getElementById("calcular-media").addEventListener("click", function () {
    calcularMedia(false);
});

document.getElementById("calcular-media-redondeada").addEventListener("click", function () {
    calcularMedia(true);
});

function calcularMedia(redondeada) {
    const inputs = document.querySelectorAll(".numero-input");
    let suma = 0;
    let cantidad = inputs.length;

    if (cantidad === 0) {
        showError("Por favor, ingresa la cantidad de números y los valores correspondientes.");
        return;
    }

    for (let input of inputs) {
        const valor = parseFloat(input.value);
        if (isNaN(valor)) {
            showError("Por favor, ingresa todos los valores como números válidos.");
            return;
        }
        suma += valor;
    }

    let media = suma / cantidad;
    if (redondeada) {
        media = Math.round(media);
    }
    document.getElementById("result").textContent = `La media ${redondeada ? "redondeada" : ""} es: ${media}`;
}

