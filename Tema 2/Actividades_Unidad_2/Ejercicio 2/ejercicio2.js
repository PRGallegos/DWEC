document.getElementById("calcular").addEventListener("click", function () {
    // Obtener las fechas de los inputs
    let fecha1 = document.getElementById("fecha1").value;
    let fecha2 = document.getElementById("fecha2").value;
    let resultadoDiv = document.getElementById("resultado");

    // Validar las fechas
    if (!fecha1 || !fecha2) {
        resultadoDiv.innerHTML = '<span class="error">Por favor, ingresa ambas fechas.</span>';
        return;
    }

    // Convertir las fechas a objetos Date
    let fechaObj1 = new Date(fecha1);
    let fechaObj2 = new Date(fecha2);

    // Calcular la diferencia en milisegundos
    let diferencia = Math.abs(fechaObj2 - fechaObj1);

    // Convertir la diferencia de milisegundos a días
    let diferenciaDias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

    // Mostrar el resultado
    resultadoDiv.textContent = `La diferencia es de ${diferenciaDias} día(s).`;
});
