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

// Crear instancia de Estudiantes y agregar datos
const estudiantes = new Estudiantes();
estudiantes.agregarAlumno(new Estudiante("Juan", "Pérez", "M", "1990-05-01", "12345678", [{ nombre: "Matemáticas", nota: 9 }]));
estudiantes.agregarAlumno(new Estudiante("Ana", "López", "F", "1992-08-15", "87654321", [{ nombre: "Ciencias", nota: 8 }]));
estudiantes.agregarAlumno(new Estudiante("Luis", "Martínez", "M", "1991-03-12", "34567890", [{ nombre: "Historia", nota: 7 }]));
estudiantes.agregarAlumno(new Estudiante("María", "Gómez", "F", "1989-11-22", "23456789", [{ nombre: "Química", nota: 10 }]));

// Encontrar el DNI más pequeño y más grande
estudiantes.ordenarPorDNI();
const dniMasPequeno = estudiantes.alumnos[0].dni;
const dniMasGrande = estudiantes.alumnos[estudiantes.alumnos.length - 1].dni;

console.log("DNI más pequeño:", dniMasPequeno);
console.log("DNI más grande:", dniMasGrande);

// Buscar el DNI más pequeño con búsqueda secuencial
console.time("Búsqueda Secuencial (DNI más pequeño)");
const estudiantePequenoSec = estudiantes.buscarSecuencialPorDNI(dniMasPequeno);
console.timeEnd("Búsqueda Secuencial (DNI más pequeño)");
console.log("Resultado búsqueda secuencial (DNI más pequeño):", estudiantePequenoSec);

// Buscar el DNI más grande con búsqueda secuencial
console.time("Búsqueda Secuencial (DNI más grande)");
const estudianteGrandeSec = estudiantes.buscarSecuencialPorDNI(dniMasGrande);
console.timeEnd("Búsqueda Secuencial (DNI más grande)");
console.log("Resultado búsqueda secuencial (DNI más grande):", estudianteGrandeSec);

// Buscar el DNI más pequeño con búsqueda binaria
console.time("Búsqueda Binaria (DNI más pequeño)");
const estudiantePequenoBin = estudiantes.buscarBinariaPorDNI(dniMasPequeno);
console.timeEnd("Búsqueda Binaria (DNI más pequeño)");
console.log("Resultado búsqueda binaria (DNI más pequeño):", estudiantePequenoBin);

// Buscar el DNI más grande con búsqueda binaria
console.time("Búsqueda Binaria (DNI más grande)");
const estudianteGrandeBin = estudiantes.buscarBinariaPorDNI(dniMasGrande);
console.timeEnd("Búsqueda Binaria (DNI más grande)");
console.log("Resultado búsqueda binaria (DNI más grande):", estudianteGrandeBin);
