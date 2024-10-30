// // Crea una estructura de decisión que permita identificar la talla de una
// prenda de ropa a partir de las tallas europeas. Los valores posibles de las
// tallas europeas serían XL, XXL, XL, L, M, XS, S y la talla esperada sería
// Grande, Mediana, Pequeña.
// // Grande={XXL, XL, L} Mediana={M} Pequeña={XS, S}

let talla;
let tamanyo;
let valida = false;

// Filtrar la talla
while (!valida) {
    let tallaIntroducida = prompt("Introduce una talla: (XS, S, M,L,XL,XXL)");
    talla = tallaIntroducida.toLowerCase();

    // Validar la talla introducida
    if (talla == "xxl" || talla == "xl" || talla == "l" || talla == "m" || talla == "s" || talla == "xs") {
        valida = true;
    }
}

// Seleccionar el tamaño a partir de la talla
switch (talla) {
    case ("xxl", "xl", "l"):
        tamanyo = "Grande";
        break;

    case "m":
        tamanyo = "Mediana";
        break;
    case ("s", "xs"):
        tamanyo = "Pequeña";
        break;
}

document.write(tamanyo);
