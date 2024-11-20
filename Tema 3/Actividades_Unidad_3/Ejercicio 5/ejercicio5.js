class Media {
    constructor(titulo, prestado = false, valoraciones = []) {
        this._titulo = titulo;
        this._prestado = prestado;
        this._valoraciones = valoraciones;
    }

    get titulo() {
        return this._titulo;
    }

    get prestado() {
        return this._prestado;
    }

    get valoraciones() {
        return this._valoraciones;
    }

    cambiarEstadoPrestado() {
        this._prestado = !this._prestado;
    }

    addValoracion(valoracion) {
        this._valoraciones.push(valoracion);
    }

    getMediaValoraciones() {
        const total = this._valoraciones.reduce((sum, v) => sum + v, 0);
        return (total / this._valoraciones.length) || 0;
    }
}

class Libro extends Media {
    constructor(titulo, autor, paginas) {
        super(titulo);
        this._autor = autor;
        this._paginas = paginas;
    }
}

class Pelicula extends Media {
    constructor(titulo, director, duracion) {
        super(titulo);
        this._director = director;
        this._duracion = duracion;
    }
}
