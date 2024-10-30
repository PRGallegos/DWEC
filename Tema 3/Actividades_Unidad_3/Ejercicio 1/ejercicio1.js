/*
    Se debe definir una clase Persona. 
    • La clase Persona debe tener las siguientes propiedades: nombre, apellidos, genero y 
    fecha de nacimiento. 

    • Se debe definir una clase Estudiante que extienda a la clase Persona. 
    
    • La clase Estudiante debe contener (además de las propiedades de Persona) las 
    siguientes propiedades: una lista que contenga la información de los módulos 
    matrículados y la nota final obtenida en cada uno. 
    
    • Tanto la clase Persona como estudiante deben tener constructores. Cada constructor 
    debe tener los parámetros que sean necesarios. 
    
    • No se debe poder acceder directamente a las propiedades, sino que cada una debe 
    tener su propio getter y setter. 
    
    • Ambos tienen que tener un método "toString()" que devuelva una cadena que 
    condense toda la infomación de las propiedades. 
    
    • La clase Estudiante debe tener un método que permita obtener la nota de un módulo 
    dado su nombre. 
    
    • La clase Estudiante debe tener un método que permita actualizar la nota de un 
    módulo dados dos parametros (nombre del módulo y nueva nota). 
    
    • La clase Estudiante debe tener un método de "calcularNotaMediaCiclo()". 
*/


// Clase Persona
class Persona {
    constructor(nombre, apellidos, genero, fechaNacimiento) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._genero = genero;
        this._fechaNacimiento = fechaNacimiento;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellidos() {
        return this._apellidos;
    }

    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }

    get genero() {
        return this._genero;
    }

    set genero(genero) {
        this._genero = genero;
    }

    get fechaNacimiento() {
        return this._fechaNacimiento;
    }

    set fechaNacimiento(fechaNacimiento) {
        this._fechaNacimiento = fechaNacimiento;
    }

    toString() {
        return "Nombre: " + this._nombre + "\nApellidos: " + this._apellidos + "\nGenero: " + this._genero + "\nFecha de nacimiento: " + this._fechaNacimiento;
    }
}

// Clase Estudiante
class Estudiante extends Persona {
    constructor(nombre, apellidos, genero, fechaNacimiento, notasMatriculadas, notaFinal) {
        super(nombre, apellidos, genero, fechaNacimiento);
        this._notasMatriculadas = notasMatriculadas;
        this._notaFinal = notaFinal;
    }

    get notasMatriculadas() {
        return this._notasMatriculadas;
    }

    set notasMatriculadas(notasMatriculadas) {
        this._notasMatriculadas = notasMatriculadas;
    }

    get notaFinal() {
        return this._notaFinal;
    }

    set notaFinal(notaFinal) {
        this._notaFinal = notaFinal;
    }

    toString() {
        return super.toString() + "\nNotas matriculadas: " + this._notasMatriculadas + "\nNota final: " + this._notaFinal;
    }

    obtenerNota(nombreModulo) {
        return this._notasMatriculadas[nombreModulo];
    }

    actualizarNota(nombreModulo, nuevaNota) {
        this._notasMatriculadas[nombreModulo] = nuevaNota;
    }

    calcularNotaMediaCiclo() {
        let notaMediaCiclo = 0;
        for (let nota of this._notasMatriculadas) {
            notaMediaCiclo += nota;
        }
        return notaMediaCiclo / this._notasMatriculadas.length;
    }
    
}