// Clase ser vivo 
class SerVivo {
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
class Vegetal extends serVivo {
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
class Vegetales {
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
        const comparacion = (a, b) => {
            return a._altura - b._altura;
        };

        // Devuelve un array ordenado pero  
        return this._arrayVegetales.sort(comparacion);
    }



    toString() {
        let devolver = "";
        for (let i = 0; i < this._arrayVegetales.length; i++) {
            Vegetales.toString() + "</br>";
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


// Probamos la ordenación 

let miArrayVegetales = [];
miArrayVegetales.push(new vegetal(10, 12), new vegetal(51, 55), new vegetal(72, 65), new vegetal(57, 61));

let misVegetales = new Vegetales(miArrayVegetales);

let miArrayVegetalesOrdenados = misVegetales.ordenarAltura();

// For clásico
for (let i = 0; i < miArrayVegetalesOrdenados.length; i++) {
    document.write(miArrayVegetalesOrdenados[i].toString() + "</br>");
}


// for (let vegetalOrdenado of miArrayVegetalesOrdenados) {
//     document.write(vegetalOrdenado.toString() + "</br>");
// }

console.time("T1");