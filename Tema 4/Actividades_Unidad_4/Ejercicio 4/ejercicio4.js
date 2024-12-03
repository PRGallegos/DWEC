document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registroForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío por defecto

        let valid = true;

        // Validar Nombre
        const nombre = document.getElementById("nombre");
        const nombreError = document.getElementById("nombreError");
        if (nombre.value.trim() === "") {
            valid = false;
            nombreError.textContent = "El nombre es obligatorio.";
            nombreError.style.display = "block";
        } else {
            nombreError.style.display = "none";
        }

        // Validar Edad
        const edad = document.getElementById("edad");
        const edadError = document.getElementById("edadError");
        if (edad.value === "" || edad.value < 18) {
            valid = false;
            edadError.textContent = "Debes ser mayor de 18 años.";
            edadError.style.display = "block";
        } else {
            edadError.style.display = "none";
        }

        // Validar Email
        const email = document.getElementById("email");
        const emailError = document.getElementById("emailError");

        if (!email.value.includes("@")) {
            valid = false;
            emailError.textContent = "El email no es válido.";
            emailError.style.display = "block";
        } else {
            emailError.style.display = "none";
        }

        // Mostrar mensaje de éxito si es válido
        if (valid) {
            alert("Formulario enviado correctamente.");
            form.reset(); // Restablecer el formulario
        }
    });
});
