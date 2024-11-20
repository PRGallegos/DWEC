// Clase Persona
class Persona {
    constructor(nombre, apellidos, genero, fechaNacimiento) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.genero = genero;
        this.fechaNacimiento = fechaNacimiento;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        if (typeof nombre !== "string" || nombre.trim() === "") {
            throw new Error("El nombre debe ser una cadena no vacía.");
        }
        this._nombre = nombre.trim();
    }

    get apellidos() {
        return this._apellidos;
    }

    set apellidos(apellidos) {
        if (typeof apellidos !== "string" || apellidos.trim() === "") {
            throw new Error("Los apellidos deben ser una cadena no vacía.");
        }
        this._apellidos = apellidos.trim();
    }

    get genero() {
        return this._genero;
    }

    set genero(genero) {
        const generosPermitidos = ["masculino", "femenino", "otro"];
        if (!generosPermitidos.includes(genero.toLowerCase())) {
            throw new Error("El género debe ser 'masculino', 'femenino' u 'otro'.");
        }
        this._genero = genero.toLowerCase();
    }

    get fechaNacimiento() {
        return this._fechaNacimiento;
    }

    set fechaNacimiento(fechaNacimiento) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaNacimiento)) {
            throw new Error("La fecha de nacimiento debe tener el formato 'YYYY-MM-DD'.");
        }
        this._fechaNacimiento = fechaNacimiento;
    }

    toString() {
        return `Nombre: ${this._nombre}\nApellidos: ${this._apellidos}\nGénero: ${this._genero}\nFecha de nacimiento: ${this._fechaNacimiento}`;
    }
}

// Clase Estudiante que hereda de Persona
class Estudiante extends Persona {
    constructor(nombre, apellidos, genero, fechaNacimiento, notasMatriculadas = {}) {
        super(nombre, apellidos, genero, fechaNacimiento);
        this.notasMatriculadas = notasMatriculadas;
    }

    get notasMatriculadas() {
        return this._notasMatriculadas;
    }

    set notasMatriculadas(notasMatriculadas) {
        if (typeof notasMatriculadas !== "object" || Array.isArray(notasMatriculadas)) {
            throw new Error("Las notas matriculadas deben ser un objeto.");
        }
        for (const [modulo, nota] of Object.entries(notasMatriculadas)) {
            if (typeof nota !== "number" || nota < 0 || nota > 10) {
                throw new Error(`La nota de ${modulo} debe ser un número entre 0 y 10.`);
            }
        }
        this._notasMatriculadas = notasMatriculadas;
    }

    toString() {
        const notasString = Object.entries(this._notasMatriculadas)
            .map(([modulo, nota]) => `${modulo}: ${nota}`)
            .join(", ");
        return `${super.toString()}\nNotas matriculadas: ${notasString}`;
    }

    obtenerNota(nombreModulo) {
        if (!(nombreModulo in this._notasMatriculadas)) {
            throw new Error(`No se encontró el módulo "${nombreModulo}".`);
        }
        return this._notasMatriculadas[nombreModulo];
    }

    actualizarNota(nombreModulo, nuevaNota) {
        if (typeof nuevaNota !== "number" || nuevaNota < 0 || nuevaNota > 10) {
            throw new Error("La nueva nota debe ser un número entre 0 y 10.");
        }
        if (!(nombreModulo in this._notasMatriculadas)) {
            throw new Error(`No se encontró el módulo "${nombreModulo}".`);
        }
        this._notasMatriculadas[nombreModulo] = nuevaNota;
    }

    calcularNotaMediaCiclo() {
        const notas = Object.values(this._notasMatriculadas);
        if (notas.length === 0) return 0;
        const suma = notas.reduce((acc, nota) => acc + nota, 0);
        return suma / notas.length;
    }
}


/****************************************************************************** TEST ***/
function mostrarDatosClasesPersonaYEstudiante() {
    document.write("<h2>Datos de la Clase Persona</h2>");

    const persona = new Persona("Ana", "García", "femenino", "1990-05-10");

    document.write("<h3>Información Inicial de la Persona</h3>");
    document.write(`<p><strong>Información:</strong><br> ${persona.toString()}</p>`);

    persona.nombre = "Ana María";
    persona.apellidos = "García López";
    persona.fechaNacimiento = "1991-06-20";

    document.write("<h3>Información de la Persona Después de Modificaciones</h3>");
    document.write(`<p><strong>Información:</strong><br> ${persona.toString()}</p>`);

    document.write("<h2>Datos de la Clase Estudiante</h2>");

    const estudiante = new Estudiante("Carlos", "Pérez", "masculino", "2001-08-15", {
        "Matemáticas": 8,
        "Historia": 9,
        "Física": 7
    });

    document.write("<h3>Información Inicial del Estudiante</h3>");
    document.write(`<p><strong>Información:</strong><br> ${estudiante.toString()}</p>`);

    const notaMatematicas = estudiante.obtenerNota("Matemáticas");
    document.write("<h3>Nota en un Módulo Específico</h3>");
    document.write(`<p><strong>Módulo:</strong> Matemáticas<br><strong>Nota:</strong> ${notaMatematicas}</p>`);

    estudiante.actualizarNota("Física", 10);
    document.write("<h3>Información del Estudiante Después de Actualizar la Nota</h3>");
    document.write(`<p><strong>Módulo Actualizado:</strong> Física<br><strong>Nueva Nota:</strong> 10</p>`);
    document.write(`<p><strong>Información:</strong><br> ${estudiante.toString()}</p>`);

    const notaMedia = estudiante.calcularNotaMediaCiclo();
    document.write("<h3>Nota Media del Ciclo</h3>");
    document.write(`<p><strong>Nota Media:</strong> ${notaMedia.toFixed(2)}</p>`);
}

mostrarDatosClasesPersonaYEstudiante();

