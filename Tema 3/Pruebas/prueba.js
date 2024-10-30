// Clase ser vivo 
class serVivo {
    constructor(peso) {
        this._peso = peso;
    }

    get peso() {
        return this._peso;
    }

    set peso(nuevoPeso) {

        if (nuevoPeso > 0) {
            this._peso = nuevoPeso;
        }
        else {
            this._peso = 0; // el _peso no puede ser negativo
        }
    }

    toString() {
        return "El _peso del ser vivo es " + this.peso + "</br>";
    }
}

// Clase vegetal que hereda de serVivo
class vegetal extends serVivo {
    constructor(_peso, _altura) {
        super(peso);
        this._altura = altura;
    }

    get _altura() {
        return this._altura;
    }

    set _altura(nuevaAltura) {
        if (nuevaAltura.length > 0) {
            this._altura = nuevaAltura;
        }
        else {
            this._altura = "Blanco";
        }
    }

    toString() {
        let devolver = super.toString();
        devolver += "La altura del vegetal es " + this._altura + "</br>";
        return devolver;
    }
}


//Clase vegetales tiene un array de objetos de la clase vegetal
class vegetales {
    constructor() {
        this._arrayVegetales = [];
    }

    get vegetales() {
        return this._arrayVegetales;
    }

    set vegetales(nuevoArrayVegetales) {
        this._arrayVegetales = nuevoArrayVegetales;
    }

    // Método que ordena por altura de forma ascendente
    ordenarAltura() {
        this._arrayVegetales.sort(function (a, b) {
            return a._altura - b._altura;
        });
    }

    toString() {
        let devolver = "";
        for (let i = 0; i < this._arrayVegetales.length; i++) {
            devolver += this._arrayVegetales[i].toString();
        }
        return devolver;
    }
}

/******************************************************************************* PRUEBAS ***/


// Crear un objeto serVivo
let bicho = new serVivo(10);
bicho.peso = 33;                        // llamando al set de la clase serVivo  
document.write(bicho.toString());

// Crear un objeto vegetal
let planta = new vegetal(10, 12);
planta.peso = 33;                          // llamando al set de la clase vegetal
planta.altura = 9;
document.write(planta.toString());