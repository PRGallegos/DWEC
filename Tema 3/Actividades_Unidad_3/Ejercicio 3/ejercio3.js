// Clase Persona
class Persona {
    constructor(nombre, apellidos, genero, fechaNacimiento) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.genero = genero;
        this.fechaNacimiento = fechaNacimiento;
    }
}

// Clase Estudiante que extiende Persona
class Estudiante extends Persona {
    constructor(nombre, apellidos, genero, fechaNacimiento, dni, modulos = []) {
        super(nombre, apellidos, genero, fechaNacimiento);
        this.dni = dni;
        this.modulos = modulos;
    }

    calcularNotaMediaCiclo() {
        const total = this.modulos.reduce((sum, m) => sum + m.nota, 0);
        return (total / this.modulos.length) || 0;
    }
}

// Clase Estudiantes con métodos de búsqueda
class Estudiantes {
    constructor() {
        this.alumnos = [];
    }

    agregarAlumno(estudiante) {
        this.alumnos.push(estudiante);
    }

    ordenarPorDNI() {
        this.alumnos.sort((a, b) => a.dni.localeCompare(b.dni));
    }

    buscarSecuencialPorDNI(dni) {
        return this.alumnos.find(alumno => alumno.dni === dni) || null;
    }

    buscarBinariaPorDNI(dni) {
        this.ordenarPorDNI();
        let inicio = 0, fin = this.alumnos.length - 1;

        while (inicio <= fin) {
            const medio = Math.floor((inicio + fin) / 2);
            const actual = this.alumnos[medio];

            if (actual.dni === dni) return actual;
            if (actual.dni < dni) inicio = medio + 1;
            else fin = medio - 1;
        }
        return null;
    }
}

// Crear instancia de Estudiantes 
const estudiantes = new Estudiantes();
estudiantes.agregarAlumno(new Estudiante("Juan", "Pérez", "M", "1990-05-01", "12345678", [{ nombre: "Matemáticas", nota: 9 }]));
estudiantes.agregarAlumno(new Estudiante("Ana", "López", "F", "1992-08-15", "87654321", [{ nombre: "Ciencias", nota: 8 }]));
estudiantes.agregarAlumno(new Estudiante("Luis", "Martínez", "M", "1991-03-12", "34567890", [{ nombre: "Historia", nota: 7 }]));
estudiantes.agregarAlumno(new Estudiante("María", "Gómez", "F", "1989-11-22", "23456789", [{ nombre: "Química", nota: 10 }]));

// DNI a buscar
const dniABuscar = "34567890";

// Medir tiempo de búsqueda secuencial
console.time("Búsqueda Secuencial");
const estudianteSecuencial = estudiantes.buscarSecuencialPorDNI(dniABuscar);
console.timeEnd("Búsqueda Secuencial");
console.log("Resultado búsqueda secuencial:", estudianteSecuencial);

// Medir tiempo de búsqueda binaria
console.time("Búsqueda Binaria");
const estudianteBinaria = estudiantes.buscarBinariaPorDNI(dniABuscar);
console.timeEnd("Búsqueda Binaria");
console.log("Resultado búsqueda binaria:", estudianteBinaria);
