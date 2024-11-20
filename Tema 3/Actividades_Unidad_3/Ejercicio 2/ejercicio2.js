class Estudiantes {
    constructor() {
        this._alumnos = [];
    }

    agregarAlumno(estudiante) {
        this._alumnos.push(estudiante);
    }

    ordenarPorDNI() {
        this._alumnos.sort((a, b) => a.dni.localeCompare(b.dni));
    }

    ordenarPorFechaNacimiento() {
        this._alumnos.sort((a, b) => new Date(a.fechaNacimiento) - new Date(b.fechaNacimiento));
    }

    ordenarPorNotaMedia() {
        this._alumnos.sort((a, b) => b.calcularNotaMediaCiclo() - a.calcularNotaMediaCiclo());
    }

    buscarSecuencialPorDNI(dni) {
        return this._alumnos.find(a => a.dni === dni) || null;
    }

    buscarBinariaPorDNI(dni) {
        this.ordenarPorDNI();
        let inicio = 0, fin = this._alumnos.length - 1;

        while (inicio <= fin) {
            const medio = Math.floor((inicio + fin) / 2);
            const actual = this._alumnos[medio];

            if (actual.dni === dni) return actual;
            if (actual.dni < dni) inicio = medio + 1;
            else fin = medio - 1;
        }
        return null;
    }
}
