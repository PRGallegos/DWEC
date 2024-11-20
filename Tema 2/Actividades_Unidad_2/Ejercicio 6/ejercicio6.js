function calcularDiasReyes() {
    let hoy = new Date();
    let reyes = new Date(hoy.getFullYear(), 0, 6);

    if (hoy > reyes) {
        reyes.setFullYear(hoy.getFullYear() + 1);
    }

    let diferencia = reyes - hoy;
    let diasRestantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

    document.getElementById("resultado").textContent = `Faltan ${diasRestantes} días para el Día de Reyes.`;
}
