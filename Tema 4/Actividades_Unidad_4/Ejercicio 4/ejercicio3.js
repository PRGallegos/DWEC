document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registroForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let valid = true;

        // Validar Nombre
        const nombre = document.getElementById("nombre");
        const nombreError = document.getElementById("nombreError");
        if (nombre.value.trim() === "") {
            valid = false;
            nombreError.textContent = "El nombre no puede estar vacío.";
            nombreError.style.display = "block";
        } else {
            nombreError.style.display = "none";
        }

        // Validar Edad
        const edad = document.getElementById("edad");
        const edadError = document.getElementById("edadError");
        if (edad.value < 18 || edad.value === "") {
            valid = false;
            edadError.textContent = "Debes ser mayor de 18 años.";
            edadError.style.display = "block";
        } else {
            edadError.style.display = "none";
        }

        // Validar Género
        const genero = document.getElementById("genero");
        const generoError = document.getElementById("generoError");
        if (genero.value === "") {
            valid = false;
            generoError.textContent = "Debes seleccionar un género.";
            generoError.style.display = "block";
        } else {
            generoError.style.display = "none";
        }

        // Validar Teléfono
        const telefono = document.getElementById("telefono");
        const telefonoError = document.getElementById("telefonoError");
        const telefonoRegex = /^(?:\+?(\d{1,3}))?(\d{9,15})$/; // Formato internacional o nacional
        if (!telefonoRegex.test(telefono.value)) {
            valid = false;
            telefonoError.textContent = "Por favor, ingresa un teléfono válido.";
            telefonoError.style.display = "block";
        } else {
            telefonoError.style.display = "none";
        }

        // Validar Email
        const email = document.getElementById("email");
        const emailError = document.getElementById("emailError");
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Expresión regular para email
        if (!emailRegex.test(email.value)) {
            valid = false;
            emailError.textContent = "Por favor, ingresa un email válido.";
            emailError.style.display = "block";
        } else {
            emailError.style.display = "none";
        }

        // Si todo es válido, puedes enviar el formulario o realizar una acción
        if (valid) {
            alert("Formulario enviado con éxito.");
            form.reset();
        }
    });
});
